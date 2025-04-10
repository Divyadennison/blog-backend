# blog/views.py

from rest_framework import viewsets, permissions
from .models import Blog
from .serializers import BlogSerializer
from .permissions import IsAuthorOrReadOnly  # 👈 Import it

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by('-created_at')
    serializer_class = BlogSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly]  # 👈 Apply here

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
