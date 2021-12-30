"""fintank URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import include
from django.conf.urls.static import static
from django.conf import settings
from research import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('upload/', views.upload),
    path('', include('homepage.urls')),
    path('research/', include('research.urls')),
    path('lifestyle/', include('lifestyle.urls')),
    path('canadian_equities/', include('canadian_equities.urls')),
    path('us_equities/', include('us_equities.urls')),
    path('stock_profile/', include('stock_profile.urls')),
    path('crypto_profile/', include('cryptos.urls')),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
