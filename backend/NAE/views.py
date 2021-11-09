from django.db.models import query
from django.shortcuts import render
from django.views.generic import View
from rest_framework import generics, status, viewsets
from rest_framework.response import Response 
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from .models import (
    Announcement, 
    Images, 
    Event, 
    News,
)
from .serializers import (
    AnnouncementSerializer, 
    ImagesSerializer, 
    NewsSerializer, 
    EventSerializer,
)



# Announcements
class AnnouncementView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer


class AnnouncementDetailsView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    lookup_field = "slug"
    queryset = News.objects.all()
    serializer_class = NewsSerializer


# Images
class ImagesView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Images.objects.all()
    serializer_class = ImagesSerializer


# News
class NewsView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class NewsDetailsView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    lookup_field = "slug"
    queryset = News.objects.all()
    serializer_class = NewsSerializer


# Event
class EventView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventDetailsView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    lookup_field = "slug"
    queryset = Event.objects.all()
    serializer_class = EventSerializer
