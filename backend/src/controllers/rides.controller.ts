import { Request, Response } from "express";
import { z } from "zod";
import { supabaseAdmin } from "../db/supabase.js";

const rideSchema = z.object({
  from: z.string().min(2),
  to: z.string().min(2),
  date: z.string(), // ISO string from frontend
  price: z.string().min(1),
  contact_email: z.string().email(),
});

export const createRide = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;

    const parsed = rideSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten() });
    }

    const { from, to, date, price, contact_email } = parsed.data;

    const { data, error } = await supabaseAdmin
      .from("rides")
      .insert([
        {
          from_location: from,
          to_location: to,
          date,
          price,
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
    return res.status(500).json({ error: "Failed to create ride listing" });
  }
};