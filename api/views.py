# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets, status
from api.models import Ticket, Estado
from api.pagination import MainPagination
from api.serializers import TicketSerializer
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
