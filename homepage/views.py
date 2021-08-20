from django.shortcuts import render
from .models import Francois, GainersAndLoser
from django.conf import settings
from yahoo_fin.stock_info import *


# Create your views here.
def home(request):
    import requests
    import pandas as pd
    import json

    francois = Francois.objects.all()

    gainers_and_losers = GainersAndLoser.objects.all()

    fmp_api = settings.FMP_API

    markets = requests.get(f'https://fmpcloud.io/api/v3/quotes/index?apikey={fmp_api}')
    markets_df = pd.DataFrame(json.loads(markets.content)).set_index('symbol').T
    markets_df_clean1 = markets_df.loc['name':'change']
    home_indices = markets_df_clean1[['^DJI', '^GSPC', '^IXIC', '^GSPTSE', '^RUTTR', "^RUITR", "^VIX", "^N225", "^FTSE", "TX60.TS","^TYX", "^TNX"]]
    dji = home_indices['^DJI']
    gspc = home_indices['^GSPC']
    ixic = home_indices['^IXIC']
    gsptse = home_indices['^GSPTSE']
    rut = home_indices['^RUTTR']
    rutone = home_indices['^RUITR']
    nikkei = home_indices['^N225']
    tyield = home_indices['^TYX']
    tyield10 = home_indices['^TNX']
    ftse = home_indices['^FTSE']
    tsx60 = home_indices['TX60.TS']
    vix = home_indices['^VIX']

    vix_name = vix['name']
    vix_price = vix['price']
    vix_perc = round(vix['changesPercentage'],2)
    vix_dollar = vix['change']

    tsx60_name = tsx60['name']
    tsx60_price = tsx60['price']
    tsx60_perc = round(tsx60['changesPercentage'],2)
    tsx60_dollar = tsx60['change']

    ftse_name = ftse['name']
    ftse_price = ftse['price']
    ftse_perc = round(ftse['changesPercentage'],2)
    ftse_dollar = ftse['change']

    tyield_name = tyield['name']
    tyield_price = tyield['price']
    tyield_perc = round(tyield['changesPercentage'],2)
    tyield_dollar = tyield['change']

    tyield10_name = tyield10['name']
    tyield10_price = tyield10['price']
    tyield10_perc = round(tyield10['changesPercentage'],2)
    tyield10_dollar = tyield10['change']

    dji_name = dji['name']
    dji_price = dji['price']
    dji_perc = round(dji['changesPercentage'],2)
    dji_dollar = dji['change']

    gspc_name = gspc['name']
    gspc_price = gspc['price']
    gspc_perc = round(gspc['changesPercentage'],2)
    gspc_dollar = gspc['change']

    ixic_name = ixic['name']
    ixic_price = ixic['price']
    ixic_perc = round(ixic['changesPercentage'],2)
    ixic_dollar = ixic['change']

    gsptse_name = gsptse['name']
    gsptse_price = gsptse['price']
    gsptse_perc = round(gsptse['changesPercentage'],2)
    gsptse_dollar = gsptse['change']

    rut_name = rut['name']
    rut_price = rut['price']
    rut_perc = round(rut['changesPercentage'],2)
    rut_dollar = rut['change']

    rutone_name = rutone['name']
    rutone_price = rutone['price']
    rutone_perc = round(rutone['changesPercentage'],2)
    rutone_dollar = rutone['change']

    nikkei_name = nikkei['name']
    nikkei_price = nikkei['price']
    nikkei_perc = round(nikkei['changesPercentage'],2)
    nikkei_dollar = nikkei['change']

    '''
    Get Day Gainers and losers from yahoo_fin modules

    '''


    gainers = get_day_gainers()
    gainers = gainers[gainers['Price (Intraday)'] > 10].values

    gainer1_ticker = gainers[0][0]
    gainer1_name = gainers[0][1]
    gainer1_price = gainers[0][2]
    gainer1_perc_change = gainers[0][4]

    gainer2_ticker = gainers[1][0]
    gainer2_name = gainers[1][1]
    gainer2_price = gainers[1][2]
    gainer2_perc_change = gainers[1][4]

    gainer3_ticker = gainers[2][0]
    gainer3_name = gainers[2][1]
    gainer3_price = gainers[2][2]
    gainer3_perc_change = gainers[2][4]

    gainer4_ticker = gainers[3][0]
    gainer4_name = gainers[3][1]
    gainer4_price = gainers[3][2]
    gainer4_perc_change = gainers[3][4]

    gainer5_ticker = gainers[4][0]
    gainer5_name = gainers[4][1]
    gainer5_price = gainers[4][2]
    gainer5_perc_change = gainers[4][4]

    losers = get_day_losers()
    losers = losers[losers['Price (Intraday)']>25].values

    loser1_ticker = losers[0][0]
    loser1_name = losers[0][1]
    loser1_price = losers[0][2]
    loser1_perc_change = losers[0][4]

    loser2_ticker = losers[1][0]
    loser2_name = losers[1][1]
    loser2_price = losers[1][2]
    loser2_perc_change = losers[1][4]

    loser3_ticker = losers[2][0]
    loser3_name = losers[2][1]
    loser3_price = losers[2][2]
    loser3_perc_change = losers[2][4]

    loser4_ticker = losers[3][0]
    loser4_name = losers[3][1]
    loser4_price = losers[3][2]
    loser4_perc_change = losers[3][4]

    loser5_ticker = losers[4][0]
    loser5_name = losers[4][1]
    loser5_price = losers[4][2]
    loser5_perc_change = losers[4][4]

    data = {
        'francois': francois,
        'gainers_and_losers':gainers_and_losers,
        'api_key': settings.BING_SECRET_KEY,
        'rapidapi_key': settings.RAPID_SECRET_KEY,
        "fmp_api":fmp_api,
        'vix_name':vix_name,
        'vix_price':vix_price,
        'vix_perc':vix_perc,
        'vix_dollar':vix_dollar,
        'tsx60_name':tsx60_name,
        'tsx60_price':tsx60_price,
        'tsx60_perc':tsx60_perc,
        'tsx60_dollar':tsx60_dollar,
        'ftse_name':ftse_name,
        'ftse_price':ftse_price,
        'ftse_perc':ftse_perc,
        'ftse_dollar':ftse_dollar,
        'tyield_name':tyield_name,
        'tyield_price':tyield_price,
        'tyield_perc':tyield_perc,
        'tyield_dollar':tyield_dollar,
        'tyield10_name':tyield10_name,
        'tyield10_price':tyield10_price,
        'tyield10_perc':tyield10_perc,
        'tyield10_dollar':tyield10_dollar,
        'dji_name':dji_name,
        'dji_price':dji_price,
        'dji_perc':dji_perc,
        'dji_dollar':dji_dollar,
        'gspc_name':gspc_name,
        'gspc_price':gspc_price,
        'gspc_perc':gspc_perc,
        'gspc_dollar':gspc_dollar,
        'gsptse_name':gsptse_name,
        'gsptse_price':gsptse_price,
        'gsptse_perc':gsptse_perc,
        'gsptse_dollar':gsptse_dollar,
        'ixic_name':ixic_name,
        'ixic_price':ixic_price,
        'ixic_perc':ixic_perc,
        'ixic_dollar':ixic_dollar,
        'rut_name':rut_name,
        'rut_price':rut_price,
        'rut_perc':rut_perc,
        'rut_dollar':rut_dollar,
        'rutone_name':rutone_name,
        'rutone_price':rutone_price,
        'rutone_perc':rutone_perc,
        'rutone_dollar':rutone_dollar,
        'nikkei_name':nikkei_name,
        'nikkei_price':nikkei_price,
        'nikkei_perc':nikkei_perc,
        'nikkei_dollar':nikkei_dollar,
        'loser1_ticker':loser1_ticker,
        'loser1_name': loser1_name,
        'loser1_price': loser1_price,
        'loser1_perc_change': loser1_perc_change,
        'loser2_ticker':loser2_ticker,
        'loser2_name': loser2_name,
        'loser2_price': loser2_price,
        'loser2_perc_change': loser2_perc_change,
        'loser3_ticker':loser3_ticker,
        'loser3_name': loser3_name,
        'loser3_price': loser3_price,
        'loser3_perc_change': loser3_perc_change,
        'loser4_ticker':loser4_ticker,
        'loser4_name': loser4_name,
        'loser4_price': loser4_price,
        'loser4_perc_change': loser4_perc_change,
        'loser5_ticker':loser5_ticker,
        'loser5_name': loser5_name,
        'loser5_price': loser5_price,
        'loser5_perc_change': loser5_perc_change,
        'gainer1_ticker':gainer1_ticker,
        'gainer1_name':gainer1_name,
        'gainer1_price':gainer1_price,
        'gainer1_perc_change':gainer1_perc_change,
        'gainer2_ticker':gainer2_ticker,
        'gainer2_name':gainer2_name,
        'gainer2_price':gainer2_price,
        'gainer2_perc_change':gainer2_perc_change,
        'gainer3_ticker':gainer3_ticker,
        'gainer3_name':gainer3_name,
        'gainer3_price':gainer3_price,
        'gainer3_perc_change':gainer3_perc_change,
        'gainer4_ticker':gainer4_ticker,
        'gainer4_name':gainer4_name,
        'gainer4_price':gainer4_price,
        'gainer4_perc_change':gainer4_perc_change,
        'gainer5_ticker':gainer5_ticker,
        'gainer5_name':gainer5_name,
        'gainer5_price':gainer5_price,
        'gainer5_perc_change':gainer5_perc_change,
    }
    return render(request, 'homepage/home.html', data)


def about(request):
    francois = Francois.objects.all()
    data = {
        'francois':francois,
    }
    return render(request, 'homepage/about.html', data)

def contact(request):
    return render(request, 'homepage/contact.html')
