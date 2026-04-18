from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet

router = DefaultRouter()  # cria rotas automáticas

router.register(r'events', EventViewSet, basename='event')  
# registra /events/

urlpatterns = [
    path('', include(router.urls)),  # inclui rotas do router
]