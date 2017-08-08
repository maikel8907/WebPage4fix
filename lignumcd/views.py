# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.core.mail import send_mail
from django.contrib import messages
from django.http import JsonResponse


# Create your views here.


def index(request):
    return render(request, "index.html")


def home(request):
    return render(request, "index.html")


def about(request):
    return render(request, "about.html")


def portfolio(request):
    return render(request, "portfolio.html")


def testimonials(request):
    return render(request, "testimonials.html")


def clients(request):
    return render(request, "clients.html")


def contact(request):
    return render(request, "contact.html")


def validar(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        departmen = request.POST['department']
        tel = request.POST['tel']
        message = request.POST['message']
        send_mail(
            'Email from Web from: ' + name,
            message,
            [email],  # FROM
            ['admin@mail.com'],
            fail_silently=False,
        )
    return JsonResponse({'result': 'OK'})
