# -*- coding: utf-8 -*-
from django import forms


class LoginForm(forms.Form):
    """
        Formulario que registra las credenciales de un usuario
    """
    username = forms.CharField( label = ( "Usuario" ), widget = forms.TextInput(attrs = {'class' : 'form-control', 'placeholder': 'Usuario'}) )  # widget = forms.PasswordInput
    password = forms.CharField( label = ( "Contraseña" ), widget = forms.PasswordInput(attrs = {'class' : 'form-control', 'placeholder': 'Contraseña'}) )  # widget = forms.PasswordInput

    def clean_username(self):
        """
            Validador Nombre de Usuario
        """
        username = self.cleaned_data.get('username')
        if len(username) < 3:
            raise forms.ValidationError("Nombre de usuario debe contener al menos 3 caracteres.")
        else:
            return username

    def clean_password(self):
        """
            Validador Password
        """
        password = self.cleaned_data.get('password')
        if len(password) < 3:
            raise forms.ValidationError(u'La contraseña debe contener al menos 3 caracteres')
        else:
            return password

    def clean(self):
        """
            Validador del Formulario
        """
        return self.cleaned_data
