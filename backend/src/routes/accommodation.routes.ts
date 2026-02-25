import { Router } from "express";
import { createAccommodation } from "../controllers/accommodation.controller.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = Router();

// Public
router.get("/", async (req, res) => {
  res.json({ message: "Public accommodations endpoint" });
});

// Protected
router.post("/", requireAuth, createAccommodation);

export default router;