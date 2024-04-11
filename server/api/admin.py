from django.contrib import admin

from .models import Group


@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    fields = ("name", "location", "description")  # type: ignore
    list_display = ("id", "name", "location", "description")
