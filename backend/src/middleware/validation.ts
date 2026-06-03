import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/errors";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
  const { full_name, email, password, organization, role } = req.body;

  if (!full_name || !full_name.trim()) {
    return next(new AppError("Full name is required", 400));
  }

  if (!email || !email.trim()) {
    return next(new AppError("Email is required", 400));
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return next(new AppError("Invalid email format", 400));
  }

  if (!password || password.length < 8) {
    return next(new AppError("Password must be at least 8 characters long", 400));
  }

  if (!organization || !organization.trim()) {
    return next(new AppError("Organization is required", 400));
  }

  if (role && !["USER", "ADMIN"].includes(role)) {
    return next(new AppError("Invalid user role supplied", 400));
  }

  next();
};

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !email.trim()) {
    return next(new AppError("Email is required", 400));
  }

  if (!password) {
    return next(new AppError("Password is required", 400));
  }

  next();
};
