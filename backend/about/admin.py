from django.contrib import admin
from .models import About, Administration, ContactsPhoneNumbers, Gallery, GalleryCategory



admin.site.register(About)
admin.site.register(ContactsPhoneNumbers)
admin.site.register(Gallery)
admin.site.register(GalleryCategory)
admin.site.register(Administration)
