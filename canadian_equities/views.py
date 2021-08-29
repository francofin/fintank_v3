from django.shortcuts import render
from research.models import TSX
from homepage.models import Francois
from django.contrib import messages
from django.conf import settings
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
# Create your views here.


def canadian_equities(request):
    import requests
    import json

    fmp_api = settings.FMP_API

    francois = Francois.objects.all()

    canadian_markets = json.loads(requests.get(f'https://fmpcloud.io/api/v3/quotes/tsx?apikey={fmp_api}').content)


    i = 0
    etf_list = []
    etf_index_list = []
    while i < len(canadian_markets):
        if (canadian_markets[i]['name'] !=None) and ("ETF" in canadian_markets[i]['name']):
            etf_list.append(canadian_markets[i])
            etf_index_list.append(i)
        i+=1

    canadian_markets_ex_etf = [j for i, j in enumerate(canadian_markets) if i not in etf_index_list]
    length = len(canadian_markets_ex_etf)

    paginator = Paginator(canadian_markets_ex_etf,30)
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
    'canadian_markets_ex_etf':paged_equities,
    'page_range':page_range,

    }


    return render(request, 'equities/canadian_equities.html', data)
