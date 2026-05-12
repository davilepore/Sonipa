"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function DonationSection() {
  const [valor, setValor] = useState("")
  const [email, setEmail] = useState("")
  const [qrCode, setQrCode] = useState("")
  const [qrCodeBase64, setQrCodeBase64] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleDonate(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const response = await fetch("http://127.0.0.1:8000/api/donations/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valor, email }),
    })

    const data = await response.json()
    setQrCode(data.qr_code)
    setQrCodeBase64(data.qr_code_base64)
    setLoading(false)
  }

  return (
    <section className="py-20 bg-gray-50 w-[90%] rounded-md">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8">Faça uma Doação</h2>

        {!qrCode ? (
          <form onSubmit={handleDonate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Valor (R$)</label>
              <Input
                type="number"
                placeholder="Ex: 50"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                min="1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Seu Email</label>
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full"
              style={{ backgroundColor: "#EEA71E", color: "#ffffff" }}
            >
              {loading ? "Gerando PIX..." : "Doar via PIX"}
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-green-600 font-medium">PIX gerado com sucesso!</p>
            <img
              src={`data:image/png;base64,${qrCodeBase64}`}
              alt="QR Code PIX"
              className="mx-auto w-48 h-48"
            />
            <p className="text-sm text-gray-600">Copie o código PIX:</p>
            <div className="bg-gray-100 rounded-lg p-3 text-xs break-all">{qrCode}</div>
            <Button
              onClick={() => navigator.clipboard.writeText(qrCode)}
              className="w-full"
              style={{ backgroundColor: "#23809B", color: "#ffffff" }}
            >
              Copiar código PIX
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}