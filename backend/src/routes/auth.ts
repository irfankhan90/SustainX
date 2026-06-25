import { Router } from "express";
import { register, login, forgotPassword } from "../controllers/auth";
import { validateRegister, validateLogin, validateForgotPassword } from "../middleware/validation";

const router = Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.post("/forgot-password", validateForgotPassword, forgotPassword);

export default router;
