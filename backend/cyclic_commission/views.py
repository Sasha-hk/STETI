from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import (
    CyclicCommissionCategory,
    CyclicCommissionItem,
)
from .serializers import (
    CyclicCommissionCategorySerializer,
    CyclicCommissionItemSerializer,
)


class CyclicCommissionCategoryView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = CyclicCommissionCategory.objects.all()
    serializer_class = CyclicCommissionCategorySerializer


class CyclicCommissionDetailsView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    lookup_field = 'slug'
    queryset = CyclicCommissionItem.objects.all()
    serializer_class = CyclicCommissionItemSerializer
