from django.db import models
from django.conf import settings

class Animal(models.Model):
    # Nome do animal
    nome = models.CharField(max_length=100)
    
    # Espécie (cachorro, gato, etc)
    especie = models.CharField(max_length=50)
    
    # Idade do animal em anos
    idade = models.PositiveIntegerField()
    
    # Descrição do animal (história, comportamento, etc)
    descricao = models.TextField(blank=True, null=True)
    
    # Foto do animal (será salva dentro da pasta 'media/animais/')
    foto = models.ImageField(upload_to='animais/', blank=True, null=True)
    
    # Status de adoção (define se o animal ainda está disponível ou já foi adotado)
    ADOTADO_STATUS = [
        ('disponivel', 'Disponível'),
        ('adotado', 'Adotado')
    ]
    status = models.CharField(max_length=10, choices=ADOTADO_STATUS, default='disponivel')
    
    # Usuário que adotou o animal (relacionamento com o modelo de usuário)
    # - SET_NULL: se o usuário for deletado, o campo fica vazio (null)
    # - blank=True: não é obrigatório no formulário/admin
    # - null=True: pode ser vazio no banco de dados
    # - related_name: permite acessar os animais adotados pelo usuário (ex: user.animais_adotados.all())
    adotante = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='animais_adotados'
    )

    # Data em que o animal foi registrado/resgatado pela ONG
    # auto_now_add=True define automaticamente a data no momento da criação
    data_resgate = models.DateTimeField(auto_now_add=True)

    # Regra de negócio para garantir consistência dos dados
    def save(self, *args, **kwargs):
        # Se o status for 'adotado', obrigatoriamente precisa ter um adotante
        if self.status == 'adotado' and not self.adotante:
            raise ValueError("Animal adotado precisa de um adotante")
        
        # Se o animal estiver disponível, não deve ter adotante
        if self.status == 'disponivel':
            self.adotante = None
        
        # Chama o método original de salvar do Django
        super().save(*args, **kwargs)

    # Define como o objeto será exibido no admin e em outros lugares
    def __str__(self):
        return f"{self.nome} ({self.especie}) - {self.status}" #Aqui mostra: "Bidu (Cachorro) - Disponível"
