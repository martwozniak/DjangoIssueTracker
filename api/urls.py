from django.urls import path
from .views import IssueView, CreateIssueView, UserView, LoginUserView 

urlpatterns = [
    path('issues', IssueView.as_view()),
    path('create-issue', CreateIssueView.as_view()),
    path('users', UserView.as_view()),
    path('login', LoginUserView.as_view())
]