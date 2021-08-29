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
    live_quote = requests.get(f'https://fmpcloud.io/api/v3/quote/{stock}?apikey={api}').content

    data = {
    'francois': francois,
    'stock':stock,

    }



    return render(request, 'stock_profile/profile.html', data)
