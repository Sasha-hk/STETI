from django.urls import path

from . import views



urlpatterns = [
    path('images/', views.ImagesView.as_view(), name="images"),

    path('announcements/', views.AnnouncementView.as_view()),    
    path('announcements/<str:slug>', views.AnnouncementDetailsView.as_view()),  
    
    path('news/', views.NewsView.as_view()),    
    path('news/<str:slug>', views.NewsDetailsView.as_view()),   

    path('events/', views.EventView.as_view()),    
    path('events/<str:slug>', views.EventDetailsView.as_view()),    
]
