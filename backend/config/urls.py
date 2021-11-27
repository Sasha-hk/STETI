from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('about/', include('about.urls')),
    path('admin/', admin.site.urls),
    path('nae/', include('NAE.urls')),
    path('study/', include('study.urls')),
    path('cyclic-commission/', include('cyclic_commission.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
