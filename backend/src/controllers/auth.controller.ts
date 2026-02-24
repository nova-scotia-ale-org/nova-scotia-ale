import { Request, Response } from "express";
import { z } from "zod";
import { supabaseAuth, supabaseAdmin } from "../db/supabase.js";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
});

export const registerUser = async (req: Request, res: Response) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

  const { email, password, name } = parsed.data;

  const { data, error } = await supabaseAuth.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });

  if (error) return res.status(400).json({ error: error.message });
  if (!data.user) return res.status(400).json({ error: "No user returned from Supabase." });

  // ✅ Save profile row (role default user)
  const { error: dbError } = await supabaseAdmin.from("users").insert({
    id: data.user.id,
    email,
    name,
    role: "user",
  });

  if (dbError) return res.status(400).json({ error: dbError.message });

  return res.status(201).json({
    message: "User registered successfully",
    user: { id: data.user.id, email },
  });
};

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const loginUser = async (req: Request, res: Response) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

  const { email, password } = parsed.data;

  const { data, error } = await supabaseAuth.auth.signInWithPassword({ email, password });
  if (error) return res.status(400).json({ error: error.message });
  if (!data.session || !data.user) return res.status(400).json({ error: "Login failed." });

  // ✅ fetch role/name from users table
  const { data: profile } = await supabaseAdmin
    .from("users")
    .select("id,email,name,role")
    .eq("id", data.user.id)
    .single();

  return res.json({
    access_token: data.session.access_token,
    user: profile ?? { id: data.user.id, email: data.user.email },
  });
};