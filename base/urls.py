# -*- coding: utf-8 -*-

from django.conf.urls import url
from base import views


urlpatterns = [
    url(r'^login', views.login_view),
    url(r'^logout', views.logout_view),
    url(r'^$', views.index_angular),
]
