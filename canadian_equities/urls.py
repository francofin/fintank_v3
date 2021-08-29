from django.urls import path
from . import views

urlpatterns = [
    path('', views.canadian_equities, name='canadian_equities'),
]
