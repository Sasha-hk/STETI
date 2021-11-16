from django.urls import path
from . import views



urlpatterns = [
    path('about/', views.AboutView.as_view()),

    path('contact-phone-numbers/', views.ContactsPhoneNumberView.as_view()),

    path('administration/', views.AdministrationView.as_view()),
    path('administration/<str:slug>/', views.AdministrationDetailsView.as_view()),

    path('gallery/', views.GalleryCategoryView.as_view()),
    path('gallery/<str:slug>/', views.GalleryView.as_view()),
]
