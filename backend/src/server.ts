import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { env } from "./config/env.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "OK", message: "Backend is running 🚀" });
});

const PORT = process.env.PORT || 5000;

app.listen(env.port, () => {
  console.log(`🚀 Server running on port ${env.port}`);
});