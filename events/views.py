from rest_framework.viewsets import ModelViewSet  # CRUD automático
from django.utils import timezone
from .models import Event
from .serializers import EventSerializer


class EventViewSet(ModelViewSet):
    serializer_class = EventSerializer  # serializer usado

    def get_queryset(self):
        return Event.objects.filter(
            status='ativo',          # só eventos ativos
            data__gte=timezone.now() # só eventos futuros
        )