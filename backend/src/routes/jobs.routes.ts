import { Router } from "express";
import { createJob } from "../controllers/jobs.controller.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = Router();

// Public GET (optional for now)
router.get("/", async (req, res) => {
  res.json({ message: "Public jobs endpoint" });
});

// Protected POST
router.post("/", requireAuth, createJob);

export default router; // ✅ THIS IS IMPORTANT