from django.db import models

# Create your models here.
class Issue(models.Model):
    issue_title = models.CharField(max_length=200)
    issue_body = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)