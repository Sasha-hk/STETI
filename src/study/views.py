from django.shortcuts import render
from django.views.generic import View
from .models import LibraryItem, LibraryCategory

class Library(View):
    def get(self, request):
        context = {
            'categorys': LibraryCategory.objects.order_by('-id'),
        }
        return render(request, 'study/library.html', context)

class LibraryDetail(View):
    def get(self, request, slug):
        library_category = LibraryCategory.objects.get(slug = slug)
        context = {
            'library_name': library_category,
            'library_items': LibraryItem.objects.filter(category = library_category)
        }
        return render(request, 'study/library-detail.html', context)