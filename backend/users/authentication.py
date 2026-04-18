from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import authenticate, get_user_model
from rest_framework import serializers

User = get_user_model()


class EmailTokenObtainSerializer(TokenObtainPairSerializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields.pop(self.username_field, None)
        self.fields['email'] = serializers.EmailField()
        self.fields['password'] = serializers.CharField(
            style={'input_type': 'password'}  # esconde a senha com asteriscos
        )
        self.fields = dict(
            email=self.fields['email'],
            password=self.fields['password'],
        )

    def validate(self, attrs):
        user = authenticate(
            request=self.context.get('request'),
            email=attrs['email'],
            password=attrs['password'],
        )

        if not user:
            raise serializers.ValidationError('Email ou senha inválidos.')

        if not user.is_active:
            raise serializers.ValidationError('Conta inativa.')

        refresh = self.get_token(user)

        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }


class EmailTokenObtainPairView(TokenObtainPairView):
    serializer_class = EmailTokenObtainSerializer