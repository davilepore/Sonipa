"use client"

import { DogCard } from "./DogCard";
import { getAnimals } from "@/lib/api";
import { useEffect, useState } from "react";

type Dog = {
  id: number,
  nome: string,
  especie: string,
  idade: number,
  descricao: string,
  foto: string,
  status: string,
  data_resgate: string,
  adotante: string | null
};


export default function AdoptionSection() {
  const [dogs, SetDogs ] = useState<Dog[]>([])

  useEffect(() => {
  getAnimals().then(SetDogs).catch(console.error);
}, []); 
  return (
    <section id="adocao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cães Disponíveis para Adoção
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todos os nossos cães são vacinados, castrados e prontos para encontrar um lar cheio de amor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dogs.map((dog: Dog) => (
            <DogCard key={dog.id} {...dog} />
          ))}
        </div>
      </div>
    </section>
  );
}
