from django.contrib import admin
from .models import Department, ToStudent, ToEntrant

admin.site.register(Department)
admin.site.register(ToStudent)
admin.site.register(ToEntrant)