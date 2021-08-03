from django.shortcuts import render
from .models import Francois
# Create your views here.
def home(request):

    francois = Francois.objects.all()
    data = {
        'francois': francois
    }
    return render(request, 'homepage/home.html', data)


def about(request):
    return render(request, 'homepage/about.html')

def contact(request):
    return render(request, 'homepage/contact.html')
