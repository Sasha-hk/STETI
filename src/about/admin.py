from django.contrib import admin
from .models import ContactsFace, ContactsPhoneNumbers 

admin.site.register(ContactsPhoneNumbers)
admin.site.register(ContactsFace)