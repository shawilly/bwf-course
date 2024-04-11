from django.shortcuts import render
from rest_framework import viewsets

from .models import Group
from .serializers import GroupSerializers


class GroupViewset(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializers
