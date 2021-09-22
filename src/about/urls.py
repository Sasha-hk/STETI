from django.urls import path
from . import views

urlpatterns = [
    path('contacts/', views.Contact.as_view() , name='contacts'),
    path('gallery/', views.GalleryList.as_view() , name='gallery_categorys'),
    path('gallery/<int:id>/', views.GalleryDetail.as_view() , name='gallery_detail'),
]