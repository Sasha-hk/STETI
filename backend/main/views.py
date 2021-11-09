from django.shortcuts import render
from django.views.generic import View
from NAE.models import Announcement, News, Event
from study.models import Department, ForEntrant, ForStudent
from about.models import Gallery, GalleryCategory, ContactsFace, ContactsPhoneNumbers



class Home(View):
    def get(self, request): 
        context = {
            'news': News.objects.order_by('-id')[:5],
            'Announcement': Announcement.objects.order_by('-id')[:5],
            'event': Event.objects.order_by('-id')[:3],
            'for_student': reversed(ForStudent.objects.filter(show_on_home = True)[:11]), 
            'departments': Department.objects.order_by('-id')[:4],  
        }
        return render(request, 'main/main.html', context)