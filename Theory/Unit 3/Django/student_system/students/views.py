from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


def index(request):
    return HttpResponse("Welcome to the Student Management API (Django)")


def json_response(request):
    return JsonResponse({
        "message": "Welcome to the Student Management API",
        "version": "1.0",
        "status": "running"
    })


# This function acts as a view to handle incoming requests

