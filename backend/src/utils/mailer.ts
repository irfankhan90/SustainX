import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const logFilePath = process.env.VERCEL
  ? "/tmp/sent_emails.log"
  : path.join(__dirname, "../../../sent_emails.log");

const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

// Verify SMTP environment variables on module initialization
const verifySMTPConfig = () => {
  const missingVars = [];
  if (!host) missingVars.push("SMTP_HOST");
  if (!port) missingVars.push("SMTP_PORT");
  if (!user) missingVars.push("SMTP_USER");
  if (!pass) missingVars.push("SMTP_PASS");

  if (missingVars.length > 0) {
    console.warn(
      `[Mailer Warning] Missing SMTP environment variables: ${missingVars.join(", ")}. ` +
      `WARNING: Email delivery cannot function until SMTP credentials are configured in the deployment environment.`
    );
  } else {
    console.log("[Mailer Config] SMTP environment variables detected successfully. Nodemailer is verifying transport connection...");
    const transporter = nodemailer.createTransport({
      host,
      port: parseInt(port!, 10),
      auth: { user, pass },
    });
    transporter.verify((error) => {
      if (error) {
        console.error(`[Mailer Error] SMTP connection configuration is invalid: ${error.message}`);
      } else {
        console.log("[Mailer Success] SMTP server connection established successfully and transport is ready.");
      }
    });
  }
};

verifySMTPConfig();

// Helper to log emails in dev environment or fallback
const logEmailToFile = (to: string, subject: string, html: string) => {
  try {
    const dir = path.dirname(logFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.appendFileSync(
      logFilePath,
      `\n\n===================================\nTIMESTAMP: ${new Date().toISOString()}\nTO: ${to}\nSUBJECT: ${subject}\nHTML CONTENT:\n${html}\n===================================`
    );
  } catch (err: any) {
    console.error(`[Mailer] Failed to log email to file: ${err.message}`);
  }
};

export const sendConfirmationEmail = async (email: string, fullName: string, inquiryType: string) => {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || "no-reply@sustainx.com";

  const emailSubject = "Thank You for Contacting GlobalPact SustainX";
  
  const emailHtml = `
    <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: auto; padding: 32px; border: 1px solid #D0E8DE; border-radius: 16px; background-color: #ffffff; color: #0B1612;">
      <h2 style="color: #0F8B6D; font-family: 'Sora', sans-serif;">GlobalPact SustainX</h2>
      <hr style="border: 0; border-top: 1px solid #E6F3EE; margin: 20px 0;" />
      <p style="font-size: 15px; line-height: 1.6; color: #1C2E27; margin-bottom: 12px;">
        Thank you for reaching out to GlobalPact SustainX.
      </p>
      <p style="font-size: 15px; line-height: 1.6; color: #1C2E27; margin-bottom: 12px;">
        Your inquiry has been successfully received and forwarded to our team.
      </p>
      <p style="font-size: 15px; line-height: 1.6; color: #1C2E27; margin-bottom: 12px;">
        We appreciate your interest and will review your request shortly.
      </p>
      <p style="font-size: 15px; line-height: 1.6; color: #1C2E27; margin-bottom: 24px;">
        Our team will contact you if further information is required.
      </p>
      <p style="font-size: 15px; line-height: 1.6; color: #1C2E27; font-weight: bold; margin-top: 20px;">
        Regards,<br />
        GlobalPact SustainX
      </p>
    </div>
  `;

  if (host && port && user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port: parseInt(port, 10),
        auth: { user, pass },
      });
      await transporter.sendMail({
        from,
        to: email,
        subject: emailSubject,
        html: emailHtml,
      });
      console.log(`[Mailer] Confirmation email sent successfully to ${email}`);
    } catch (err: any) {
      console.error(`[Mailer] Failed to send confirmation email via SMTP to ${email}: ${err.message}`);
      logEmailToFile(email, emailSubject, emailHtml);
      throw new Error(`SMTP sending failed: ${err.message}`);
    }
  } else {
    console.warn(`[Mailer] SMTP configuration is missing. Mock confirmation email logged for ${email}.`);
    logEmailToFile(email, emailSubject, emailHtml);
    throw new Error("SMTP configuration is missing. Environment variables SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS must be set.");
  }
};

interface AdminNotificationParams {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export const sendAdminNotificationEmail = async (params: AdminNotificationParams) => {
  const { fullName, organization, email, phone, inquiryType, message } = params;

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || "no-reply@sustainx.com";
  const to = process.env.ADMIN_EMAIL || "er.irfan0987@gmail.com";

  const emailSubject = "New Partner With Us Inquiry Received";
  
