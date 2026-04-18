from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser): #Herdamos o usuário padrão e estendemos
    email = models.EmailField(unique=True) #Não pode ter dois usuários com o mesmo email
    nome = models.CharField(max_length=150, blank=True)
    telefone = models.CharField(max_length=15, blank=True, null=True)

    USERNAME_FIELD = 'email' #“O login agora será feito com email”
    REQUIRED_FIELDS = ['username'] #Ainda precisamos do username internamente

    def __str__(self):
        return self.email
