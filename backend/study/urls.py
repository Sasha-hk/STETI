from django.urls import path

from . import views



urlpatterns = [
    path('departments/', views.DepartmentView.as_view()),

    path('for-entrants/', views.ForEntrantView.as_view()),
    path('for-entrants/<str:slug>', views.ForEntrantDetailsView.as_view()),

    path('for-students/', views.ForStudentView.as_view()),
    path('for-students/<str:slug>', views.ForStudentViewDetailsView.as_view()),

    path('library/', views.LibraryCategoryView.as_view()),
    path('library/<str:slug>', views.LibraryItemView.as_view()),    
]
