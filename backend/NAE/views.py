from django.shortcuts import render
from django.views.generic import View
from rest_framework import generics, status, viewsets
from rest_framework.response import Response 
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from .models import Announcement, Event, News
from .serializers import AnnouncementSerializer, NewsSerializer, EventSerializer



class AnnouncementView(APIView):
    permission_classes = (AllowAny, )
    serializer_class = AnnouncementSerializer


    def get(self, request, slug=None):
        if slug:
            announcement = Announcement.objects.get(slug=slug)
            serialized = AnnouncementSerializer(announcement)
            return Response(serialized.data, status=status.HTTP_200_OK)

        else:
            announcements = Announcement.objects.all()
            serialized = AnnouncementSerializer(announcements, many=True)
            return Response(serialized.data, status=status.HTTP_200_OK)
 


class NewsView(APIView):
    permission_classes = (AllowAny, )
    serializer_class = NewsSerializer


    def get(self, request, slug=None):
        if slug:
            announcement = News.objects.get(slug=slug)
            serialized = NewsSerializer(announcement)
            return Response(serialized.data, status=status.HTTP_200_OK)

        else:
            announcements = News.objects.all()
            serialized = NewsSerializer(announcements, many=True)
            return Response(serialized.data, status=status.HTTP_200_OK)


class EventView(APIView):
    permission_classes = (AllowAny, )
    serializer_class = EventSerializer

    def get(self, request, slug=None):
        if slug:
            announcement = Event.objects.get(slug=slug)
            serialized = EventSerializer(announcement)
            return Response(serialized.data, status=status.HTTP_200_OK)

        else:
            announcements = Event.objects.all()
            serialized = EventSerializer(announcements, many=True)
            return Response(serialized.data, status=status.HTTP_200_OK)
