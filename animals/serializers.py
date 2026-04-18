from rest_framework import serializers
from .models import Animal

# Serializer é responsável por transformar dados do model em JSON
# e também validar dados recebidos da API
class AnimalSerializer(serializers.ModelSerializer):
    
    class Meta:
        # Define qual model será usado
        model = Animal
        
        # '__all__' significa que todos os campos do model serão incluídos
        fields = '__all__'