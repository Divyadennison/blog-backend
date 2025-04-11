from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Blog

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class BlogSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Blog
        fields = ['id', 'author', 'title', 'content', 'created_at']


