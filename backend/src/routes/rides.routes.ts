import { Router } from "express";
import { createRide } from "../controllers/rides.controller.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = Router();

router.get("/", async (req, res) => {
  res.json({ message: "Public rides endpoint" });
});

router.post("/", requireAuth, createRide);

export default router; // ✅ THIS IS IMPORTANT