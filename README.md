# Django Issue Tracker
<p align="center">
  <img src="https://raw.githubusercontent.com/martwozniak/DjangoIssueTracker/master/logo.png" alt="Issue Tracker"/>
</p>

This is a web application written in Python (Django). It allows you to manage issues. 

## Requirements

Dillinger uses a number of open source projects to work properly:

- [Python](https://www.python.org/downloads/) - Python 3.8.6
- [Django](https://www.djangoproject.com/) - Django 3.1.7

## Installation

[Download](https://github.com/martwozniak/DjangoIssueTracker.git) this repo or use commands below.

Clone repo
```
git clone https://github.com/martwozniak/DjangoIssueTracker.git 
```
Navigate to folder
```
cd DjangoIssueTracker  
```
Create virtualenv
```
virtualenv env  
```
Use your viertualenv
```
source env/bin/activate  
```
Install all dependencies
```
pip install -r requirements.txt  
```
Run django server
```
python3 manage.py runserver  
```

All steps in one block
```
git clone https://github.com/martwozniak/DjangoIssueTracker.git  
cd DjangoIssueTracker  
virtualenv env  
source env/bin/activate  
pip install -r requirements.txt  
python3 manage.py runserver  

```
## Tests

## Tasks

## Issues
### ❗ SECRET_KEY
I know about the application key problem! In a production application, you must not leave SECRET_KEY as it is in this project. You need to create a file that stores the SECRET_KEY and call that file from settings.py. 

## Footer

[![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)
