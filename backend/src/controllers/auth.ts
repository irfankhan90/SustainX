import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { findUserByEmail, createUser } from "../models/user";
import { AppError } from "../utils/errors";
import { sendPasswordResetEmail } from "../utils/mailer";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { full_name, email, password, organization, role } = req.body;

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return next(new AppError("An account with this email address already exists.", 409));
    }

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const user = await createUser({
      full_name,
      email,
      password_hash,
      organization,
      role,
    });

    const jwtSecret = process.env.JWT_SECRET!;
    const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "7d";

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      jwtSecret,
      { expiresIn: jwtExpiresIn as any }
    );

    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      data: {
        token,
        user: {
          id: user.id,
          full_name: user.full_name,
          email: user.email,
          organization: user.organization,
          role: user.role,
          is_active: user.is_active,
          created_at: user.created_at,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) {
      return next(new AppError("Invalid email or password", 401));
    }

    if (!user.is_active) {
      return next(new AppError("This account has been deactivated.", 403));
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return next(new AppError("Invalid email or password", 401));
    }

    const jwtSecret = process.env.JWT_SECRET!;
    const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "7d";

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      jwtSecret,
      { expiresIn: jwtExpiresIn as any }
    );

    res.status(200).json({
      status: "success",
      message: "Login successful",
      data: {
        token,
        user: {
          id: user.id,
          full_name: user.full_name,
          email: user.email,
          organization: user.organization,
          role: user.role,
          is_active: user.is_active,
          created_at: user.created_at,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

export const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;

    const user = await findUserByEmail(email);
    if (!user) {
      console.log(`[Forgot Password] Requested email ${email} not found. Returning mock success to prevent enumeration.`);
      return res.status(200).json({
        status: "success",
        message: "Password reset instructions sent successfully.",
      });
    }

    const token = crypto.randomBytes(20).toString("hex");

    await sendPasswordResetEmail(user.email, token);

    res.status(200).json({
      status: "success",
      message: "Password reset instructions sent successfully.",
    });
  } catch (err) {
    next(err);
  }
};
