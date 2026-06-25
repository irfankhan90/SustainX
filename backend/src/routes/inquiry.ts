import { Router } from "express";
import { submitInquiry, listInquiries } from "../controllers/inquiry";
import { validateInquiry } from "../middleware/validation";
import { authenticateJWT, authorizeRoles } from "../middleware/auth";

const router = Router();

// Public submission route
router.post("/", validateInquiry, submitInquiry);

// Protected Admin-only list and filter route
router.get("/", authenticateJWT, authorizeRoles("ADMIN"), listInquiries);

export default router;
