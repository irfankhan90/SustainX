import { Request, Response, NextFunction } from "express";
import { createContact, getContacts } from "../models/contact";
import { sendContactConfirmationEmail, sendContactAdminNotificationEmail } from "../utils/mailer";

export const submitContact = async (req: Request, res: Response, next: NextFunction) => {
  console.log("[Contact Request Received] body:", req.body);

  const { full_name, email, subject, message } = req.body;
  
  let contact;
  try {
    contact = await createContact({
      full_name: full_name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim()
    });
    console.log(`[Contact Database Save Successful] ID: ${contact.id}`);
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
    await sendContactConfirmationEmail(contact.email, contact.full_name, contact.subject);
    await sendContactAdminNotificationEmail({
      fullName: contact.full_name,
      email: contact.email,
      subject: contact.subject,
      message: contact.message
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
  try {
    const contacts = await getContacts();

    return res.status(200).json({
      status: "success",
      results: contacts.length,
      data: {
        contacts
      }
    });
  } catch (err) {
    next(err);
  }
};
