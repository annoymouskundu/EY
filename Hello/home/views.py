from django.shortcuts import render
from django.http import JsonResponse  # Import JsonResponse for the API response
import pytesseract
from .forms import DocumentUploadForm
from .models import UploadedDocument, User  # Import the new model for user details
from django.core.files.storage import FileSystemStorage
from PIL import Image
import logging

# Create your views here.
def index(request):
    context = {
        "variable1":"this is great",
        "variable2":"i am great"
    }
    return render(request,  'index.html', context)
    # return HttpResponse("this is homepage")

def about(request):
    return render(request,  'about.html')

    # return HttpResponse("this is about page")

def services(request):
    return render(request,  'services.html')

    # return HttpResponse("this is services page")

def contact(request):
    return render(request,  'contact.html')

    # return HttpResponse("this is contact page")
    
def login_view(request):
    return render(request,  'login.html')

    # return HttpResponse("this is contact page")
    

