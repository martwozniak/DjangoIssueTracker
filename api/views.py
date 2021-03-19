from django.shortcuts import render
from rest_framework import generics, status
from .serializers import IssueSerializer, CreateIssueSerializer
from .models import Issue
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class IssueView(generics.ListAPIView):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer

class CreateIssueView(APIView):
    serializer_class = CreateIssueSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            issue_title = serializer.data.get('issue_title')
            issue_body = serializer.data.get('issue_body')
            # Create new issue
            issue = Issue(issue_title=issue_title, issue_body=issue_body)
            issue.save()
        return Response(IssueSerializer(issue).data, status=status.HTTP_201_CREATED)
        return Response({'BAD REQUEST'}, status=status.HTTP_400_BAD_REQUEST)