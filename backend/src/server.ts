import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { env } from "./config/env.js";
import authRoutes from "./routes/auth.routes.js";
import accommodationRoutes from "./routes/accommodation.routes.js";
import jobsRoutes from "./routes/jobs.routes.js";
import ridesRoutes from "./routes/rides.routes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: env.CORS_ORIGIN, // e.g. http://localhost:5173
  credentials: true,
}));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "OK", message: "Backend is running 🚀" });
});

app.use("/api/accommodations", accommodationRoutes);
app.use("/api/jobs", jobsRoutes);
app.use("/api/rides", ridesRoutes);

app.use("/api/auth", authRoutes);

app.listen(env.PORT, () => {
  console.log(`🚀 Server running on port ${env.PORT}`);
});