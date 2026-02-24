import { api } from "./axios";

export type AuthUser = { id: string; email: string; name?: string; role?: string };

export async function register(payload: { name: string; email: string; password: string }) {
  const res = await api.post("/api/auth/register", payload);
  return res.data;
}

export async function login(payload: { email: string; password: string }) {
  const res = await api.post("/api/auth/login", payload);
  return res.data as { access_token: string; user: AuthUser };
}