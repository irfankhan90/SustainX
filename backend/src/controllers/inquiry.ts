import { Request, Response, NextFunction } from "express";
import { createInquiry, getInquiries } from "../models/inquiry";
import { sendConfirmationEmail, sendAdminNotificationEmail } from "../utils/mailer";

export const submitInquiry = async (req: Request, res: Response, next: NextFunction) => {
  console.log("[Request Received] body:", req.body);
  console.log("[Validation Passed] Processing submitInquiry controller...");

  const { full_name, organization, email, inquiry_type, message } = req.body;
  
  let inquiry;
  try {
    inquiry = await createInquiry({
      full_name: full_name.trim(),
      organization: (organization || "").trim(),
      email: email.trim(),
      inquiry_type: inquiry_type.trim(),
      message: message.trim()
    });
    console.log(`[Database Save Successful] Inquiry ID: ${inquiry.id}`);
  } catch (err: any) {
    console.error(`[Database Save Failed] Reason: ${err.message}`);
    const errResponse = {
      success: false,
      message: "Database connection failed or inquiry submission failed."
    };
    console.log("[Final API Response] status: 500, body:", errResponse);
    return res.status(500).json(errResponse);
  }

  // Database saved successfully. Now attempt to send emails.
  console.log("[Email Send Started] Sending confirmation to user and admin...");
  try {
    await sendConfirmationEmail(inquiry.email, inquiry.full_name, inquiry.inquiry_type);
    await sendAdminNotificationEmail({
      fullName: inquiry.full_name,
      organization: inquiry.organization,
      email: inquiry.email,
      inquiryType: inquiry.inquiry_type,
      message: inquiry.message
    });
    console.log("[Email Send Successful] Email delivery completed successfully.");
  } catch (err: any) {
    console.error(`[Email Send Failed] Reason: ${err.message}`);
    const emailErrResponse = {
      success: false,
      message: "Your inquiry was saved, but email notification could not be sent."
    };
    console.log("[Final API Response] status: 200, body:", emailErrResponse);
    return res.status(200).json(emailErrResponse);
  }

  // Return exact requested success response format
  const successResponse = {
    success: true,
    message: "Inquiry submitted successfully."
  };
  console.log("[Final API Response] status: 201, body:", successResponse);
  return res.status(201).json(successResponse);
};

export const listInquiries = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category = req.query.category as string | undefined;
    const inquiries = await getInquiries(category);

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
