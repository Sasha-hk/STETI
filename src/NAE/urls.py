from django.urls import path
from . import views

urlpatterns = [
    path('', views.NewsAnnounce.as_view(), name="news_announces"), 
    path('news/', views.AllNews.as_view(), name="news"), 
    path('news/<str:slug>', views.NewsDetail.as_view(), name="news_detail"), 
    path('announcements/', views.AllAnnouncements.as_view(), name="announcements"),
    path('announcements/<str:slug>', views.AnnouncementsDetail.as_view(), name="announcement_detail"),
    path('event/<str:slug>', views.EventDetail.as_view(), name="event_detail"),
]