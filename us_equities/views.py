from django.shortcuts import render
from research.models import TSX
from homepage.models import Francois
from django.contrib import messages
from django.conf import settings
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
# Create your views here.


def us_equities(request):
    import requests
    import json

    fmp_api = settings.FMP_API

    francois = Francois.objects.all()

    nasdaq_equities = requests.get(f'https://fmpcloud.io/api/v3/quotes/nasdaq?apikey={fmp_api}').content
    nyse_equities = requests.get(f'https://fmpcloud.io/api/v3/quotes/nyse?apikey={fmp_api}').content
    nasdaq_markets = json.loads(nasdaq_equities)
    nyse_markets = json.loads(nyse_equities)


    i = 0
    nas_etf_list = []
    nas_etf_index_list = []
    while i < len(nasdaq_markets):
        if (nasdaq_markets[i]['name'] !=None) and ("ETF" in nasdaq_markets[i]['name']):
            nas_etf_list.append(nasdaq_markets[i])
            nas_etf_index_list.append(i)
        i+=1

    j = 0
    ny_etf_list = []
    ny_etf_index_list = []
    while j < len(nyse_markets):
        if (nyse_markets[j]['name'] !=None) and ("ETF" in nyse_markets[j]['name']):
            ny_etf_list.append(nyse_markets[j])
            ny_etf_index_list.append(j)
        j+=1

    nasdaq_markets_ex_etf = [j for i, j in enumerate(nasdaq_markets) if i not in nas_etf_index_list]
    nyse_markets_ex_etf = [j for i, j in enumerate(nyse_markets) if i not in ny_etf_index_list]
    combined_us_markets_ex_etf = nasdaq_markets_ex_etf+nyse_markets_ex_etf
    length = len(combined_us_markets_ex_etf)

    paginator = Paginator(combined_us_markets_ex_etf,30)
    page = request.GET.get('page')
    paged_equities = paginator.get_page(page)
    index = paginator.page_range.index(paged_equities.number)
    max_index = len(paginator.page_range)
    start_index = index - 8 if index >= 8 else 0
    end_index = index + 8 if index <= max_index - 8 else max_index
    page_range = list(paginator.page_range[start_index:end_index])


    data = {
    'francois': francois,
    'length': length,
    'combined_us_markets_ex_etf':paged_equities,
    'page_range':page_range,

    }


    return render(request, 'equities/us_equities.html', data)
