import { Request, Response } from "express";
import { supabaseAdmin } from "../db/supabase.js";

export const createAccommodation = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;

    const { title, description, location, price } = req.body;

    const { data, error } = await supabaseAdmin
      .from("accommodations")
      .insert([
        {
          title,
          description,
          location,
          price,
          user_id: user.id,
        },
      ]);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(201).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Failed to create listing" });
  }
};