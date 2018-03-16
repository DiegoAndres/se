# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Estado(models.Model):
    """
        Modelo Estado Ticket
    """
    nombre         = models.CharField(max_length = 30, verbose_name = u'nombre', help_text = "Estado del Ticket" )

    def __unicode__( self ):
        return str(self.nombre)


class Ticket(models.Model):
    """
        Modelo Ticket
    """
    titulo         = models.CharField(max_length = 100, verbose_name = u'titulo', help_text = "Título del Ticket" )
    descripcion    = models.CharField(max_length = 1000, verbose_name = u'descripcion', help_text = "Descripción del Ticket" )
    estado         = models.ForeignKey( Estado, verbose_name = u'estado' , help_text = "Estado Ticket")
    fecha_creacion = models.DateTimeField( auto_now_add = True )

    def __unicode__( self ):
        return u'# ' + str(self.id) + ' - ' + str(self.titulo)

    class Meta:
        """
            Meta Data Modelo Tickets
        """
        permissions = (
            ( "crear_ticket", "Puede crear tickets"),
        )
