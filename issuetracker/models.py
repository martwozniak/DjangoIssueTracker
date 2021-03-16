from django.db import models

# Create your models here. 
class Issue(models.Model):
    issue_title = models.CharField(max_length=200)
    issue_body = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

