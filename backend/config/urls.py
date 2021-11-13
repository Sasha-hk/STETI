from django.contrib import admin
from django.conf import settings 
from django.conf.urls.static import static 
from django.urls import path, include


if settings.DEBUG:
    urlpatterns = [
        path('api/about/', include('about.urls')),
        path('api/admin/', admin.site.urls),
        path('api/nae/', include('NAE.urls')),
        path('api/study/', include('study.urls')),
    ] 

    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)                                                                                                                                                  

else: 
    rlpatterns = [
        path('about/', include('about.urls')),
        path('admin/', admin.site.urls),
        path('nae/', include('NAE.urls')),
        path('study/', include('study.urls')),
    ]

