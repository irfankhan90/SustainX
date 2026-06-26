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

export const validateInquiry = (req: Request, res: Response, next: NextFunction) => {
  // Normalize camelCase input keys to snake_case
  if (req.body.fullName !== undefined) {
    req.body.full_name = req.body.fullName;
  }
  if (req.body.inquiryType !== undefined) {
    req.body.inquiry_type = req.body.inquiryType;
  }
  if (req.body.mobileNumber !== undefined) {
    req.body.phone = req.body.mobileNumber;
  }

  // Ensure organization is optional and defaulted to empty string if not provided
  if (req.body.organization === undefined || req.body.organization === null) {
    req.body.organization = "";
  }

  const { full_name, email, phone, inquiry_type, message } = req.body;

  if (!full_name || !full_name.trim()) {
    console.error("[Validation Failed] Full Name is required.");
    return res.status(400).json({ success: false, message: "Full Name is required." });
  }

  if (!email || !email.trim()) {
    console.error("[Validation Failed] Email Address is required.");
    return res.status(400).json({ success: false, message: "Email Address is required." });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    console.error("[Validation Failed] Invalid email format.");
    return res.status(400).json({ success: false, message: "Invalid email format." });
  }

  if (!phone || !phone.trim()) {
    console.error("[Validation Failed] Mobile Number is required.");
    return res.status(400).json({ success: false, message: "Mobile Number is required." });
  }

  // Basic international mobile pattern validation: allows leading +, numbers, spaces, dashes, parentheses
  const phoneRegex = /^\+?[0-9\s\-()]{7,25}$/;
  if (!phoneRegex.test(phone.trim())) {
    console.error("[Validation Failed] Invalid mobile number format.");
    return res.status(400).json({ success: false, message: "Invalid mobile number format." });
  }

  const validInquiryTypes = [
    "Strategic Partnership",
    "Develop With SustainX",
    "Accelerate Transformation",
    "Request Strategic Advisory",
    "Discuss a Project Opportunity",
    "Access Energy Trading Services",
    "Other"
  ];

  if (!inquiry_type || !validInquiryTypes.includes(inquiry_type.trim())) {
    console.error("[Validation Failed] Invalid inquiry type.");
    return res.status(400).json({ success: false, message: "Invalid inquiry type." });
  }

  if (!message || !message.trim()) {
    console.error("[Validation Failed] Message is required.");
    return res.status(400).json({ success: false, message: "Message is required." });
  }

  console.log("[Validation Passed]");
  next();
};

export const validateContact = (req: Request, res: Response, next: NextFunction) => {
  // Normalize camelCase input keys to snake_case
  if (req.body.fullName !== undefined) {
    req.body.full_name = req.body.fullName;
  }
  if (req.body.emailAddress !== undefined) {
    req.body.email = req.body.emailAddress;
  }

  const { full_name, email, subject, message } = req.body;

  if (!full_name || !full_name.trim()) {
    console.error("[Validation Failed] Full Name is required.");
    return res.status(400).json({ success: false, message: "Full Name is required." });
  }

  if (!email || !email.trim()) {
    console.error("[Validation Failed] Email Address is required.");
    return res.status(400).json({ success: false, message: "Email Address is required." });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    console.error("[Validation Failed] Invalid email format.");
    return res.status(400).json({ success: false, message: "Invalid email format." });
  }

  if (!subject || !subject.trim()) {
    console.error("[Validation Failed] Subject is required.");
    return res.status(400).json({ success: false, message: "Subject is required." });
  }

  if (!message || !message.trim()) {
    console.error("[Validation Failed] Message is required.");
    return res.status(400).json({ success: false, message: "Message is required." });
  }

  console.log("[Validation Passed] Contact Us details verified.");
  next();
};

export const validateForgotPassword = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  if (!email || !email.trim()) {
    console.error("[Validation Failed] Email address is required for forgot password.");
    return res.status(400).json({ status: "error", message: "Email address is required." });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    console.error("[Validation Failed] Invalid email format for forgot password.");
    return res.status(400).json({ status: "error", message: "Invalid email format." });
  }

  next();
};


