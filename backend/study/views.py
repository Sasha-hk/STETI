from django.shortcuts import render
from django.views.generic import View

from .models import LibraryItem, LibraryCategory, ForStudent, ForEntrant



class ForEntrantDetail(View):
    def get(delf, request, slug):
        context = {
            'details': ForEntrant.objects.get(slug = slug)
        }
        return render(request, 'study/for-student-and-entrant-details.html', context)


class ForEntrantView(View):
    def get(self, request):
        context = {
            'for_entrant': ForEntrant.objects.order_by('-id')[:100]
        }
        return render(request, 'study/for-entrant.html', context)


class ForStudentDetail(View):
    def get(delf, request, slug):
        context = {
            'details': ForStudent.objects.get(slug = slug)
        }
        return render(request, 'study/for-student-and-entrant-details.html', context)


class ForStudentView(View):
    def get(self, request):
        context = {
            'for_student': ForStudent.objects.order_by('-id')[:100]
        }
        return render(request, 'study/for-student.html', context)


class Library(View):
    def get(self, request):
        context = {
            'categorys': LibraryCategory.objects.order_by('-id'),
        }
        return render(request, 'study/library.html', context)


class LibraryDetail(View):
    def get(self, request, slug):
        library_category = LibraryCategory.objects.get(slug=slug)

        context = {
            'library_name': library_category,
            'library_items': LibraryItem.objects.filter(category = library_category)
        }

        return render(request, 'study/library-detail.html', context)