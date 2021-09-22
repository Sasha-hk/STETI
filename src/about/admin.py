from django.contrib import admin
from .models import ContactsFace, ContactsPhoneNumbers, Gallery, GalleryCategory, GalleryCategoryImage

admin.site.register(ContactsPhoneNumbers)
admin.site.register(ContactsFace)
admin.site.register(Gallery)
admin.site.register(GalleryCategory)
admin.site.register(GalleryCategoryImage)