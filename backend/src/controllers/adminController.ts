import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findUserByEmail } from "../models/user";
import { 
  getInquiries, 
  getInquiryById, 
  updateInquiryStatus as updateStatusModel, 
  deleteInquiry as deleteModel, 
  getInquiryStats 
} from "../models/inquiry";
import { AppError } from "../utils/errors";

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) {
      return next(new AppError("Invalid email or password.", 401));
    }

    if (user.role !== "ADMIN") {
      return next(new AppError("Access denied. Admin credentials required.", 403));
    }

    if (!user.is_active) {
      return next(new AppError("This account has been deactivated.", 403));
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return next(new AppError("Invalid email or password.", 401));
    }

    const jwtSecret = process.env.JWT_SECRET || "sustainx_secret_jwt_key_2026";
    const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "7d";

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      jwtSecret,
      { expiresIn: jwtExpiresIn as any }
    );

    return res.status(200).json({
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
          created_at: user.created_at
        }
      }
    });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    status: "success",
    message: "Logout successful"
  });
};

export const getDashboardStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const stats = await getInquiryStats();
    return res.status(200).json({
      status: "success",
      data: {
        stats
      }
    });
  } catch (err) {
    next(err);
  }
};

export const getAdminInquiries = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category, status, search, dateRange } = req.query;

    let inquiries = await getInquiries(category as string);

    // Filter by status if provided
    if (status && status !== "All") {
      inquiries = inquiries.filter(i => i.status === status);
    }

    // Filter by search query (Name, Email, Company, Subject, Message)
    if (search && (search as string).trim() !== "") {
      const q = (search as string).toLowerCase().trim();
      inquiries = inquiries.filter(i => 
        (i.full_name || "").toLowerCase().includes(q) ||
        (i.email || "").toLowerCase().includes(q) ||
        (i.organization || "").toLowerCase().includes(q) ||
        (i.message || "").toLowerCase().includes(q) ||
        (i.inquiry_type || "").toLowerCase().includes(q)
      );
    }

    // Filter by Date Range (e.g. today, 7d, 30d)
    if (dateRange && dateRange !== "All") {
      const now = new Date();
      const compareDate = new Date();
      if (dateRange === "today") {
        compareDate.setHours(0, 0, 0, 0);
        inquiries = inquiries.filter(i => new Date(i.created_at) >= compareDate);
      } else if (dateRange === "7d") {
        compareDate.setDate(now.getDate() - 7);
        inquiries = inquiries.filter(i => new Date(i.created_at) >= compareDate);
      } else if (dateRange === "30d") {
        compareDate.setDate(now.getDate() - 30);
        inquiries = inquiries.filter(i => new Date(i.created_at) >= compareDate);
      }
    }

    return res.status(200).json({
      status: "success",
      results: inquiries.length,
      data: {
        inquiries
      }
    });
  } catch (err) {
    next(err);
  }
};

export const getInquiry = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return next(new AppError("Invalid inquiry ID", 400));
    }

    const inquiry = await getInquiryById(id);
    if (!inquiry) {
      return next(new AppError("Inquiry not found", 404));
    }

    return res.status(200).json({
      status: "success",
      data: {
        inquiry
      }
    });
  } catch (err) {
    next(err);
  }
};

export const updateInquiryStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const { status } = req.body;

    if (isNaN(id)) {
      return next(new AppError("Invalid inquiry ID", 400));
    }

    if (!status) {
      return next(new AppError("Status field is required", 400));
    }

    const updated = await updateStatusModel(id, status);
    if (!updated) {
      return next(new AppError("Inquiry not found or update failed", 404));
    }

    return res.status(200).json({
      status: "success",
      message: "Status updated successfully",
      data: {
        inquiry: updated
      }
    });
  } catch (err) {
    next(err);
  }
};

export const deleteInquiry = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return next(new AppError("Invalid inquiry ID", 400));
    }

    const success = await deleteModel(id);
    if (!success) {
      return next(new AppError("Inquiry not found or delete failed", 404));
    }

    return res.status(200).json({
      status: "success",
      message: "Inquiry deleted successfully"
    });
  } catch (err) {
    next(err);
  }
};
