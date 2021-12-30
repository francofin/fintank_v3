from django.db import models
from ckeditor.fields import RichTextField
from datetime import datetime
from multiselectfield import MultiSelectField

# Create your models here.
class ResearchPageImages(models.Model):
    page_usage = models.CharField(max_length=300)
    images1 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    images2 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    images3 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    images4 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    images5 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    images6 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    images7 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    images8 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    images9 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    images10 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    images11 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    images12 = models.ImageField(upload_to='photos/%Y/%m/%d/')

    def __str__(self):
        return self.page_usage


class Stock(models.Model):
    ticker = models.CharField(max_length=300)
    name = models.CharField(max_length=300, default="")
    exchange = models.CharField(max_length=300, default="")
    is_featured = models.BooleanField(default=True)

    def __str__(self):
        return self.ticker

class SP500(models.Model):
    ticker = models.CharField(max_length=300)
    name = models.CharField(max_length=300)
    sector = models.CharField(max_length=300)
    sub_sector = models.CharField(max_length=300)
    founded = models.CharField(max_length=300)

    def __str__(self):
        return self.ticker

class ProfileStock(models.Model):
    ticker = models.CharField(max_length=300)
    name = models.CharField(max_length=300)
    exchange = models.CharField(max_length=300)

    def __str__(self):
        return self.ticker

class Nasdaq(models.Model):
    ticker = models.CharField(max_length=300)
    name = models.CharField(max_length=300)
    exchange = models.CharField(max_length=300)

    def __str__(self):
        return self.ticker

class TSX(models.Model):
    ticker = models.CharField(max_length=300)
    name = models.CharField(max_length=300)
    currency = models.CharField(max_length=300)
    exchange = models.CharField(max_length=300, default=" ")

    def __str__(self):
        return self.ticker

class ETF(models.Model):
    ticker = models.CharField(max_length=300)
    name = models.CharField(max_length=300)

    def __str__(self):
        return self.ticker

class MutualFund(models.Model):
    ticker = models.CharField(max_length=300)
    name = models.CharField(max_length=300)

    def __str__(self):
        return self.ticker

class Commoditie(models.Model):
    ticker = models.CharField(max_length=300)
    name = models.CharField(max_length=300)

    def __str__(self):
        return self.ticker

class Crypto(models.Model):
    symbol = models.CharField(max_length = 200)
    name = models.CharField(max_length=300)
    currency = models.CharField(max_length=200)

    def __str__(self):
        return self.symbol
