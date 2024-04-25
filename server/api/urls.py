from django.conf.urls import include
from django.urls import re_path
from rest_framework import routers

from api import views

router = routers.DefaultRouter()
router.register(r"groups", views.GroupViewset)
router.register(r"events", views.EventViewset)

urlpatterns = [
    re_path(r"^", include(router.urls)),
]
