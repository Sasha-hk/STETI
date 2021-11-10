from django.urls import path

from . import views



urlpatterns = [
    path('library/', views.LibraryCategoryView.as_view()),
    path('library/<str:slug>', views.LibraryItemView.as_view()),

    
]
