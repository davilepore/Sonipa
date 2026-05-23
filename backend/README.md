# Backend SONIPA

Este backend usa Django, Django REST Framework e JWT. A configuracao de banco fica em variaveis de ambiente.

## Configurar ambiente

Crie uma copia do arquivo de exemplo:

```bash
copy .env.example .env
```

No modo local, voce pode manter:

```env
DB_ENGINE=sqlite
SQLITE_NAME=db.sqlite3
```

Para PostgreSQL, ajuste o `.env` assim:

```env
DB_ENGINE=postgresql
DB_NAME=sonipa
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
```

## Instalar dependencias

```bash
pip install -r requirements.txt
```

## Criar ou atualizar tabelas

Sempre que configurar um banco novo, rode:

```bash
python manage.py migrate
```

Se alterar models, gere migrations antes:

```bash
python manage.py makemigrations
python manage.py migrate
```

## Criar usuario administrador

```bash
python manage.py createsuperuser
```

Como o projeto usa login por email, informe um email valido quando o Django pedir.

## Rodar o backend

```bash
python manage.py runserver
```

A API fica em:

```text
http://127.0.0.1:8000/api/
```
