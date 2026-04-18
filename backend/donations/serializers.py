from rest_framework import serializers
from .models import Donation

class DonationSerializer(serializers.ModelSerializer): #gera automaticamente campos baseados no modelo Donation
    class Meta:
        model = Donation
        fields = ['id', 'tipo', 'descricao', 'valor', 'nome_doador', 'local_coleta', 'status', 'data']
        read_only_fields = ['status', 'data']  # status/data não serão enviados pelo usuário