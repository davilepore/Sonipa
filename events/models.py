from django.db import models
from django.utils import timezone

class Event(models.Model):
    # Nome do evento (ex: Feira de adoção)
    nome = models.CharField(max_length=200)
    
    # Descrição do evento (opcional)
    descricao = models.TextField(blank=True, null=True)
    
    # Data e hora do evento
    data = models.DateTimeField(null=False, blank=False)  # evita nulo ou vazio
    
    # Local onde o evento será realizado
    local = models.CharField(max_length=200)
    
    # Status do evento (ativo ou cancelado)
    STATUS_EVENTO = [
        ('ativo', 'Ativo'),
        ('cancelado', 'Cancelado')
    ]
    status = models.CharField(max_length=10, choices=STATUS_EVENTO, default='ativo')

    # Define como o evento aparece no admin
    def __str__(self):
        # Converte a data para o fuso horário local
        data_local = timezone.localtime(self.data)
        
        # Exibe no formato: "Nome - 25/03/2026 às 10:00h"
        return f"{self.nome} - {data_local.strftime('%d/%m/%Y às %H:%M')}h"