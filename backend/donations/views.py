import mercadopago
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

sdk = mercadopago.SDK("SEU_ACCESS_TOKEN_AQUI")

class CreateDonationView(APIView):
    def post(self, request):
        print("dados recebidos:", request.data)  # ← adicione isso
        valor = request.data.get('valor')
        email = request.data.get('email')
        print("valor:", valor, "email:", email)  # ← e isso
        payment_data = {
            "transaction_amount": float(valor),
            "description": "Doação para SONIPA",
            "payment_method_id": "pix",
            "payer": {
                "email": email,
            }
        }

        result = sdk.payment().create(payment_data)
        payment = result["response"]

        if result["status"] == 201:
            return Response({
                "qr_code": payment["point_of_interaction"]["transaction_data"]["qr_code"],
                "qr_code_base64": payment["point_of_interaction"]["transaction_data"]["qr_code_base64"],
                "payment_id": payment["id"],
            })

        return Response({"error": "Erro ao criar pagamento"}, status=status.HTTP_400_BAD_REQUEST)