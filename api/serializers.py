# -*- coding: utf-8 -*-
from rest_framework import serializers
from api.models import Ticket, Estado


class TicketSerializer(serializers.ModelSerializer):
    '''
        Serializador Ticket
    '''
    estado_nombre        = serializers.CharField(source = 'estado.nombre', read_only=True)

    class Meta:
        model = Ticket
        fields = '__all__'


class EstadoSerializer(serializers.ModelSerializer):
    '''
        Serializador Estado Ticket
    '''
    class Meta:
        model = Estado
        fields = '__all__'
