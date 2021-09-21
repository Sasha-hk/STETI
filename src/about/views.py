from django.shortcuts import render
from django.views.generic import View
from .models import ContactsFace, ContactsPhoneNumbers 

class Contact(View):
    def get(self, request):
        context = {
            'faces': ContactsFace.objects.order_by('-id'),
            'phone_numbers': ContactsPhoneNumbers.objects.order_by('-id'),
        }
        return render(request, 'about/contacts.html', context)