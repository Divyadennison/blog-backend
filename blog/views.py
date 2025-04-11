from rest_framework import viewsets, permissions
from .models import Blog
from .serializers import BlogSerializer
from .permissions import IsAuthorOrReadOnly  

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by('-created_at').select_related('author')
    serializer_class = BlogSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]  # ✅ Public access to view blogs
        return [permissions.IsAuthenticated(), IsAuthorOrReadOnly()]  # ✅ Auth required for create/update/delete

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
