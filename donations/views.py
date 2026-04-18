from rest_framework import generics, permissions
from .models import Donation
from .serializers import DonationSerializer

class DonationListCreateView(generics.ListCreateAPIView):
    """
    GET → lista todas as doações do usuário logado
    POST → cria uma nova doação (física ou financeira)
    """
    serializer_class = DonationSerializer
    permission_classes = [permissions.IsAuthenticated]  # só usuários logados podem criar/listar

    def get_queryset(self):
        # Usuário vê apenas suas próprias doações
        return Donation.objects.filter(nome_doador=self.request.user.username)

    def perform_create(self, serializer):
        """
        Ao criar uma doação:
        - Para doações físicas, status inicial será 'pendente'
        - Para doações financeiras, status inicial será 'pendente' (a ser atualizado após confirmação)
        - Associamos o nome do doador ao usuário logado
        """
        nome = self.request.user.username  # pega nome do usuário logado
        serializer.save(nome_doador=nome)