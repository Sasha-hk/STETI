from django.urls import path
from . import views

urlpatterns = [
    path('contacts/', views.Contact.as_view(), name='contacts')
]