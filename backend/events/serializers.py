from rest_framework import serializers
from django.utils import timezone
from .models import Event


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = '__all__'

    def get_fields(self):
        fields = super().get_fields()
        # Define um valor inicial válido para o campo data
        # apenas quando o serializer é usado sem dados (ex: formulário vazio)
        if not self.instance and not self.initial_data if hasattr(self, 'initial_data') else False:
            fields['data'].initial = timezone.now().isoformat()
        return fields