  const emailHtml = `
    <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: auto; padding: 32px; border: 1px solid #D0E8DE; border-radius: 16px; background-color: #ffffff; color: #0B1612;">
      <h2 style="color: #0F8B6D; font-family: 'Sora', sans-serif;">New Partner With Us Inquiry Received</h2>
      <hr style="border: 0; border-top: 1px solid #E6F3EE; margin: 20px 0;" />
      <p style="font-size: 15px; color: #1C2E27; line-height: 1.8;">
        <strong>Full Name:</strong> ${fullName}<br />
        <strong>Organization:</strong> ${organization || "N/A"}<br />
        <strong>Email Address:</strong> ${email}<br />
        <strong>Mobile Number:</strong> ${phone}<br />
        <strong>Inquiry Type:</strong> ${inquiryType}<br />
        <strong>Submission Date:</strong> ${new Date().toLocaleString()}<br />
      </p>
      <div style="background-color: #F8FAF9; border: 1px solid #D0E8DE; padding: 16px; border-radius: 8px; margin-top: 20px;">
        <div style="font-weight: bold; font-size: 12px; color: #6B8C80; text-transform: uppercase; margin-bottom: 8px;">Message:</div>
        <div style="font-size: 14px; line-height: 1.6; color: #1C2E27; white-space: pre-wrap;">${message}</div>
      </div>
    </div>
  `;

  if (host && port && user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port: parseInt(port, 10),
        auth: { user, pass },
      });
      await transporter.sendMail({
        from,
        to,
        subject: emailSubject,
        html: emailHtml,
      });
      console.log(`[Mailer] Admin notification email sent successfully to ${to}`);
    } catch (err: any) {
      console.error(`[Mailer] Failed to send admin email via SMTP to ${to}: ${err.message}`);
      logEmailToFile(to, emailSubject, emailHtml);
      throw new Error(`SMTP sending failed: ${err.message}`);
    }
  } else {
    console.warn(`[Mailer] SMTP configuration is missing. Mock admin email logged for ${to}.`);
    logEmailToFile(to, emailSubject, emailHtml);
    throw new Error("SMTP configuration is missing. Environment variables SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS must be set.");
  }
};

export const sendContactConfirmationEmail = async (email: string, fullName: string, subjectLine: string) => {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || "no-reply@sustainx.com";

  const emailSubject = "Thank You for Contacting SustainX";
  
  const emailHtml = `
    <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: auto; padding: 32px; border: 1px solid #D0E8DE; border-radius: 16px; background-color: #ffffff; color: #0B1612;">
      <h2 style="color: #1D9E75; font-family: 'Sora', sans-serif;">GlobalPact SustainX</h2>
      <hr style="border: 0; border-top: 1px solid #E6F3EE; margin: 20px 0;" />
      <p style="font-size: 15px; line-height: 1.6; color: #1C2E27; margin-bottom: 12px;">
        Dear ${fullName},
      </p>
      <p style="font-size: 15px; line-height: 1.6; color: #1C2E27; margin-bottom: 12px;">
        Thank you for contacting GlobalPact SustainX. We have received your message regarding: <strong>"${subjectLine}"</strong>.
      </p>
      <p style="font-size: 15px; line-height: 1.6; color: #1C2E27; margin-bottom: 12px;">
        Our team of sustainability experts and strategic advisors will review your submission and get back to you shortly.
      </p>
      <p style="font-size: 15px; line-height: 1.6; color: #1C2E27; margin-bottom: 24px;">
        If you have any urgent inquiries, please reply to this email or call our desk.
      </p>
      <p style="font-size: 15px; line-height: 1.6; color: #1C2E27; font-weight: bold; margin-top: 20px;">
        Regards,<br />
        GlobalPact SustainX Support Team
      </p>
    </div>
  `;

  if (host && port && user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port: parseInt(port, 10),
        auth: { user, pass },
      });
      await transporter.sendMail({
        from,
        to: email,
        subject: emailSubject,
        html: emailHtml,
      });
      console.log(`[Mailer] Contact confirmation email sent successfully to ${email}`);
    } catch (err: any) {
      console.error(`[Mailer] Failed to send contact confirmation email via SMTP to ${email}: ${err.message}`);
      logEmailToFile(email, emailSubject, emailHtml);
      throw new Error(`SMTP sending failed: ${err.message}`);
    }
  } else {
    console.warn(`[Mailer] SMTP configuration is missing. Mock contact confirmation email logged for ${email}.`);
    logEmailToFile(email, emailSubject, emailHtml);
    throw new Error("SMTP configuration is missing. Environment variables SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS must be set.");
  }
};

interface ContactAdminNotificationParams {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactAdminNotificationEmail = async (params: ContactAdminNotificationParams) => {
  const { fullName, email, subject, message } = params;

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || "no-reply@sustainx.com";
  const to = process.env.ADMIN_EMAIL || "er.irfan0987@gmail.com";

