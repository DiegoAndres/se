# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets, generics
from rest_framework.response import Response
from api.models import Ticket, Estado
from api.pagination import MainPagination
from api.serializers import TicketSerializer, EstadoSerializer, PermissionSerializer


class TicketViewSet(viewsets.ModelViewSet):
    """
        ViewSet de Ticket
    """
    queryset         = Ticket.objects.all().order_by('-fecha_creacion')
    serializer_class = TicketSerializer
    lookup_field     = 'id'
    # pagination_class = MainPagination


class EstadoViewSet(viewsets.ReadOnlyModelViewSet):
    """
        ViewSet de Ticket
    """
    queryset         = Estado.objects.all()
    serializer_class = EstadoSerializer

    def get_queryset(self):
        estados = ['Abierto', 'Pendiente', 'En Proceso', 'Resuelto', 'Cerrado']
        for estado in estados:
            Estado.objects.get_or_create(nombre = estado)
        return self.queryset


class PermisosViewSet(generics.ListAPIView):
    """
        ViewSet de Ticket
    """
    serializer_class = PermissionSerializer

    def get(self, request, format=None):
        permisos   = {'permisos': list(self.request.user.get_all_permissions())}
        serializer = PermissionSerializer(permisos)
        return Response(serializer.data)
