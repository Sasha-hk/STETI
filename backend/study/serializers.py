from django.db.models import fields
from rest_framework import serializers

from .models import * 



# Departments
class ForEntrantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'


# For entrants
class ForEntrantSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForEntrant
        fields = ('title', 'img', 'link', 'pub_date', 'slug', )


class ForEntrantDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForEntrant
        fields = '__all__'
        depth = 1


# For students
class ForStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForStudent
        fields = ('title', 'img', 'link', 'pub_date', 'slug', )


class ForStudentDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForStudent
        fields = '__all__'
        depth = 1


# Library
class LibraryCategorySrializer(serializers.ModelSerializer):
    class Meta:
        model = LibraryCategory
        fields = '__all__'


class LibraryCategoryDetailsSrializer(serializers.ModelSerializer):
    class Meta:
        model = LibraryCategory
        fields = '__all__'
        depth = 1