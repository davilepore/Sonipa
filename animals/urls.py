from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AnimalViewSet

router = DefaultRouter()  # cria roteador automático

router.register(r'animals', AnimalViewSet, basename='animal')  
# registra rota base /animals/

urlpatterns = [
    path('', include(router.urls)),  # inclui rotas do router
]