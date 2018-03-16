# -*- coding: utf-8 -*-
from rest_framework import serializers
from api.models import Ticket, Estado
import datetime
from datetime import date


class TicketSerializer(serializers.ModelSerializer):
    '''
        Serializador Ticket
    '''
    estado_nombre                  = serializers.CharField(source = 'estado.nombre', read_only=True)
    diferencia_fecha_creacion      = serializers.SerializerMethodField()

    def get_diferencia_fecha_creacion(self, obj):
        fecha = obj.fecha_creacion
        ahora = datetime.datetime.now()
        dif = date(ahora.year, ahora.month, ahora.day) - date(fecha.year, fecha.month, fecha.day)
        if dif.days != 0:
            return dif.days
        else:
            return dif.seconds // 600

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


class PermissionSerializer(serializers.Serializer):
    '''
        Serializador Permisos
    '''
    permisos = serializers.ListField(child=serializers.CharField())
