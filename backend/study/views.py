from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.settings import perform_import

from .models import *
from .serializers import *



# Departments
class DepartmentView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Department.objects.all()
    serializer_class = ForEntrantSerializer 


# For entrants
class ForEntrantView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = ForEntrant.objects.all()
    serializer_class = ForEntrantSerializer   


class ForEntrantDetailsView(generics.ListAPIView):
    lookup_field = 'slug'
    permission_classes = [AllowAny]
    queryset = ForEntrant.objects.all()
    serializer_class = ForEntrantDetailsSerializer  


# For students
class ForStudentView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = ForStudent.objects.all()
    serializer_class = ForStudentSerializer   


class ForStudentViewDetailsView(generics.ListAPIView):
    lookup_field = 'slug'
    permission_classes = [AllowAny]
    queryset = ForStudent.objects.all()
    serializer_class = ForStudentDetailsSerializer  


# Library
class LibraryCategoryView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = LibraryCategory.objects.all()
    serializer_class = LibraryCategorySrializer


class LibraryItemView(generics.RetrieveAPIView):
    lookup_field = 'slug'
    permission_classes = [AllowAny]
    queryset = LibraryCategory.objects.all()
    serializer_class = LibraryCategoryDetailsSrializer
