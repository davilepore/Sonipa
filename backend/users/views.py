from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
import uuid

User = get_user_model()

class RegisterView(APIView):
    def post(self, request):
        data = request.data

        nome = data.get('nome')
        email = data.get('email')
        telefone = data.get('telefone')
        password = data.get('password')

        if not all([nome, email, password]):
            return Response(
                {'error': 'Nome, email e senha são obrigatórios'},
                status=status.HTTP_400_BAD_REQUEST
            )

        if User.objects.filter(email=email).exists():
            return Response(
                {'error': 'Email já cadastrado'},
                status=status.HTTP_400_BAD_REQUEST
            )

        user = User.objects.create_user(
            username=uuid.uuid4().hex,
            email=email,
            password=password,
            nome=nome,
            telefone=telefone,
        )

        return Response(
            {'message': 'Usuário criado com sucesso'},
            status=status.HTTP_201_CREATED
        )


class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({
            'id': user.id,
            'nome': user.nome,
            'email': user.email,
            'telefone': user.telefone,
        })