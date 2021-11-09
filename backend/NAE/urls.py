from django.urls import path

from .serializers import NewsSerializer
from . import views



urlpatterns = [
    path('announcements/', views.AnnouncementView.as_view()),    
    path('announcements/<str:slug>', views.AnnouncementView.as_view()),  
      
    path('news/', views.NewsView.as_view()),    
    path('news/<str:slug>', views.NewsView.as_view()),   

    path('events/', views.EventView.as_view()),    
    path('events/<str:slug>', views.EventView.as_view()),    
]
