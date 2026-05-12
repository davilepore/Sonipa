"use client";
import { Heart, Sparkles, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { DonationSection } from "./Donation";

interface HeroProps {
  onAdoptClick: () => void;
}

export function Hero({ onAdoptClick }: HeroProps) {
  const [isDonating, setIsDonating] = useState(false);
  const [userName, setUserName] = useState(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("user_name") || "";
  });
  const userNameFormatted = userName
    ? userName.charAt(0).toUpperCase() + userName.slice(1)
    : "";
  return (
    <section id="inicio" className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {userName && (
              <h2 className="text-lg text-gray-600">
                Olá,{" "}
                <span className="font-bold" style={{ color: "#EEA71E" }}>
                  {userNameFormatted}
                </span>
              </h2>
            )}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: "#EEA71E", color: "#ffffff" }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">
                ONG de Proteção Animal
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Adote um Amigo de{" "}
              <span style={{ color: "#EEA71E" }}>Quatro Patas</span>
            </h2>

            <p className="text-xl text-gray-600">
              Na SONIPA, resgatamos, cuidamos e encontramos lares amorosos para
              cães que precisam de uma segunda chance. Cada adoção transforma
              duas vidas.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={onAdoptClick}
                size="lg"
                className="text-lg px-8 hover:opacity-90"
                style={{ backgroundColor: "#EEA71E", color: "#ffffff" }}
              >
                <Heart className="w-5 h-5 mr-2" />
                Ver Cães para Adoção
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-2 hover:bg-opacity-10"
                style={{ borderColor: "#23809B", color: "#23809B" }}
              >
                Saiba Mais
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold" style={{ color: "#EEA71E" }}>
                  500+
                </p>
                <p className="text-gray-600">Cães Adotados</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: "#23809B" }}>
                  120+
                </p>
                <p className="text-gray-600">Voluntários</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: "#EEA71E" }}>
                  8
                </p>
                <p className="text-gray-600">Anos de Missão</p>
              </div>
            </div>
            <div>
              <Button
                size="lg"
                className="text-lg p-5 border-2 hover:bg-opacity-10"
                style={{ backgroundColor: "#23809B", color: "#ffffff" }}
                onClick={() => setIsDonating(true)}
              >
                Fazer uma doação
              </Button>
            </div>
            {isDonating && (
             <div className="fixed inset-0 bg-transparent backdrop-blur-2xl flex items-center justify-center z-50 flex-col  ">
              <DonationSection/>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1719292606971-0916fc62f5b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGdvbGRlbiUyMHJldHJpZXZlciUyMGRvZ3xlbnwxfHx8fDE3NzQyNjMyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cachorro feliz aguardando adoção"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <p className="text-sm text-gray-600">💛 Destaque da Semana</p>
                <p className="text-xl font-bold text-gray-900">
                  Rex - Esperando por você!
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-2xl"
              style={{ backgroundColor: "#EEA71E" }}
            ></div>
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-20 blur-2xl"
              style={{ backgroundColor: "#23809B" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
