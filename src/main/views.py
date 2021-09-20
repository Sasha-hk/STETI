from django.shortcuts import render
from django.views.generic import View
from NAE.models import Advertisement, News, Event
from study.models import Department, ForEntrant, ForStudent


class Home(View):
    def get(self, request):
        context = {
            'news': News.objects.order_by('-id')[:5],
            'advertisement': Advertisement.objects.order_by('-id')[:5],
            'event': Event.objects.order_by('-id')[:2],
            'for_student': ForStudent.objects.order_by('-id')[:3], 
            'departments': Department.objects.order_by('-id')[:4], 
        }
        
        return render(request, 'main/main.html', context)