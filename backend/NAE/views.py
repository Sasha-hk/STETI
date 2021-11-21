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


class NewsAttechedView(APIView):
    permission_classes = [AllowAny]
    serializer_class = NewsAndAnnouncementsSerializer

    def get(self, request):
        atteched_at_home = NewsAndAnnouncements.objects.order_by('-id').filter(attach_at_home=True)[:1]

        if atteched_at_home:
            serialized = self.serializer_class(atteched_at_home, many=True)

            return Response(serialized.data, status=status.HTTP_200_OK)

        return Response({'details': 'not found'}, status=status.HTTP_404_NOT_FOUND)


# Images
class ImagesView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Images.objects.all()
    serializer_class = ImagesSerializer
