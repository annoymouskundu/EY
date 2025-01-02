from django.urls import path
from .views import speech_to_text

urlpatterns = [
    path('speech-to-text', speech_to_text, name='speech_to_text'),

]
