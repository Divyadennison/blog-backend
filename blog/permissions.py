from rest_framework import permissions

class IsAuthorOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow authors to edit or delete their own posts.
    """

    def has_object_permission(self, request, view, obj):
        # Safe methods (GET, HEAD, OPTIONS) are allowed for anyone
        if request.method in permissions.SAFE_METHODS:
            return True

        # Edit/delete permissions are only allowed to the author
        return obj.author == request.user
