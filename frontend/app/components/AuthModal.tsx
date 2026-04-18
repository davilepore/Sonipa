"use client"

import { useState } from "react";
import { X, Mail, Lock, User, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { loginUser, registerUser, getMe } from "@/lib/api";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

 const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setLoginError("");

  try {
    await loginUser(loginEmail, loginPassword);
    const user = await getMe();                           // ← busca dados do usuário
    if (user) localStorage.setItem("user_name", user.nome); // ← salva nome
    onClose();
    window.location.reload();
  } catch (err) {
    setLoginError("Email ou senha inválidos");
  } finally {
    setLoading(false);
  }
};

const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();

  if (registerPassword !== registerConfirmPassword) {
    setRegisterError("As senhas não coincidem");
    return;
  }

  setLoading(true);
  setRegisterError("");

  try {
    await registerUser(registerName, registerEmail, registerPhone, registerPassword);
    await loginUser(registerEmail, registerPassword);
    const user = await getMe();                           // ← busca dados do usuário
    if (user) localStorage.setItem("user_name", user.nome); // ← salva nome
    onClose();
    window.location.reload();
  } catch (err) {
    setRegisterError("Erro ao cadastrar. Verifique os dados.");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Bem-vindo à SONIPA
          </h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="register">Cadastrar</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="seu@email.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-600">Lembrar-me</span>
                  </label>
                  <a href="#" className="hover:opacity-80" style={{ color: "#EEA71E" }}>
                    Esqueceu a senha?
                  </a>
                </div>

                {loginError && (
                  <p className="text-red-500 text-sm">{loginError}</p>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full hover:opacity-90"
                  style={{ backgroundColor: "#EEA71E", color: "#ffffff" }}
                >
                  {loading ? "Entrando..." : "Entrar"}
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Não tem uma conta?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      const registerTab = document.querySelector('[value="register"]') as HTMLElement;
                      registerTab?.click();
                    }}
                    className="font-medium hover:opacity-80"
                    style={{ color: "#EEA71E" }}
                  >
                    Cadastre-se
                  </button>
                </p>
              </form>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name">Nome Completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Seu nome"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="seu@email.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-phone">Telefone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="register-phone"
                      type="tel"
                      placeholder="(11) 98765-4321"
                      value={registerPhone}
                      onChange={(e) => setRegisterPhone(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="pl-10"
                      required
                      minLength={6}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-confirm-password">Confirmar Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="register-confirm-password"
                      type="password"
                      placeholder="••••••••"
                      value={registerConfirmPassword}
                      onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                      className="pl-10"
                      required
                      minLength={6}
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" className="mt-1 rounded" required />
                  <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                    Eu concordo com os{" "}
                    <a href="#" className="hover:opacity-80" style={{ color: "#EEA71E" }}>
                      Termos de Uso
                    </a>{" "}
                    e{" "}
                    <a href="#" className="hover:opacity-80" style={{ color: "#EEA71E" }}>
                      Política de Privacidade
                    </a>
                  </label>
                </div>

                {registerError && (
                  <p className="text-red-500 text-sm">{registerError}</p>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full hover:opacity-90"
                  style={{ backgroundColor: "#EEA71E", color: "#ffffff" }}
                >
                  {loading ? "Cadastrando..." : "Criar Conta"}
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Já tem uma conta?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      const loginTab = document.querySelector('[value="login"]') as HTMLElement;
                      loginTab?.click();
                    }}
                    className="font-medium hover:opacity-80"
                    style={{ color: "#EEA71E" }}
                  >
                    Faça login
                  </button>
                </p>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}