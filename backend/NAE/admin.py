from django.contrib import admin
from .models import Announcement, Event, News, Images

admin.site.register(Announcement)
admin.site.register(Event)
admin.site.register(News)
admin.site.register(Images)
