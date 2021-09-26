from django.contrib import admin
from .models import Department, ForStudent, ForEntrant, LibraryCategory, LibraryItem

admin.site.register(Department)
admin.site.register(ForStudent)
admin.site.register(ForEntrant)
admin.site.register(LibraryCategory)
admin.site.register(LibraryItem)