  const emailSubject = `New Contact Us Message: ${subject}`;
  
  const emailHtml = `
    <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: auto; padding: 32px; border: 1px solid #D0E8DE; border-radius: 16px; background-color: #ffffff; color: #0B1612;">
      <h2 style="color: #1D9E75; font-family: 'Sora', sans-serif;">New Contact Inquiry Received</h2>
      <hr style="border: 0; border-top: 1px solid #E6F3EE; margin: 20px 0;" />
      <p style="font-size: 15px; color: #1C2E27; line-height: 1.8;">
        <strong>Sender Name:</strong> ${fullName}<br />
        <strong>Email Address:</strong> ${email}<br />
        <strong>Subject:</strong> ${subject}<br />
        <strong>Submission Date:</strong> ${new Date().toLocaleString()}<br />
      </p>
      <div style="background-color: #F8FAF9; border: 1px solid #D0E8DE; padding: 16px; border-radius: 8px; margin-top: 20px;">
        <div style="font-weight: bold; font-size: 12px; color: #6B8C80; text-transform: uppercase; margin-bottom: 8px;">Message:</div>
        <div style="font-size: 14px; line-height: 1.6; color: #1C2E27; white-space: pre-wrap;">${message}</div>
      </div>
    </div>
  `;

  if (host && port && user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port: parseInt(port, 10),
        auth: { user, pass },
      });
      await transporter.sendMail({
        from,
        to,
        subject: emailSubject,
        html: emailHtml,
      });
      console.log(`[Mailer] Contact admin notification email sent successfully to ${to}`);
    } catch (err: any) {
      console.error(`[Mailer] Failed to send contact admin email via SMTP to ${to}: ${err.message}`);
      logEmailToFile(to, emailSubject, emailHtml);
      throw new Error(`SMTP sending failed: ${err.message}`);
    }
  } else {
    console.warn(`[Mailer] SMTP configuration is missing. Mock contact admin email logged for ${to}.`);
    logEmailToFile(to, emailSubject, emailHtml);
    throw new Error("SMTP configuration is missing. Environment variables SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS must be set.");
  }
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || "no-reply@sustainx.com";

  const emailSubject = "Reset Your SustainX Password";
  const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
  const resetLink = `${frontendUrl}/reset-password?token=${token}&email=${encodeURIComponent(email)}`;

  const emailHtml = `
    <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: auto; padding: 32px; border: 1px solid #D0E8DE; border-radius: 16px; background-color: #ffffff; color: #0B1612;">
      <h2 style="color: #1D9E75; font-family: 'Sora', sans-serif;">GlobalPact SustainX</h2>
      <hr style="border: 0; border-top: 1px solid #E6F3EE; margin: 20px 0;" />
      <p style="font-size: 15px; line-height: 1.6; color: #1C2E27; margin-bottom: 12px;">
        Hello,
      </p>
      <p style="font-size: 15px; line-height: 1.6; color: #1C2E27; margin-bottom: 20px;">
        We received a request to reset your password for your SustainX account. Click the button below to set a new password:
      </p>
      <div style="text-align: center; margin: 24px 0;">
        <a href="${resetLink}" style="background-color: #1D9E75; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; font-size: 14px;">Reset Password</a>
      </div>
      <p style="font-size: 13px; line-height: 1.6; color: #6B8C80; margin-bottom: 12px;">
        If the button above does not work, copy and paste this link in your browser:
      </p>
      <p style="font-size: 13px; line-height: 1.6; color: #1D9E75; word-break: break-all; margin-bottom: 24px;">
        <a href="${resetLink}" style="color: #1D9E75;">${resetLink}</a>
      </p>
      <p style="font-size: 13px; line-height: 1.6; color: #6B8C80; margin-bottom: 24px;">
        This password reset link will expire in 1 hour. If you did not make this request, you can safely ignore this email.
      </p>
      <p style="font-size: 15px; line-height: 1.6; color: #1C2E27; font-weight: bold; margin-top: 20px;">
        Regards,<br />
        GlobalPact SustainX Support Team
      </p>
    </div>
  `;

  if (host && port && user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port: parseInt(port, 10),
        auth: { user, pass },
      });
      await transporter.sendMail({
        from,
        to: email,
        subject: emailSubject,
        html: emailHtml,
      });
      console.log(`[Mailer] Password reset email sent successfully to ${email}`);
    } catch (err: any) {
      console.error(`[Mailer] Failed to send password reset email via SMTP to ${email}: ${err.message}`);
      logEmailToFile(email, emailSubject, emailHtml);
      throw new Error(`SMTP sending failed: ${err.message}`);
    }
  } else {
    console.warn(`[Mailer] SMTP configuration is missing. Mock password reset email logged for ${email}.`);
    logEmailToFile(email, emailSubject, emailHtml);
  }
};

