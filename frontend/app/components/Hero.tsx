"use client";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  onAdoptClick: () => void;
}

export function Hero({ onAdoptClick }: HeroProps) {
  const [userName] = useState(() => {
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
          <div className="space-y-8">
            {userName && (
              <p className="text-base text-gray-500 tracking-wide">
                Olá,{" "}
                <span className="font-semibold" style={{ color: "#EEA71E" }}>
                  {userNameFormatted}
                </span>{" "}
                👋
              </p>
            )}

            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium tracking-wide"
              style={{ borderColor: "#EEA71E", color: "#EEA71E" }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              ONG de Proteção Animal
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Adote um amigo
                <br />
                de{" "}
                <span
                  className="relative inline-block"
                  style={{ color: "#EEA71E" }}
                >
                  quatro patas
                  <span
                    className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full opacity-40"
                    style={{ backgroundColor: "#EEA71E" }}
                  />
                </span>
              </h1>
            </div>

            <p className="text-lg text-gray-500 leading-relaxed max-w-md">
              Na SONIPA, resgatamos, cuidamos e encontramos lares amorosos para
              cães que precisam de uma segunda chance. Cada adoção transforma
              duas vidas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Button
                onClick={onAdoptClick}
                size="lg"
                className="group text-base px-7 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:opacity-95"
                style={{ backgroundColor: "#EEA71E", color: "#ffffff" }}
              >
                <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Ver cães para adoção
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-base px-7 py-3 rounded-xl font-semibold border-2 transition-all duration-200 hover:bg-gray-50"
                style={{ borderColor: "#23809B", color: "#23809B" }}
              >
                Saiba mais
              </Button>
            </div>

            <div>
              <Link
                href="#doacao"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:shadow-md"
                style={{ backgroundColor: "#23809B", color: "#ffffff" }}
              >
                <Heart className="w-4 h-4" />
                Fazer uma doação
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1661552066736-935e0cad1782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjYXJpbmclMjJkb2d8ZW58MXx8fHwxNzc0MzEwOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Voluntário cuidando de cachorro"
                fill
                className="object-cover"
              />
            </div>

            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-2xl"
              style={{ backgroundColor: "#EEA71E" }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-20 blur-2xl"
              style={{ backgroundColor: "#23809B" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
