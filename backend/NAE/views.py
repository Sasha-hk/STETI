from django.db.models import query
from django.shortcuts import render
from django.views.generic import View
from rest_framework import generics, status, viewsets
from rest_framework.response import Response 
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from .models import Announcement, Event, News
from .serializers import AnnouncementSerializer, NewsSerializer, EventSerializer



# Announcements
class AnnouncementView(generics.ListAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer


class AnnouncementDetailsView(generics.RetrieveAPIView):
    lookup_field = "slug"
    queryset = News.objects.all()
    serializer_class = NewsSerializer


# News
class NewsView(APIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class NewsDetailsView(generics.RetrieveAPIView):
    lookup_field = "slug"
    queryset = News.objects.all()
    serializer_class = NewsSerializer


# Event
class EventView(APIView):
    queryset = Event
    serializer_class = EventSerializer


class EventDetailsView(generics.RetrieveAPIView):
    lookup_field = "slug"
    queryset = Event
    serializer_class = EventSerializer
