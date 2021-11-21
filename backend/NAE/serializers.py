from rest_framework import serializers

from .models import (
    Event,
    Images,
    NewsAndAnnouncements,
)


class NewsAndAnnouncementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsAndAnnouncements
        fields = "__all__"
        depth = 1


class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = "__all__"
        depth = 1


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"
        depth = 1
