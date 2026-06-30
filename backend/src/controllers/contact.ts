import { Request, Response, NextFunction } from "express";
import { createInquiry } from "../models/inquiry";
import { sendConfirmationEmail, sendContactAdminNotificationEmail } from "../utils/mailer";

export const submitContact = async (req: Request, res: Response, next: NextFunction) => {
  console.log("[Contact Request Received] body:", req.body);

  const { full_name, email, phone, inquiry_type, message } = req.body;
  
  const getClientIp = (req: Request): string => {
    const xForwardedFor = req.headers['x-forwarded-for'];
    if (typeof xForwardedFor === 'string') {
      return xForwardedFor.split(',')[0].trim();
    }
    return req.ip || req.socket.remoteAddress || '';
  };
  const ipAddress = getClientIp(req);

  let inquiry;
  try {
    inquiry = await createInquiry({
      full_name: full_name.trim(),
      organization: "",
      email: email.trim(),
      phone: phone.trim(),
      inquiry_type: inquiry_type.trim(),
      message: message.trim(),
      ip_address: ipAddress
    });
    console.log(`[Contact Saved as Inquiry] ID: ${inquiry.id}`);
  } catch (err: any) {
    console.error(`[Contact Database Save Failed] Reason: ${err.message}`);
    const errResponse = {
      success: false,
      message: "Database connection failed or contact request submission failed."
    };
    return res.status(500).json(errResponse);
  }

  // Save successful. Attempt email dispatch.
  console.log("[Email Send Started] Sending contact emails...");
  try {
    await sendConfirmationEmail(inquiry.email, inquiry.full_name, inquiry.inquiry_type);
    await sendContactAdminNotificationEmail({
      fullName: inquiry.full_name,
      email: inquiry.email,
      phone: inquiry.phone,
      inquiryType: inquiry.inquiry_type,
      message: inquiry.message,
      ipAddress: inquiry.ip_address
    });
    console.log("[Email Send Successful] Contact email delivery completed.");
  } catch (err: any) {
    console.error(`[Email Send Failed] Reason: ${err.message}`);
    // Return 200 indicating DB saved but email failed
    const emailErrResponse = {
      success: false,
      message: "Your message was saved, but email notification could not be sent."
    };
    return res.status(200).json(emailErrResponse);
  }

  const successResponse = {
    success: true,
    message: "Message submitted successfully."
  };
  console.log("[Final API Response] status: 201, body:", successResponse);
  return res.status(201).json(successResponse);
};

export const listContacts = async (req: Request, res: Response, next: NextFunction) => {
  // Return empty list or fetch from inquiries if ever called (it is not used by frontend)
  return res.status(200).json({
    status: "success",
    results: 0,
    data: {
      contacts: []
    }
  });
};
