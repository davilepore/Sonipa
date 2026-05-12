from django.db import models
from django.utils import timezone

class Donation(models.Model):
    TIPO_DOACAO = [
        ('fisica', 'Doação Física'),
        ('financeira', 'Doação Financeira')
    ]
    tipo = models.CharField(max_length=10, choices=TIPO_DOACAO)

    descricao = models.TextField(blank=True, null=True)
    valor = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    data = models.DateTimeField(auto_now_add=True)

    # Nome do doador: preenchido pelo superusuário ou deixado vazio (Anônimo)
    nome_doador = models.CharField(max_length=150, blank=True, null=True)

    # Para doações físicas, endereço do ponto de entrega
    local_coleta = models.CharField(max_length=200, blank=True, null=True)

    STATUS_DOACAO = [
        ('pendente', 'Pendente'),
        ('concluida', 'Concluída'),
        ('cancelada', 'Cancelada')
    ]
    status = models.CharField(max_length=10, choices=STATUS_DOACAO, default='pendente')

    def concluir(self):
        """Marca uma doação física como concluída"""
        if self.tipo == 'fisica' and self.status == 'pendente':
            self.status = 'concluida'
            self.save()

    def __str__(self):
        doador = self.nome_doador if self.nome_doador else 'Anônimo'
        data_local = timezone.localtime(self.data)  # hora exibida no fuso local
        return f"{self.tipo.capitalize()} - {doador} - {self.status} - {data_local.strftime('%d/%m/%Y %H:%M')}"