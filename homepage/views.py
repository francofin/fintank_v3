from django.shortcuts import render
from .models import Francois
from django.conf import settings


# Create your views here.
def home(request):
    import requests
    import pandas as pd
    import json

    francois = Francois.objects.all()

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
    vix_perc = vix['changesPercentage']
    vix_dollar = vix['change']

    tsx60_name = tsx60['name']
    tsx60_price = tsx60['price']
    tsx60_perc = tsx60['changesPercentage']
    tsx60_dollar = tsx60['change']

    ftse_name = ftse['name']
    ftse_price = ftse['price']
    ftse_perc = ftse['changesPercentage']
    ftse_dollar = ftse['change']

    tyield_name = tyield['name']
    tyield_price = tyield['price']
    tyield_perc = tyield['changesPercentage']
    tyield_dollar = tyield['change']

    tyield10_name = tyield10['name']
    tyield10_price = tyield10['price']
    tyield10_perc = tyield10['changesPercentage']
    tyield10_dollar = tyield10['change']

    dji_name = dji['name']
    dji_price = dji['price']
    dji_perc = dji['changesPercentage']
    dji_dollar = dji['change']

    gspc_name = gspc['name']
    gspc_price = gspc['price']
    gspc_perc = gspc['changesPercentage']
    gspc_dollar = gspc['change']

    ixic_name = ixic['name']
    ixic_price = ixic['price']
    ixic_perc = ixic['changesPercentage']
    ixic_dollar = ixic['change']

    gsptse_name = gsptse['name']
    gsptse_price = gsptse['price']
    gsptse_perc = gsptse['changesPercentage']
    gsptse_dollar = gsptse['change']

    rut_name = rut['name']
    rut_price = rut['price']
    rut_perc = rut['changesPercentage']
    rut_dollar = rut['change']

    rutone_name = rutone['name']
    rutone_price = rutone['price']
    rutone_perc = rutone['changesPercentage']
    rutone_dollar = rutone['change']

    nikkei_name = nikkei['name']
    nikkei_price = nikkei['price']
    nikkei_perc = nikkei['changesPercentage']
    nikkei_dollar = nikkei['change']



    data = {
        'francois': francois,
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
