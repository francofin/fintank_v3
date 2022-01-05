from django.shortcuts import render, redirect
from django.contrib import messages
from django.conf import settings
from homepage.models import Francois
from research.models import Crypto
import html5lib
from heapq import nlargest

# Create your views here.
def crypto_profile(request):
    from scipy.optimize import minimize
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

    all_cryptos = Crypto.objects.all()
    francois = Francois.objects.all()

    crypto = random.choice(list(all_cryptos))
    selected_crypto_list = []
    i = 0
    while i < 10:
        selected_crypto_list.append(str(random.choice(all_cryptos)))
        i+=1

    crypto_prices = json.loads(requests.get(f'https://fmpcloud.io/api/v3/quotes/crypto?apikey={fmp_api}').content)
    cryptos_for_dashboard =  sorted(crypto_prices, key = lambda i: i['changesPercentage'], reverse=True)[0:10]


    crypto_for_breadcrumb_data = [curr for curr in crypto_prices if curr['symbol'] == str(crypto)]
    crypto_table_headers = ['Symbol', 'Name','Price', '%Change', 'Day Low', 'Day High', 'Year Low', 'Year high', 'Market Cap', '50 Day price Average', '200 Day Price Average', 'Volume', ]

    symbol_chart = json.loads(requests.get(f'https://fmpcloud.io/api/v3/historical-price-full/'+str(crypto)+'?&apikey='+fmp_api).content)['historical']
    symbol_chart.reverse()

    data_for_chart = []
    data_dates = []
    open_data = []
    high_data = []
    low_data = []
    volume_data = []
    i = 0
    while i < len(symbol_chart):
        data_for_chart.append(symbol_chart[i]['adjClose'])
        open_data.append(symbol_chart[i]['open'])
        high_data.append(symbol_chart[i]['high'])
        low_data.append(symbol_chart[i]['low'])
        volume_data.append(symbol_chart[i]['volume'])
        data_dates.append(datetime.strptime(symbol_chart[i]['date'], "%Y-%m-%d").strftime('%b-%d-%Y'))
        i+=1

        #dump data to json to pass to javascript chart functionality
    crypto_dates = json.dumps(data_dates)
    crypto_prices = json.dumps(data_for_chart)
    crypto_high_prices = json.dumps(high_data)
    crypto_open_prices = json.dumps(open_data)
    crypto_low_prices = json.dumps(low_data)
    crypto_volume = json.dumps(volume_data)

    data = {
    'crypto':crypto,
    'francois':francois,
    'cryptos_for_dashboard':cryptos_for_dashboard,
    'crypto_for_breadcrumb_data':crypto_for_breadcrumb_data[0],
    'crypto_table_headers':crypto_table_headers,
    'crypto_dates':crypto_dates,
    'crypto_prices':crypto_prices,
    'crypto_open_prices':crypto_open_prices,
    'crypto_low_prices':crypto_low_prices,
    'crypto_high_prices':crypto_high_prices,
    'crypto_volume':crypto_volume,
    }



    return render(request, "crypto_profile/crypto.html", data)
