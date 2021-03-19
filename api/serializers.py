from rest_framework import serializers
from .models import Issue

class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = ('id', 'issue_title', 'issue_body')

class CreateIssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = ('issue_title', 'issue_body')