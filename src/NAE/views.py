from django.shortcuts import render
from django.views.generic import View
from .models import Advertisement, Event, News


class NewsAnnounce(View):
    def get(self, request): 
        context = {
            'announcements': Advertisement.objects.order_by('-id')[:5],
            'event': Event.objects.order_by('-id')[:2], 
            'news': News.objects.order_by('-id')[:5],
        }  

        return render(request, 'NAE/news-announcements.html', context)



# news
class AllNews(View):
    def get(self, request):
        context = {
            'records': News.objects.order_by('-id')[:50],
        }  

        return render(request, 'NAE/all-news.html', context)


class NewsDetail(View):
    def get(self, request, slug):
        pass
        # return render(request, 'NAE/all-announcements.html')



# announcements
class AllAnnouncements(View):
    def get(self, request):
        context = {
            'records': Advertisement.objects.order_by('-id')[:50],
        }  

        return render(request, 'NAE/all-announcements.html', context) 


class AnnouncementsDetail(View):
    def get(self, request, slug):
        pass
        # return render(request, 'NAE/news-announcements.html')
