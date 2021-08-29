from django.urls import path
from . import views

urlpatterns = [
    path('', views.stock_profile, name='stock_profile'),
]
