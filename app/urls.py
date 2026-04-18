from django.contrib import admin
from django.urls import path, include
from app_front.views import home
from rest_framework_simplejwt.views import TokenRefreshView
from users.authentication import EmailTokenObtainPairView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include('donations.urls')),  # API de doações
    path('api/', include('animals.urls')),    # API de animais
    path('api/', include('events.urls')),     # API de eventos

    # Autenticação JWT
    path('api/token/', EmailTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('', home),  # raiz do site retorna a homepage
]