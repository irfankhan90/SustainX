import { Router } from "express";
import { submitContact, listContacts } from "../controllers/contact";
import { validateContact } from "../middleware/validation";
import { authenticateJWT, authorizeRoles } from "../middleware/auth";

const router = Router();

// Public contact submission
router.post("/", validateContact, submitContact);

// Protected Admin-only list
router.get("/", authenticateJWT, authorizeRoles("ADMIN"), listContacts);

export default router;
