from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import (
    Event,
    Images,
    NewsAndAnnouncements,
)
from .serializers import (
    EventSerializer,
    ImagesSerializer,
    NewsAndAnnouncementsSerializer,
)


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


# News And Announcements
class NewsAndAnnouncementsView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = NewsAndAnnouncements.objects.all()
    serializer_class = NewsAndAnnouncementsSerializer


class NewsAndAnnouncementsDetailsView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    lookup_field = "slug"
    queryset = NewsAndAnnouncements.objects.all()
    serializer_class = NewsAndAnnouncementsSerializer


class NewsAttechedView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = NewsAndAnnouncements.objects.order_by('-id').filter(attach_at_home=True)[:1]
    serializer_class = NewsAndAnnouncementsSerializer


# Images
class ImagesView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Images.objects.all()
    serializer_class = ImagesSerializer
