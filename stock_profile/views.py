from django.shortcuts import render
from research.models import TSX
from homepage.models import Francois
from research.models import Stock, ProfileStock
from django.contrib import messages
from django.conf import settings
from yahoo_fin.stock_info import *
from yahoo_fin.options import *
import html5lib
from heapq import nlargest


def stock_profile(request):
    from scipy.optimize import minimize
    import statsmodels.api as sm
    from requests_html import HTMLSession
    from datetime import date
    from datetime import datetime
    import pandas as pd
    import numpy as np
    import requests
    import asyncio
    from scipy import stats
    import json
    import random
    from random import randrange

    session = HTMLSession()

    fmp_api = settings.FMP_API

    francois = Francois.objects.all()
    all_stocks = ProfileStock.objects.all()

    stock = random.choice(list(all_stocks))

    today = date.today()
    start_for_chart = date(today.year-5,1,2)
    ytd_start = date(today.year-1,12,31)

    #Read in stock data and get historical chart if avialable from fmp api call

    try:
        symbol_chart = json.loads(requests.get(f'https://fmpcloud.io/api/v3/historical-price-full/'+str(stock)+'?from='+str(start_for_chart)+'&to='+str(today)+'&apikey='+fmp_api).content)['historical']
        symbol_chart.reverse()
    except:
        stock = random.choice(list(all_stocks))
        symbol_chart = json.loads(requests.get(f'https://fmpcloud.io/api/v3/historical-price-full/'+str(stock)+'?from='+str(start_for_chart)+'&to='+str(today)+'&apikey='+fmp_api).content)['historical']
        symbol_chart.reverse()

    live_quote = requests.get(f'https://fmpcloud.io/api/v3/profile/{stock}?apikey={fmp_api}').content
    live_quote_data = json.loads(live_quote)[0]

    #Currency converter to standardize values either as CAD for Canadian stocks or USD for all other stocks
    currency = live_quote_data['currency']
    currency_conversion = json.loads(requests.get(f'https://fmpcloud.io/api/v3/fx?apikey={fmp_api}').content)
    pairings = [x['ticker'] for x in currency_conversion]
    fx_pair = currency+'/USD'
    fx_pair_reverse = 'USD/'+currency
    if currency == 'USD':
        exchange_rate = 1
    elif currency == 'CAD':
        exchange_rate = 1
    elif fx_pair in pairings:
        exchange_rate = float([x['bid'] for x in currency_conversion if x['ticker'] == fx_pair][0])
    elif fx_pair_reverse in pairings:
        exchange_rate = float([x['bid'] for x in currency_conversion if x['ticker'] == fx_pair_reverse][0])
    else:
        exchange_rate = 1

    data_for_chart = []
    data_dates = []
    i = 0
    while i < len(symbol_chart):
        data_for_chart.append(symbol_chart[i]['adjClose'])
        data_dates.append(datetime.strptime(symbol_chart[i]['date'], "%Y-%m-%d").strftime('%b-%d-%Y'))
        i+=1

        #dump data to json to pass to javascript chart functionality
    json_dates = json.dumps(data_dates)
    json_prices = json.dumps(data_for_chart)

    ytd_data = json.loads(requests.get(f'https://fmpcloud.io/api/v3/historical-price-full/'+str(stock)+'?from='+str(ytd_start)+'&to='+str(today)+'&apikey='+fmp_api).content)['historical']
    ytd = (ytd_data[0]['adjClose']/ytd_data[-1]['adjClose']-1)*100

    #Set minimum market cap and maxmimum market cap values for the screener compariosns.
    if live_quote_data['mktCap']:
        if currency == 'USD':
            market_cap = live_quote_data['mktCap']
        elif currency == 'CAD':
            market_cap = live_quote_data['mktCap']
        elif fx_pair in pairings:
            market_cap = live_quote_data['mktCap']*exchange_rate
        elif fx_pair_reverse in pairings:
            market_cap = live_quote_data['mktCap']/exchange_rate
        else:
            market_cap = live_quote_data['mktCap']

        min_market_cap_for_sector_analysis = market_cap - 1000000000
        if min_market_cap_for_sector_analysis < 0:
            min_market_cap_for_sector_analysis = market_cap
        elif min_market_cap_for_sector_analysis > 50000000000:
            min_market_cap_for_sector_analysis = 20000000000
        max_market_cap_for_sector_analysis = market_cap + 5000000000
    else:
        market_cap = 0
        min_market_cap_for_sector_analysis = 10000000000
        max_market_cap_for_sector_analysis = 999999999999


    #this first set of data is puller directly aloing with the screener api
    sector_data = json.loads(requests.get(f'https://fmpcloud.io/api/v3/stock-screener?sector=technology&marketCapLowerThan={max_market_cap_for_sector_analysis}&marketCapMoreThan={min_market_cap_for_sector_analysis}&limit=10000&apikey={fmp_api}').content)
    equity_list = [x['symbol'] for x in sector_data]
    equity_list_for_beta = [x['symbol'] for x in sector_data if x['beta'] != 0]
    equity_list_for_div = [x['symbol'] for x in sector_data if x['lastAnnualDividend'] !=0]
    beta_list = [x['beta'] for x in sector_data if x['beta'] != 0]
    div_list = [x['lastAnnualDividend'] for x in sector_data if x['lastAnnualDividend'] !=0]

    if str(stock) in equity_list:
        pass
    elif str(stock) in equity_list_for_beta:
        pass
    elif str(stock) in equity_list_for_div:
        pass
    else:
        equity_list.append(str(stock))
        equity_list_for_beta.append(str(stock))
        equity_list_for_div.append(str(stock))
        beta_list.append(live_quote_data['beta'])
        div_list.append(live_quote_data['lastDiv'])

    mean_beta = np.mean(beta_list)
    mean_div = np.mean(div_list)

    equity_beta_list = [dict(zip(equity_list_for_beta, beta_list))]
    equity_div_list = [dict(zip(equity_list_for_div, div_list))]
    dropped_largest_divs = nlargest(5, equity_div_list[0], key = equity_div_list[0].get)
    for key in dropped_largest_divs:
        del equity_div_list[0][key]
    #creates the list of the dictionaries used in the chart js bubble chart

    def create_stock_value_pair(dataset, factor_average):
        above_average_data = dict()
        below_average_data = dict()
        for key, value in dataset[0].items():
            if value > factor_average:
                above_average_data[key] = value
            else:
                below_average_data[key] = value

        return [above_average_data], [below_average_data]

    #Beta Ranks
    above_average_beta_list = create_stock_value_pair(equity_beta_list, mean_beta)[0]
    below_average_beta_list = create_stock_value_pair(equity_beta_list, mean_beta)[1]
    try:
        stock_beta_data = [dict({live_quote_data['symbol']: live_quote_data['beta']})]
    except:
        stock_beta_data = [dict({live_quote_data['symbol']: 0})]
    above_averge_beta_chart_range =  [x for x in range(0, len(above_average_beta_list[0]), 1)]
    below_averge_beta_chart_range =  [x for x in range(0, len(below_average_beta_list[0]), 1)]
    axis_labels = ['x', 'y']
    above_beta_data_for_chart =  [dict(zip(axis_labels, [above_averge_beta_chart_range[i], list(above_average_beta_list[0].values())[i]])) for i in range(0, len(above_average_beta_list[0]))]
    below_beta_data_for_chart =  [dict(zip(axis_labels, [below_averge_beta_chart_range[i], list(below_average_beta_list[0].values())[i]])) for i in range(0, len(below_average_beta_list[0]))]
    stock_beta_data_for_chart = [dict(zip(axis_labels, [max(above_averge_beta_chart_range), stock_beta_data[0][live_quote_data['symbol']]]))]
    above_average_beta_labels = list(above_average_beta_list[0].keys())
    below_average_beta_labels = list(below_average_beta_list[0].keys())
    stock_beta_label = live_quote_data['symbol']

    #Dividend Yield
    above_average_div_list = create_stock_value_pair(equity_div_list, mean_div)[0]
    below_average_div_list = create_stock_value_pair(equity_div_list, mean_div)[1]
    try:
        stock_div_data = [dict({live_quote_data['symbol']: live_quote_data['lastDiv']})]
    except:
        stock_div_data = [dict({live_quote_data['symbol']: 0})]
    above_averge_div_chart_range =  [x for x in range(0, len(above_average_div_list[0]), 1)]
    below_averge_div_chart_range =  [x for x in range(0, len(below_average_div_list[0]), 1)]
    axis_labels = ['x', 'y']
    above_div_data_for_chart =  [dict(zip(axis_labels, [above_averge_div_chart_range[i], list(above_average_div_list[0].values())[i]])) for i in range(0, len(above_average_div_list[0]))]
    below_div_data_for_chart =  [dict(zip(axis_labels, [below_averge_div_chart_range[i], list(below_average_div_list[0].values())[i]])) for i in range(0, len(below_average_div_list[0]))]
    stock_div_data_for_chart = [dict(zip(axis_labels, [max(above_averge_div_chart_range), stock_div_data[0][live_quote_data['symbol']]]))]
    above_average_div_labels = list(above_average_div_list[0].keys())
    below_average_div_labels = list(below_average_div_list[0].keys())
    stock_div_label = live_quote_data['symbol']
    # Batch queries for additional data
    query_string = ''
    i = 0
    while i < len(equity_list):
        query_string += equity_list[i]+","
        i+=1
    query_string = query_string[:-1]
    quotes =json.loads(requests.get(f'https://fmpcloud.io/api/v3/quote/{query_string}?apikey={fmp_api}').content)
    stock_quote =json.loads(requests.get(f'https://fmpcloud.io/api/v3/quote/{stock}?apikey={fmp_api}').content)

    if currency == 'USD':
        stock_quote[0]['price'] = stock_quote[0]['price']
    elif currency == 'CAD':
        exchange_rate = float([x['bid'] for x in currency_conversion if x['ticker'] == 'USD/CAD'][0])
        stock_quote[0]['price'] = stock_quote[0]['price']/exchange_rate
    elif fx_pair in pairings:
        exchange_rate = float([x['bid'] for x in currency_conversion if x['ticker'] == fx_pair][0])
        stock_quote[0]['price'] = stock_quote[0]['price']*exchange_rate
    elif fx_pair_reverse in pairings:
        exchange_rate = float([x['bid'] for x in currency_conversion if x['ticker'] == fx_pair_reverse][0])
        stock_quote[0]['price'] = stock_quote[0]['price']/exchange_rate
    else:
        stock_quote[0]['price'] = stock_quote[0]['price']

    #Align prices for comparison charts
    for quote in quotes:
        if quote['exchange'] == 'EURONEXT':
            exchange_rate = float([x['bid'] for x in currency_conversion if x['ticker'] == 'EUR/USD'][0])
            quote['price'] = quote['price']*exchange_rate
        elif quote['exchange'] == 'VIE':
            exchange_rate = float([x['bid'] for x in currency_conversion if x['ticker'] == 'EUR/USD'][0])
            quote['price'] = quote['price']*exchange_rate
        elif quote['exchange'] == 'TSX':
            exchange_rate = float([x['bid'] for x in currency_conversion if x['ticker'] == 'USD/CAD'][0])
            quote['price'] = quote['price']/exchange_rate
        else:
            quote['price'] = quote['price']

    quote_list = [x['symbol'] for x in quotes if x['marketCap'] !=None]
    quote_list_filtered_high_pe = [x['symbol'] for x in quotes if  x['pe'] !=None and x['pe'] < 200]
    pe_list =  [x['pe'] for x in quotes if  x['pe'] !=None and x['pe'] < 200]
    mean_pe = np.mean(pe_list)
    market_cap_list = [x['marketCap'] for x in quotes if x['marketCap'] !=None]
    market_cap_normalized = [(x - np.min(market_cap_list))/(np.max(market_cap_list) - np.min(market_cap_list)) for x in market_cap_list]
    mean_mcap = np.mean(market_cap_normalized)
    quote_list_filtered_ma = [x['symbol'] for x in quotes if  x['priceAvg50'] !=None and x['priceAvg200'] !=None]
    ma_50_200 = [x['priceAvg50']/x['priceAvg200'] for x in quotes if x['priceAvg50'] !=None and x['priceAvg200'] !=None]
    mean_ma = np.mean(ma_50_200)
    quote_list_for_prices = [x['symbol'] for x in quotes if x['price'] !=None]
    price_list =  [x['price'] for x in quotes if x['price'] !=None]
    mean_price = np.mean(price_list)
    #add conditionaloty to confirm price data

    quote_pe_list = [dict(zip(quote_list_filtered_high_pe, pe_list))]
    quote_marketcap_list = [dict(zip(quote_list, market_cap_normalized))]
    quote_ma_list = [dict(zip(quote_list_filtered_ma, ma_50_200))]
    quote_price_list = [dict(zip(quote_list_for_prices, price_list))]
    stock_price_data = [dict({live_quote_data['symbol']: live_quote_data['price']})]
    price_range =  [x for x in range(0, len(price_list), 1)]
    #Price to Earnings
    above_average_pe_list = create_stock_value_pair(quote_pe_list, mean_pe)[0]
    below_average_pe_list = create_stock_value_pair(quote_pe_list, mean_pe)[1]
    if stock_quote[0]['pe']:
        stock_pe_data = [dict({live_quote_data['symbol']: stock_quote[0]['pe']})]
    else:
        stock_pe_data = [dict({live_quote_data['symbol']: 0})]
    above_averge_pe_chart_range =  [x for x in range(0, len(above_average_pe_list[0]), 1)]
    below_averge_pe_chart_range =  [x for x in range(0, len(below_average_pe_list[0]), 1)]
    above_pe_data_for_chart =  [dict(zip(axis_labels, [above_averge_pe_chart_range[i], list(above_average_pe_list[0].values())[i]])) for i in range(0, len(above_average_pe_list[0]))]
    below_pe_data_for_chart =  [dict(zip(axis_labels, [below_averge_pe_chart_range[i], list(below_average_pe_list[0].values())[i]])) for i in range(0, len(below_average_pe_list[0]))]
    stock_pe_data_for_chart = [dict(zip(axis_labels, [max(above_averge_pe_chart_range), stock_pe_data[0][live_quote_data['symbol']]]))]
    above_average_pe_labels = list(above_average_pe_list[0].keys())
    below_average_pe_labels = list(below_average_pe_list[0].keys())
    stock_pe_label = live_quote_data['symbol']

    above_average_price_list = create_stock_value_pair(quote_price_list, mean_price)[0]
    below_average_price_list = create_stock_value_pair(quote_price_list, mean_price)[1]
    if stock_quote[0]['price']:
        stock_price_data = [dict({live_quote_data['symbol']: stock_quote[0]['price']})]
    else:
        stock_price_data = [dict({live_quote_data['symbol']: 0})]
    above_averge_price_chart_range =  [x for x in range(0, len(above_average_price_list[0]), 1)]
    below_averge_price_chart_range =  [x for x in range(0, len(below_average_price_list[0]), 1)]
    above_price_data_for_chart =  [dict(zip(axis_labels, [above_averge_price_chart_range[i], list(above_average_price_list[0].values())[i]])) for i in range(0, len(above_average_price_list[0]))]
    below_price_data_for_chart =  [dict(zip(axis_labels, [below_averge_price_chart_range[i], list(below_average_price_list[0].values())[i]])) for i in range(0, len(below_average_price_list[0]))]
    stock_price_data_for_chart = [dict(zip(axis_labels, [max(above_averge_price_chart_range), stock_price_data[0][live_quote_data['symbol']]]))]
    above_average_price_labels = list(above_average_price_list[0].keys())
    below_average_price_labels = list(below_average_price_list[0].keys())
    stock_price_label = live_quote_data['symbol']

    #Market Cap
    above_average_marketcap_list = create_stock_value_pair(quote_marketcap_list, mean_mcap)[0]
    below_average_marketcap_list = create_stock_value_pair(quote_marketcap_list, mean_mcap)[1]
    if stock_quote[0]['marketCap']:
        stock_mcap_data = [dict({live_quote_data['symbol']: (stock_quote[0]['marketCap'] - np.min(market_cap_list))/(np.max(market_cap_list) - np.min(market_cap_list))})]
    else:
        stock_mcap_data = [dict({live_quote_data['symbol']: 0})]
    above_averge_mcap_chart_range =  [x for x in range(0, len(above_average_marketcap_list[0]), 1)]
    below_averge_mcap_chart_range =  [x for x in range(0, len(below_average_marketcap_list[0]), 1)]
    above_mcap_data_for_chart =  [dict(zip(axis_labels, [above_averge_mcap_chart_range[i], list(above_average_marketcap_list[0].values())[i]])) for i in range(0, len(above_average_marketcap_list[0]))]
    below_mcap_data_for_chart =  [dict(zip(axis_labels, [below_averge_mcap_chart_range[i], list(below_average_marketcap_list[0].values())[i]])) for i in range(0, len(below_average_marketcap_list[0]))]
    stock_mcap_data_for_chart = [dict(zip(axis_labels, [max(above_averge_mcap_chart_range), stock_mcap_data[0][live_quote_data['symbol']]]))]
    above_average_mcap_labels = list(above_average_marketcap_list[0].keys())
    below_average_mcap_labels = list(below_average_marketcap_list[0].keys())
    stock_mcap_label = live_quote_data['symbol']

    above_average_ma_list = create_stock_value_pair(quote_ma_list, mean_ma)[0]
    below_average_ma_list = create_stock_value_pair(quote_ma_list, mean_ma)[1]
    try:
        stock_ma_data = [dict({live_quote_data['symbol']: stock_quote[0]['priceAvg50']/stock_quote[0]['priceAvg200']})]
    except:
        stock_ma_data = [dict({live_quote_data['symbol']: 0})]
    above_averge_ma_chart_range =  [x for x in range(0, len(above_average_ma_list[0]), 1)]
    below_averge_ma_chart_range =  [x for x in range(0, len(below_average_ma_list[0]), 1)]
    above_ma_data_for_chart =  [dict(zip(axis_labels, [above_averge_ma_chart_range[i], list(above_average_ma_list[0].values())[i]])) for i in range(0, len(above_average_ma_list[0]))]
    below_ma_data_for_chart =  [dict(zip(axis_labels, [below_averge_ma_chart_range[i], list(below_average_ma_list[0].values())[i]])) for i in range(0, len(below_average_ma_list[0]))]
    stock_ma_data_for_chart = [dict(zip(axis_labels, [max(above_averge_ma_chart_range), stock_ma_data[0][live_quote_data['symbol']]]))]
    above_average_ma_labels = list(above_average_ma_list[0].keys())
    below_average_ma_labels = list(below_average_ma_list[0].keys())
    stock_ma_label = live_quote_data['symbol']

    stock_peers = json.loads(requests.get(f'https://fmpcloud.io/api/v4/stock_peers?symbol='+str(stock)+'&apikey='+fmp_api).content)
    try:
        peer_list = stock_peers[0]['peersList']
        query_list = []
        j = 0
        while j < len(peer_list):
            string =  "https://fmpcloud.io/api/v3/quote/"+peer_list[j]+"?apikey="+fmp_api
            query_list.append(string)
            j+=1

        all_peer_data = []
        k = 0
        while k < len(query_list):
            stock_data = json.loads(requests.get(f'{query_list[k]}').content)
            if len(stock_data)== 0:
                pass
            else:
                stock_data = stock_data[0]
                all_peer_data.append(stock_data)
            k+=1

        divyield = [x['dividendYielPercentageTTM'] for x in all_peer_data]
        pe = [x['priceEarningsRatioTTM'] for x in all_peer_data]
        payout = [x['payoutRatioTTM'] for x in all_peer_data]
        operating_profit_margin = [x['operatingProfitMarginTTM'] for x in all_peer_data]
        return_on_assets = [x['returnOnAssetsTTM'] for x in all_peer_data]
        return_on_equity = [x['returnOnEquityTTM'] for x in all_peer_data]
        return_on_capital = [x['returnOnCapitalEmployedTTM'] for x in all_peer_data]
        debt_to_equity = [x['debtEquityRatioTTM'] for x in all_peer_data]
        debt_to_capitalization = [x['totalDebtToCapitalizationTTM'] for x in all_peer_data]
        interest_coverage = [x['interestCoverageTTM'] for x in all_peer_data]
        cash_flow_to_debt = [x['cashFlowToDebtRatioTTM'] for x in all_peer_data]
        free_cash_flow = [x['freeCashFlowOperatingCashFlowRatioTTM'] for x in all_peer_data]
        price_to_book = [x['priceToBookRatioTTM'] for x in all_peer_data]
        price_to_sales = [x['priceToSalesRatioTTM'] for x in all_peer_data]
        price_to_cash_flow = [x['priceCashFlowRatioTTM'] for x in all_peer_data]
    except:
        pass





    data = {
    'francois': francois,
    'stock':stock,
    'live_quote_data':live_quote_data,
    'json_prices':json_prices,
    'json_dates':json_dates,
    'above_pe_data_for_chart':above_pe_data_for_chart,
    'below_pe_data_for_chart':below_pe_data_for_chart,
    'above_average_pe_labels':above_average_pe_labels,
    'below_average_pe_labels':below_average_pe_labels,
    'stock_pe_data_for_chart':stock_pe_data_for_chart,
    'stock_pe_label':stock_pe_label,
    'above_beta_data_for_chart':above_beta_data_for_chart,
    'below_beta_data_for_chart':below_beta_data_for_chart,
    'above_average_beta_labels':above_average_beta_labels,
    'below_average_beta_labels':below_average_beta_labels,
    'stock_beta_data_for_chart':stock_beta_data_for_chart,
    'stock_beta_label':stock_pe_label,
    'above_div_data_for_chart':above_div_data_for_chart,
    'below_div_data_for_chart':below_div_data_for_chart,
    'above_average_div_labels':above_average_div_labels,
    'below_average_div_labels':below_average_div_labels,
    'stock_div_data_for_chart':stock_div_data_for_chart,
    'stock_div_label':stock_div_label,
    'above_mcap_data_for_chart':above_mcap_data_for_chart,
    'below_mcap_data_for_chart':below_mcap_data_for_chart,
    'above_average_mcap_labels':above_average_mcap_labels,
    'below_average_mcap_labels':below_average_mcap_labels,
    'stock_mcap_data_for_chart':stock_mcap_data_for_chart,
    'stock_mcap_label':stock_mcap_label,
    'above_ma_data_for_chart':above_ma_data_for_chart,
    'below_ma_data_for_chart':below_ma_data_for_chart,
    'above_average_ma_labels':above_average_ma_labels,
    'below_average_ma_labels':below_average_ma_labels,
    'stock_ma_data_for_chart':stock_ma_data_for_chart,
    'stock_ma_label':stock_ma_label,
    'above_price_data_for_chart':above_price_data_for_chart,
    'below_price_data_for_chart':below_price_data_for_chart,
    'above_average_price_labels':above_average_price_labels,
    'below_average_price_labels':below_average_price_labels,
    'stock_price_data_for_chart':stock_price_data_for_chart,
    'stock_price_label':stock_price_label,
    'ytd':ytd,
    'min_market_cap_for_sector_analysis':min_market_cap_for_sector_analysis,
    # 'divyield':divyield,
    # 'pe':pe,
    # 'payout':payout,
    # 'operating_profit_margin':operating_profit_margin,
    # 'return_on_assets':return_on_assets,
    # 'return_on_equity':return_on_equity,
    # 'debt_to_equity':debt_to_equity,
    # 'debt_to_capitalization':debt_to_capitalization,
    # 'interest_coverage':interest_coverage,
    # 'cash_flow_to_debt':cash_flow_to_debt,
    # 'free_cash_flow':free_cash_flow,
    # 'price_to_book':price_to_book,
    # 'price_to_sales':price_to_sales,
    # 'price_to_cash_flow':price_to_cash_flow,
    # 'peer_list':peer_list,

    }



    return render(request, 'stock_profile/profile.html', data)
