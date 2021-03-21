from django.db import models

# Create your models here.
class Issue(models.Model):
    issue_title = models.CharField(max_length=200)
    issue_body = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)

class User(models.Model):
    login = models.CharField(max_length=60)
    password = models.CharField(max_length=128)
    email = models.EmailField(max_length = 128, unique=True)
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)