from django.contrib import admin
from django.urls import path ,include
from home import views
from .views import upload_document, verify_aadhaar  # Import the views

urlpatterns = [
    path("", views.index, name='home'),
    path("about", views.about, name='about'),
    path("services", views.services, name='services'),
    path("contact/", views.contact, name='contact'),
    path("login/", views.login_view, name='login'),
    path('', upload_document, name='upload_document'),  # Handle requests to '/upload/' for document upload
    path('verify-aadhaar/', verify_aadhaar, name='verify_aadhaar'),  # Endpoint for Aadhaar verification
]
