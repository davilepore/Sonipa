const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

export async function getAnimals() {
  const res = await fetch(`${API_URL}/animals/`);
  return res.json();
}

export async function loginUser(email: string, password: string) {
  const response = await fetch(`${API_URL}/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) throw new Error("Email ou senha inválidos");

  const data = await response.json();
  localStorage.setItem("access_token", data.access);
  localStorage.setItem("refresh_token", data.refresh);
  return data;
}

export async function registerUser(nome: string, email: string, telefone: string, password: string) {
  const response = await fetch(`${API_URL}/users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, telefone, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(JSON.stringify(error));
  }

  return response.json();
}

export async function adoptAnimal(id: number) {
  const token = localStorage.getItem("access_token");

  const response = await fetch(`${API_URL}/animals/${id}/adopt/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Erro ao adotar");
  return response.json();
}

export async function getMe() {
  const token = localStorage.getItem("access_token");
  if (!token) return null;

  const response = await fetch(`${API_URL}/users/me/`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) return null;
  return response.json();
}