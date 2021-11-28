from rest_framework import serializers

from .models import (
    CyclicCommissionCategory,
    CyclicCommissionItem,
)


class CyclicCommissionCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CyclicCommissionCategory
        fields = '__all__'
        depth = 1


class CyclicCommissionItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CyclicCommissionItem
        fields = '__all__'
        depth = 1
