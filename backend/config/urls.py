from django.contrib import admin
from django.conf import settings 
from django.conf.urls.static import static 
from django.urls import path, include



urlpatterns = [
    # path('about/', include('about.urls')),
    path('admin/', admin.site.urls),
    path('nae/', include('NAE.urls')),
    # path('study/', include('study.urls')),
]

if settings.DEBUG == True:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)                                                                                                                                                  
