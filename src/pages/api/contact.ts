import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

type ContactRequest = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

type ApiResponse = {
  success?: boolean;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({
      message: "Method not allowed.",
    });
  }

  const body = req.body as ContactRequest;

  const name = normalizeText(body.name);
  const email = normalizeText(body.email).toLowerCase();
  const subject = normalizeText(body.subject);
  const message = normalizeText(body.message);

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      message: "Please complete all required fields.",
    });
  }

  if (!emailPattern.test(email)) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
    });
  }

  if (name.length > 100) {
    return res.status(400).json({
      message: "Name must be 100 characters or fewer.",
    });
  }

  if (subject.length > 150) {
    return res.status(400).json({
      message: "Subject must be 150 characters or fewer.",
    });
  }

  if (message.length < 10 || message.length > 5000) {
    return res.status(400).json({
      message: "Message must contain between 10 and 5,000 characters.",
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Missing Resend environment variables.");

    return res.status(500).json({
      message: "The contact form is not configured correctly.",
    });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Website contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
          <h2 style="margin-bottom: 24px;">New website enquiry</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>

          <div style="margin-top: 24px;">
            <strong>Message:</strong>
            <div style="margin-top: 8px; padding: 16px; background: #f3f4f6; border-radius: 8px;">
              ${safeMessage}
            </div>
          </div>
        </div>
      `,
      text: [
        "New website enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(502).json({
        message: "Your message could not be sent. Please try again shortly.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Thanks, your message has been sent.",
    });
  } catch (error) {
    console.error("Unexpected contact-form error:", error);

    return res.status(500).json({
      message: "Something went wrong. Please try again shortly.",
    });
  }
}
