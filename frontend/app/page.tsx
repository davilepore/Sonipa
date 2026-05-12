"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import  AdoptionSection  from "./components/AdoptionSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { AuthModal } from "./components/AuthModal";
import { DonationSection } from "./components/Donation";

export default function Home() {
   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const scrollToAdoption = () => {
    const adoptionSection = document.getElementById('adocao');
    if (adoptionSection) {
      adoptionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setIsAuthModalOpen(true)} />
      <Hero onAdoptClick={scrollToAdoption} />
      <AdoptionSection />
      <AboutSection />
      <Footer />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
      
    </div>
  );
}
