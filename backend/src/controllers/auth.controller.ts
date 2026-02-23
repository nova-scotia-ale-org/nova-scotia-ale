import { Request, Response } from 'express'
import { supabase } from '../db/supabase.js'
import { z } from 'zod'

const registerSchema = z.object({
  email: z.string().email(),    
  password: z.string().min(6),
  name: z.string().min(2)
})  

export const registerUser = async (req: Request, res: Response) => {
  const parsed = registerSchema.safeParse(req.body)

  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() })
  }

  const { email, password, name } = parsed.data

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name }
    }
  })

  if (error) {
    return res.status(400).json({ error: error.message })
  }

  res.status(201).json({
    message: 'User registered successfully',
    user: data.user
  })
}
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    return res.status(400).json({ error: error.message })
  }

  res.json({
    access_token: data.session?.access_token,
    user: data.user 
  })
}