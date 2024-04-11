from rest_framework import serializers
from .models import Group

class GroupSerializers(serializers.ModelSerializer):
    class Meta:
        model: Group
        fields: ('id', 'name', 'location', 'description') # type: ignore
