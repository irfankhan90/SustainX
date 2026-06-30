import { Router } from "express";
import { 
  login, 
  logout, 
  getDashboardStats, 
  getAdminInquiries, 
  getInquiry, 
  updateInquiryStatus, 
  deleteInquiry 
} from "../controllers/adminController";
import { authenticateJWT, authorizeRoles } from "../middleware/auth";
import { validateLogin } from "../middleware/validation";

const router = Router();

// Public routes
router.post("/login", validateLogin, login);

// Protected routes (Only ADMIN)
router.post("/logout", authenticateJWT, authorizeRoles("ADMIN"), logout);
router.get("/dashboard", authenticateJWT, authorizeRoles("ADMIN"), getDashboardStats);
router.get("/inquiries", authenticateJWT, authorizeRoles("ADMIN"), getAdminInquiries);
router.get("/inquiries/:id", authenticateJWT, authorizeRoles("ADMIN"), getInquiry);
router.put("/inquiries/:id/status", authenticateJWT, authorizeRoles("ADMIN"), updateInquiryStatus);
router.delete("/inquiries/:id", authenticateJWT, authorizeRoles("ADMIN"), deleteInquiry);

export default router;
