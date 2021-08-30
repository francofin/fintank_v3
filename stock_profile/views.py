from django.shortcuts import render
from research.models import TSX
from homepage.models import Francois
from research.models import Stock
from django.contrib import messages
from django.conf import settings
from yahoo_fin.stock_info import *
from yahoo_fin.options import *
import html5lib


def stock_profile(request):
    from scipy.optimize import minimize
    import statsmodels.api as sm
    from requests_html import HTMLSession
    from datetime import date
    from datetime import datetime
    import requests
    import asyncio
    from scipy import stats
    import json
    import random
    from random import randrange

    session = HTMLSession()

    fmp_api = settings.FMP_API

    francois = Francois.objects.all()
    all_stocks = Stock.objects.all()

    stock = random.choice(list(all_stocks))

    live_quote = requests.get(f'https://fmpcloud.io/api/v3/profile/{stock}?apikey={fmp_api}').content
    live_quote_data = json.loads(live_quote)[0]

    today = date.today()
    start_for_chart = date(today.year-5,1,2)
    ytd_start = date(today.year-1,12,31)

    symbol_chart = json.loads(requests.get(f'https://fmpcloud.io/api/v3/historical-price-full/'+str(stock)+'?from='+str(start_for_chart)+'&to='+str(today)+'&apikey='+fmp_api).content)['historical']
    symbol_chart.reverse()

    data_for_chart = []
    data_dates = []
    i = 0
    while i < len(symbol_chart):
        data_for_chart.append(symbol_chart[i]['adjClose'])
        data_dates.append(datetime.strptime(symbol_chart[i]['date'], "%Y-%m-%d").strftime('%b-%d-%Y'))
        i+=1

    json_dates = json.dumps(data_dates)
    json_prices = json.dumps(data_for_chart)

    ytd_data = json.loads(requests.get(f'https://fmpcloud.io/api/v3/historical-price-full/'+str(stock)+'?from='+str(ytd_start)+'&to='+str(today)+'&apikey='+fmp_api).content)['historical']
    ytd = (ytd_data[0]['adjClose']/ytd_data[-1]['adjClose']-1)*100

    if live_quote_data['mktCap']:
        min_market_cap_for_sector_analysis = live_quote_data['mktCap'] + 1000000000
    else:
        min_market_cap_for_sector_analysis = 1000000000
    sector_data = json.loads(requests.get(f'https://fmpcloud.io/api/v3/stock-screener?sector=technology&marketCapLowerThan={min_market_cap_for_sector_analysis}&limit=1000&apikey={fmp_api}').content)


    data = {
    'francois': francois,
    'stock':stock,
    'live_quote_data':live_quote_data,
    'json_prices':json_prices,
    'json_dates':json_dates,
    'ytd':ytd,

    }



    return render(request, 'stock_profile/profile.html', data)
