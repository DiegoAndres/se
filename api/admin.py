# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from api.models import Estado, Ticket

admin.site.register(Estado)


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display       = ( 'id', 'titulo', 'descripcion', 'fecha_creacion')
    list_display_links = [ 'id']
    search_fields      = [ 'id', 'titulo', 'descripcion']
