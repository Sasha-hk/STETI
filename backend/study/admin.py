from django.contrib import admin

from .models import (
    Department,
    ForEntrant,
    ForEntrantImages,
    ForStudent,
    ForStudentImages,
    LibraryCategory,
    LibraryItem,
)


admin.site.register(Department)
admin.site.register(ForStudentImages)
admin.site.register(ForStudent)
admin.site.register(ForEntrantImages)
admin.site.register(ForEntrant)
admin.site.register(LibraryCategory)
admin.site.register(LibraryItem)
