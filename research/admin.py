from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import ResearchPageImages, Stock, SP500, Nasdaq, MutualFund, TSX, Commoditie, ETF
# Register your models here.


class StockAdmin(ImportExportModelAdmin):
    list_display = ('ticker', 'name', 'exchange')

class SP500Admin(ImportExportModelAdmin):
    list_display = ('ticker', 'name', 'sector', 'sub_sector', 'founded')

class NasdaqAdmin(ImportExportModelAdmin):
    list_display = ('ticker', 'name', 'exchange')

class MutualFundAdmin(ImportExportModelAdmin):
    list_display = ('ticker', 'name')

class TSXAdmin(ImportExportModelAdmin):
    list_display = ('ticker', 'name', 'currency', 'exchange')

class CommoditieAdmin(ImportExportModelAdmin):
    list_display = ('ticker', 'name')

class ETFAdmin(ImportExportModelAdmin):
    list_display = ('ticker', 'name')

admin.site.register(ResearchPageImages)
admin.site.register(Stock)
admin.site.register(SP500)
admin.site.register(Nasdaq)
admin.site.register(MutualFund)
admin.site.register(TSX)
admin.site.register(Commoditie)
admin.site.register(ETF)
