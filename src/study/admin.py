from django.contrib import admin
from .models import Department, ForStudent, ForEntrant

admin.site.register(Department)
admin.site.register(ForStudent)
admin.site.register(ForEntrant)