from django.shortcuts import render
from homepage.models import Francois
from django.conf import settings
# Create your views here.

def lifestyle(request):

    francois = Francois.objects.all()

    data = {
    'francois':francois,
    'api_key': settings.BING_SECRET_KEY,
    'rapidapi_key': settings.RAPID_SECRET_KEY,
    }

    return render(request, 'lifestyle/lifestyle.html', data)
