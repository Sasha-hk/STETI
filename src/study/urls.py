from django.urls import path
from . import views

urlpatterns = [
    path('library/', views.Library.as_view(), name='library'),
    path('<str:slug>/', views.LibraryDetail.as_view(), name='library_detail'),
]
