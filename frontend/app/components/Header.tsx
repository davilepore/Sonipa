"use client"

import { Heart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface HeaderProps {
  onLoginClick: () => void;
}

export function Header({ onLoginClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("access_token");
  });

function handleLogout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user_name");  
  setIsLoggedIn(false);
  window.location.reload();
}

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#EEA71E" }}>
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl" style={{ color: "#23809B" }}>SONIPA</h1>
              <p className="text-xs text-gray-600">Adoção & Cuidado</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-gray-700 hover:text-[#EEA71E] transition">Início</a>
            <a href="#adocao" className="text-gray-700 hover:text-[#EEA71E] transition">Adoção</a>
            <a href="#sobre" className="text-gray-700 hover:text-[#EEA71E] transition">Sobre Nós</a>
            <a href="#contato" className="text-gray-700 hover:text-[#EEA71E] transition">Contato</a>
          </nav>

          {/* Desktop Login/Logout Button */}
          <div className="hidden md:block">
            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                className="hover:opacity-90"
                style={{ backgroundColor: "#23809B" }}
              >
                Sair
              </Button>
            ) : (
              <Button
                onClick={onLoginClick}
                className="hover:opacity-90"
                style={{ backgroundColor: "#23809B" }}
              >
                Entrar / Cadastrar
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col gap-4">
              <a href="#inicio" className="text-gray-700 hover:text-[#EEA71E] transition" onClick={() => setMobileMenuOpen(false)}>Início</a>
              <a href="#adocao" className="text-gray-700 hover:text-[#EEA71E] transition" onClick={() => setMobileMenuOpen(false)}>Adoção</a>
              <a href="#sobre" className="text-gray-700 hover:text-[#EEA71E] transition" onClick={() => setMobileMenuOpen(false)}>Sobre Nós</a>
              <a href="#contato" className="text-gray-700 hover:text-[#EEA71E] transition" onClick={() => setMobileMenuOpen(false)}>Contato</a>

              {isLoggedIn ? (
                <Button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full hover:opacity-90"
                  style={{ backgroundColor: "#23809B" }}
                >
                  Sair
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    onLoginClick();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full hover:opacity-90"
                  style={{ backgroundColor: "#23809B" }}
                >
                  Entrar / Cadastrar
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}