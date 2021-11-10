from django.db.models import fields
from rest_framework import serializers

from .models import * 



class LibraryCategorySrializer(serializers.ModelSerializer):
    class Meta:
        model = LibraryCategory
        fields = '__all__'


class LibraryCategoryDetailsSrializer(serializers.ModelSerializer):
    class Meta:
        model = LibraryCategory
        fields = '__all__'
        depth = 1