from django.contrib import admin
from .models import Francois
from django.utils.html import format_html
from .models import GainersAndLoser
# Register your models here.

class FrancoisAdmin(admin.ModelAdmin):

    def thumbnail(self, object):
        return format_html('<img src="{}" width="40" style="border-radius: 50px"/>'.format(object.about_side_bar.url))

    thumbnail.short_description = 'Avatar'

    list_display = ('id','thumbnail', 'first_name', 'last_name', 'designation', 'last_update')
    list_display_links = ('first_name','thumbnail', 'id')
    search_fields = ('first_name', 'last_name', 'designation')
    list_filter = ('designation',)

admin.site.register(Francois, FrancoisAdmin)
admin.site.register(GainersAndLoser)
