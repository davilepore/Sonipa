from rest_framework.viewsets import ModelViewSet  # CRUD automático
from rest_framework.decorators import action      # cria rota customizada
from rest_framework.permissions import IsAuthenticated  # exige login
from rest_framework.response import Response      # resposta HTTP
from rest_framework import status                 # status HTTP

from .models import Animal
from .serializers import AnimalSerializer


class AnimalViewSet(ModelViewSet):
    serializer_class = AnimalSerializer  # serializer usado

    def get_queryset(self):
        return Animal.objects.filter(status='disponivel')  # filtra disponíveis


    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def adopt(self, request, pk=None):
        animal = self.get_object()  # pega animal pelo ID

        if animal.status != 'disponivel':  # verifica disponibilidade
            return Response(
                {'error': 'Animal não disponível'},
                status = status.HTTP_400_BAD_REQUEST
            )

        animal.status = 'adotado'       # muda status
        animal.adotante = request.user # salva usuário logado
        animal.save()                  # salva no banco

        return Response(
            {'message': 'Adotado com sucesso'},
            status = status.HTTP_200_OK
        )