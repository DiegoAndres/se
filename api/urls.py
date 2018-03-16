# -*- coding: utf-8 -*-
from django.conf.urls import url
from api.views import TicketViewSet, EstadoViewSet, PermisosViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'tickets', TicketViewSet, base_name="tickets")
router.register(r'estados', EstadoViewSet, base_name="estado")

urlpatterns = [
    url(r'^permisos/$', PermisosViewSet.as_view(), name='permisos'),

]
urlpatterns += router.urls
