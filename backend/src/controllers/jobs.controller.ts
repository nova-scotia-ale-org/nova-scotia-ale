import { Request, Response } from "express";
import { z } from "zod";
import { supabaseAdmin } from "../db/supabase.js";

const jobSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(5),
  location: z.string().min(2),
  salary: z.string().min(1), // keep string for MVP (can refine later)
  contact_email: z.string().email(),
});

export const createJob = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;

    const parsed = jobSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten() });
    }

    const { title, description, location, salary, contact_email } = parsed.data;

    const { data, error } = await supabaseAdmin
      .from("jobs")
      .insert([
        {
          title,
          description,
          location,
          salary,
          contact_email,
          user_id: user.id, // ✅ secure binding
        },
      ])
      .select()
      .single();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(201).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Failed to create job listing" });
  }
};