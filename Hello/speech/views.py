import speech_recognition as sr
from django.http import JsonResponse

def speech_to_text(request):
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        audio = recognizer.listen(source)
    try:
        transcription = recognizer.recognize_google(audio)
        return JsonResponse({"transcription": transcription})
    except sr.UnknownValueError:
        return JsonResponse({"error": "Speech not recognized"})
    except sr.RequestError as e:
        return JsonResponse({"error": f"API error: {e}"})
