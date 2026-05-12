from django.urls import path
from .views import CreateDonationView

urlpatterns = [
    path('donations/', CreateDonationView.as_view(), name='donations'),
]