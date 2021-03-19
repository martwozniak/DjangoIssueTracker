from django.urls import path
from .views import IssueView, CreateIssueView

urlpatterns = [
    path('issues', IssueView.as_view()),
    path('create-issue', CreateIssueView.as_view())
]