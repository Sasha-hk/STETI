from django.shortcuts import render
from django.views.generic import View
from .models import ContactsFace, ContactsPhoneNumbers, Gallery, GalleryCategory

class Contact(View):
    def get(self, request):
        context = {
            'faces': ContactsFace.objects.order_by('-id'),
            'phone_numbers': ContactsPhoneNumbers.objects.order_by('-id'),
        }
        return render(request, 'about/contacts.html', context)

class GalleryList(View):
    def get(self, request):
        context = {
            'categorys': GalleryCategory.objects.order_by('-id'),
        }

        return render(request, 'about/gallery-list.html', context)

class GalleryDetail(View):
    def get(self, request, id):
        context = {
            'imgs': GalleryCategory.objects.get(id = id), 
        }

        return render(request, 'about/gallery-details.html', context)

    