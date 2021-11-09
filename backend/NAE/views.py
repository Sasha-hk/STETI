from django.shortcuts import render
from django.views.generic import View
from .models import Announcement, Event, News



class AllAnnouncements(View):
    def get(self, request):
        context = {
            'records': Announcement.objects.order_by('-id')[:50],
        }  

        return render(request, 'NAE/all-announcements.html', context) 


class AllNews(View):
    def get(self, request):
        context = {
            'records': News.objects.order_by('-id')[:50],
        }  

        return render(request, 'NAE/all-news.html', context)


class AnnouncementsDetail(View):
    def get(self, request, slug):
        context = {
            'details': Announcement.objects.get(slug=slug)
        } 

        return render(request, 'NAE/record-detail.html', context)


class NewsDetail(View):
    def get(self, request, slug):
        context = {
            'details': News.objects.get(slug=slug)
        } 
        return render(request, 'NAE/record-detail.html', context)


class EventDetail(View):
    def get(self, request, slug):
        context = {
            'details': Event.objects.get(slug=slug)
        } 

        return render(request, 'NAE/record-detail.html', context)


class NewsAnnounce(View):
    def get(self, request): 
        context = {
            'announcements': Announcement.objects.order_by('-id')[:5],
            'event': Event.objects.order_by('-id')[:2], 
            'news': News.objects.order_by('-id')[:5],
        }  
        return render(request, 'NAE/news-announcements.html', context)