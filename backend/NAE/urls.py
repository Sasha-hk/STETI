from django.urls import path

from . import views



urlpatterns = [
    path('images/', views.ImagesView.as_view(), name="images"),

    path('news/', views.NewsAndAnnouncementsView.as_view()),    
    path('news/<str:slug>', views.NewsAndAnnouncementsDetailsView.as_view()),  

    path('events/', views.EventView.as_view()),    
    path('events/<str:slug>', views.EventDetailsView.as_view()),    
]
