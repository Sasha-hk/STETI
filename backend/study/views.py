from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import *
from .serializers import *



class LibraryCategoryView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = LibraryCategory.objects.all()
    serializer_class = LibraryCategorySrializer


class LibraryItemView(generics.RetrieveAPIView):
    lookup_field = 'slug'
    permission_classes = [AllowAny]
    queryset = LibraryCategory.objects.all()
    serializer_class = LibraryCategoryDetailsSrializer
