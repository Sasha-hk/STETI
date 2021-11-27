from django.contrib import admin

from .models import (
    CyclicCommissionCategory,
    CyclicCommissionImages,
    CyclicCommissionItem,
)

admin.site.register(CyclicCommissionCategory)
admin.site.register(CyclicCommissionImages)
admin.site.register(CyclicCommissionItem)
