from import_export import resources
from .models import Stock, SP500, Nasdaq, MutualFund, TSX, Commoditie, ETF, ProfileStock, Crypto


class StockResource(resources.ModelResource):

    class meta:
        model = Stock

class ProfileStockResource(resources.ModelResource):

    class meta:
        model = ProfileStock

class SP500Resource(resources.ModelResource):

    class meta:
        model = SP500

class NasdaqResource(resources.ModelResource):

    class meta:
        model = Nasdaq

class MutualFundResource(resources.ModelResource):

    class meta:
        model = MutualFund

class TSXResource(resources.ModelResource):

    class meta:
        model = TSX

class CommoditieResource(resources.ModelResource):

    class meta:
        model = Commoditie

class ETFResource(resources.ModelResource):

    class meta:
        model = ETF

class CryptoResource(resources.ModelResource):

    class meta:
        model = Crypto
