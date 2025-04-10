from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('blog.urls')),  # Your blog APIs
    path('auth/', include('djoser.urls')),               # Handles user creation, etc.
    path('auth/', include('djoser.urls.authtoken')),     # Handles token login/logout
]
