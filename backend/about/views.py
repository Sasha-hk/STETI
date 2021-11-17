from rest_framework import generics
from rest_framework.permissions import AllowAny 

from .models import *
from .serializers import *



# About
class AboutView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = About.objects.all()
    serializer_class = AboutSerializer


# Administration
class AdministrationView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Administration.objects.all()
    serializer_class = AdministrationSerializer


class AdministrationDetailsView(generics.RetrieveAPIView):
    lookup_field = 'slug'
    permission_classes = [AllowAny]
    queryset = Administration.objects.all()
    serializer_class = AdministrationSerializer


# Contact phone number 
class ContactsPhoneNumberView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = ContactsPhoneNumber.objects.all()
    serializer_class = ContactsPhoneNumberSerializer


# Gallery
class GalleryCategoryView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = GalleryCategory.objects.all()
    serializer_class = GalleryCategorySerializer


class GalleryView(generics.RetrieveAPIView):
    lookup_field = 'slug'
    permission_classes = [AllowAny]
    queryset = GalleryCategory.objects.all()
    serializer_class = GallerySerializer


# useful link
class UsefulLinkGroupView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = UsefulLinkGroup.objects.all()
    serializer_class = UsefulLinkGroupSerializer


# partners
class PartnersView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Partners.objects.all()
    serializer_class = PartnersSerializer
