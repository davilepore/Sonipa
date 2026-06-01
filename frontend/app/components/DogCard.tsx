"use client";

import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState, useEffect } from "react";
import Image from "next/image";

interface DogCardProps {
  id: number;
  nome: string;
  especie: string;
  idade: number;
  descricao: string;
  foto: string;
  status: string;
  data_resgate: string;
  adotante: string | null;
}

function formatarData(iso: string) {
  const [year, month, day] = iso.slice(0, 10).split("-");
  return `${day}/${month}/${year}`;
}

export function DogCard({
  id,
  nome,
  especie,
  idade,
  descricao,
  foto,
  status,
  data_resgate,
  adotante,
}: DogCardProps) {
  const [selecionado, setSelecionado] = useState(false);
  const dataResgateFormatada = formatarData(data_resgate);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
      <div className="relative h-64 overflow-hidden mb-4">
        <img src={foto} alt={nome} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <Badge
            className="hover:opacity-90"
            style={{ backgroundColor: "#EEA71E", color: "#ffffff" }}
          >
            {especie}
          </Badge>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{nome}</h3>
          <p className="text-gray-600">{especie}</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>{idade}</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {dataResgateFormatada}
          </div>
        </div>

        <Button
          className="w-full hover:opacity-90"
          style={{ backgroundColor: "#EEA71E", color: "#ffffff" }}
          onClick={() => setSelecionado(true)}
        >
          Conhecer {nome}
        </Button>
      </div>

      {selecionado && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-2xl flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md mx-auto shadow-lg">
            <div className="relative h-64 overflow-hidden mb-4">
              <img
                src={foto}
                alt={nome}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge
                  className="hover:opacity-90"
                  style={{ backgroundColor: "#EEA71E", color: "#ffffff" }}
                >
                  {especie}
                </Badge>
              </div>
            </div>
            <div className="justify-between w-full flex">
              <h2 className="text-2xl font-bold mb-4">{nome}</h2>
              <p className="text-xl font-semibold mb-4">{idade} anos</p>
            </div>
            <p className="text-gray-600 mb-4">{descricao}</p>
            <p className="mb-4">Resgatado em: {dataResgateFormatada}</p>
            <Button
              className="w-full hover:opacity-90"
              style={{ backgroundColor: "#EEA71E", color: "#ffffff" }}
              onClick={() => setSelecionado(false)}
            >
              Fechar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
