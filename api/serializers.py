from rest_framework import serializers
from .models import Issue, User

# Issue

class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = ('id', 'issue_title', 'issue_body')

class CreateIssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = ('issue_title', 'issue_body')

# User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'login', 'password', 'email', 'is_active')

class LoginUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('login', 'password')
