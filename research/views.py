from django.shortcuts import render
import html5lib
from .models import ResearchPageImages, Stock, SP500, Nasdaq, MutualFund, TSX, Commoditie, ETF
from .resources import StockResource, SP500Resource, NasdaqResource, MutualFundResource, TSXResource, ETFResource, CommoditieResource
from django.contrib import messages
from django.http import HttpResponse
from tablib import Dataset

def upload(request):
    if request.method == 'POST':
        stock_resource = MutualFundResource()
        dataset = Dataset()
        new_stock = request.FILES['myfile']

        if not new_stock.name.endswith('xlsx'):
            messages.info(request, 'incorrect format')
            return render(request, 'upload.html')

        imported_dataset = dataset.load(new_stock.read(),format='xlsx')
        for data in imported_dataset:
            value = MutualFund(
                data[0],
                data[1],
                data[2]
            )
            value.save()
    return render(request, 'upload.html')
# Create your views here.
def research(request):

    page_images = ResearchPageImages.objects.all()
    tickers = Stock.objects.all()
    data = {
        'page_images': page_images
    }

    return render(request, 'research/stockprofile.html', data)
