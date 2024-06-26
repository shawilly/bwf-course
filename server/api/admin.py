from django.contrib import admin

from .models import Event, Group


@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    fields = ("name", "location", "description")  # type: ignore
    list_display = ("id", "name", "location", "description")


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    fields = ("team1", "team2", "time", "score1", "score2", "group")
    list_display = ("team1", "team2", "time", "score1", "score2", "group")
