# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.views.decorators.http import require_http_methods
from django.contrib.auth import authenticate, login as auth_login, logout as logout_auth
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from base.forms import LoginForm


@login_required
def logout_view(request):
    logout_auth(request)
    messages.info(request, 'Sesión finalizada.')
    return redirect(login_view)


@login_required(login_url='login/')
def index_angular(request):
    return render(request, 'base/index.html', {})


@require_http_methods(["GET", "POST"])
def login_view(request):
    if request.user.is_authenticated():
        return redirect(index_angular)
    if request.method == "POST":
        form = LoginForm( request.POST )
        if form.is_valid():
            user = authenticate(username=form.cleaned_data['username'], password=form.cleaned_data['password'])
            if user:
                if user.is_active:
                    # Clave correcta, y el usuario está marcado "activo"
                    auth_login(request, user)
                    return redirect(index_angular)
            else:
                form.add_error('username', u"Usuario desactivado")
        else:
            form.add_error('username', u"Nombre de usuario y / ó contraseña incorrectos")
    else:
        form = LoginForm()
    return render(
        request,
        'base/login.html',
        {
            'form' : form
        }
    )
