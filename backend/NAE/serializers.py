from rest_framework import serializers

from .models import *



class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = "__all__"
        depth = 1


class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = "__all__"
        depth = 1


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = "__all__"
        depth = 1


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"
        depth = 1
