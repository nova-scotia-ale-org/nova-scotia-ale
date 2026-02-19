import dotenv from "dotenv";

dotenv.config();

const requiredEnvVars = ["SUPABASE_URL", "SUPABASE_ANON_KEY"];

requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

export const env = {
  port: process.env.PORT || "5000",
  supabaseUrl: process.env.SUPABASE_URL as string,
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY as string,
  nodeEnv: process.env.NODE_ENV || "development",
};