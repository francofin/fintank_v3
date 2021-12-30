from django.urls import path
from . import views

urlpatterns = [
    path('', views.crypto_profile, name='crypto_profile'),
]
