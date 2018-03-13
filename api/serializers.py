# -*- coding: utf-8 -*-
from rest_framework import serializers
from api.models import Ticket


class TicketSerializer(serializers.ModelSerializer):
    '''
        Serializador Ticket
    '''
    estado            = serializers.CharField(source = 'estado.nombre', read_only=True)

    class Meta:
        model = Ticket
        fields = '__all__'
