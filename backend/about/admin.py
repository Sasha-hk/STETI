from django.contrib import admin

from .models import (
    About, 
    Administration, 
    ContactsPhoneNumber,
    Gallery, 
    GalleryCategory,
)



admin.site.register(About)
admin.site.register(Administration)
admin.site.register(ContactsPhoneNumber)
admin.site.register(Gallery)
admin.site.register(GalleryCategory)
