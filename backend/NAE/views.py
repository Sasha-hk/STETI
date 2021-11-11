from django.db.models import query
from django.shortcuts import render
from django.views.generic import View
from rest_framework import generics, status, viewsets
from rest_framework.response import Response 
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from .models import *
from .serializers import *



# Announcements
class NewsAndAnnouncementsView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = NewsAndAnnouncements.objects.all()
    serializer_class = NewsAndAnnouncementsSerializer


class NewsAndAnnouncementsDetailsView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    lookup_field = "slug"
    queryset = NewsAndAnnouncements.objects.all()
    serializer_class = NewsAndAnnouncementsSerializer


# Images
class ImagesView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Images.objects.all()
    serializer_class = ImagesSerializer


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
