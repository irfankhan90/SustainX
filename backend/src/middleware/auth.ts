import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/errors";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    email: string;
    role: "USER" | "ADMIN";
  };
}

export const authenticateJWT = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError("Access denied. No token provided.", 401));
  }

  const token = authHeader.split(" ")[1];

  try {
    const jwtSecret = process.env.JWT_SECRET || "super_secret_sustainx_key_change_me";
    const decoded = jwt.verify(token, jwtSecret) as {
      id: number;
      email: string;
      role: "USER" | "ADMIN";
    };
    
    req.user = decoded;
    next();
  } catch (err: any) {
    return next(new AppError("Invalid or expired token.", 403));
  }
};

export const authorizeRoles = (...roles: ("USER" | "ADMIN")[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new AppError("Authentication required.", 401));
    }

    if (!roles.includes(req.user.role)) {
      return next(new AppError("Forbidden. You do not have permission.", 403));
    }

    next();
  };
};
