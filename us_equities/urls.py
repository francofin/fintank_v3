from django.urls import path
from . import views

urlpatterns = [
    path('', views.us_equities, name='us_equities'),
]
