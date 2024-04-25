from rest_framework import serializers

from .models import Event, Group


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = (
            "id",
            "team1",
            "team2",
            "time",
            "score1",
            "score2",
            "group",
        )  # type: ignore


class GroupsSerializer(serializers.ModelSerializer):
    events = EventSerializer(many=True)

    class Meta:
        model = Group
        fields = (
            "id",
            "name",
            "location",
            "description",
        )  # type: ignore


class GroupSerializer(serializers.ModelSerializer):
    events = EventSerializer(many=True)

    class Meta:
        model = Group
        fields = ("id", "name", "location", "description", "events")  # type: ignore
