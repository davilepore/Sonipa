
from rest_framework import serializers
from .models import Animal

# # Serializer é responsável por transformar dados do model em JSON
# # e também validar dados recebidos da API     
class AnimalSerializer(serializers.ModelSerializer):
    foto = serializers.SerializerMethodField()

    def get_foto(self, obj):
        request = self.context.get('request')
        if obj.foto and request:
            return request.build_absolute_uri(obj.foto.url)
        return None

#         # Define qual model será usado
    class Meta:
        model = Animal
# '__all__' significa que todos os campos do model serão incluídos
        fields = '__all__'