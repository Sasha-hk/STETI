from django.urls import path

from . import views


urlpatterns = [
    path('', views.CyclicCommissionCategoryView.as_view()),
    path('<str:slug>/', views.CyclicCommissionDetailsView.as_view()),
]
