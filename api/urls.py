# -*- coding: utf-8 -*-
# from django.conf.urls import url
from api.views import TicketViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'tickets', TicketViewSet, base_name="tickets")

urlpatterns = [
    # url(r'^$', TicketViewSet, name='pedidos'),
    # url(r'^detallepedidos/$', DetallePedidoViewSet.as_view(), name='detallepedidos'),

]
urlpatterns += router.urls
