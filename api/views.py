# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets, status
from rest_framework.response import Response
from api.models import Ticket, Estado
from api.pagination import MainPagination
from api.serializers import TicketSerializer, EstadoSerializer
# from rest_framework.response import Response
# from django.shortcuts import render
# from django.contrib.auth.decorators import login_required
# from pedidos.models import Pedido, DetallePedido, EstadoPedido, Producto
# from pedidos.serializers import PedidoSerializer, DetallePedidoSerializer, EstadoPedidoSerializer
# from autentificacion.models import Empleado
# from rest_framework import filters
# from pedidos.filters import PedidoFilter


class TicketViewSet(viewsets.ModelViewSet):
    """
        ViewSet de Ticket
    """
    queryset         = Ticket.objects.all()
    serializer_class = TicketSerializer
    lookup_field     = 'id'
    pagination_class = MainPagination

    # def create(self, request, *args, **kwargs):
    #     # data           = request.data.copy()
    #     # print data
    #     # data['estado'] = int(data['estado']['id'])
    #     # print data
    #     serializer     = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_create(serializer)
    #     headers = self.get_success_headers(serializer.data)
    #     return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class EstadoViewSet(viewsets.ReadOnlyModelViewSet):
    """
        ViewSet de Ticket
    """
    queryset         = Estado.objects.all()
    serializer_class = EstadoSerializer
