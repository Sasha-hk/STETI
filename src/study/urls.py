from django.urls import path
from . import views

urlpatterns = [
    path('for-entrant/', views.ForEntrantView.as_view(), name="for_entrant"),
    path('for-entrant/<str:slug>', views.ForEntrantDetail.as_view(), name="for_entrant_detail"),
    path('for-student/', views.ForStudentView.as_view(), name="for_student"),
    path('for-student/<str:slug>', views.ForStudentDetail.as_view(), name="for_student_detail"),
    path('library/', views.Library.as_view(), name='library'),
    path('library/<str:slug>/', views.LibraryDetail.as_view(), name='library_detail'), 
]
