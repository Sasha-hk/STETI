from rest_framework import serializers

from .models import *



class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = "__all__"


class AdministrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administration
        fields = "__all__"


class ContactsPhoneNumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactsPhoneNumber
        fields = "__all__"


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryCategory
        fields = "__all__"
        depth = 1


class GalleryCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryCategory
        fields = ('id', 'category_name', 'image', 'pub_date', 'slug', )