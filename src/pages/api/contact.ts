import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

type ContactRequest = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;

  // Anti-spam fields
  company?: string;
  formStartedAt?: string;
};

type ApiResponse = {
  success?: boolean;
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Basic in-memory rate limit.
// This is okay as a starter, but Redis / Upstash is better for production.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

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

function getClientIp(req: NextApiRequest): string {
  const forwardedFor = req.headers["x-forwarded-for"];

  if (typeof forwardedFor === "string" && forwardedFor.length > 0) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = req.headers["x-real-ip"];

  if (typeof realIp === "string" && realIp.length > 0) {
    return realIp.trim();
  }

  return req.socket.remoteAddress || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 3;

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, {
      count: 1,
      resetAt: now + windowMs,
    });

    return false;
  }

  record.count += 1;

  return record.count > maxRequests;
}

function looksLikeRandomBotText(value: string): boolean {
  const trimmed = value.trim();

  // Catches values like:
  // uajMOBUtdEpTCofwCfSSO
  // GkxCCLLRGkvcdWAEZaz
  // TVXrjScPGDOcyOHqSyHbLz
  const randomAlphaNumericPattern = /^[a-zA-Z0-9]{15,}$/;

  if (randomAlphaNumericPattern.test(trimmed)) {
    return true;
  }

  // Long text with no spaces is suspicious for a subject.
  if (trimmed.length >= 20 && !trimmed.includes(" ")) {
    return true;
  }

  return false;
}

function containsSpamContent(values: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): boolean {
  const combinedText = [
    values.name,
    values.email,
    values.subject,
    values.message,
  ]
    .join(" ")
    .toLowerCase();

  const urlCount = (combinedText.match(/https?:\/\//g) || []).length;

  if (urlCount > 1) {
    return true;
  }

  const blockedTerms = [
    "seo",
    "backlink",
    "backlinks",
    "crypto",
    "casino",
    "loan",
    "telegram",
    "whatsapp",
    "bitcoin",
    "viagra",
    "porn",
    "escort",
  ];

  return blockedTerms.some((term) => combinedText.includes(term));
}

function fakeSuccessResponse(res: NextApiResponse<ApiResponse>) {
  // For obvious bots, return success so they do not learn how to bypass the filter.
  return res.status(200).json({
    success: true,
    message: "Thanks, your message has been sent.",
  });
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

  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return res.status(429).json({
      message: "Too many messages. Please try again later.",
    });
  }

  const body = req.body as ContactRequest;

  const name = normalizeText(body.name);
  const email = normalizeText(body.email).toLowerCase();
  const subject = normalizeText(body.subject);
  const message = normalizeText(body.message);

  const company = normalizeText(body.company);
  const formStartedAt = Number(body.formStartedAt || 0);

  // Honeypot check.
  // Real users should never fill this hidden field.
  if (company) {
    return fakeSuccessResponse(res);
  }

  // Reject forms submitted suspiciously fast.
  // Most real people cannot complete a form in under 3 seconds.
  const submittedTooFast = !formStartedAt || Date.now() - formStartedAt < 3000;

  if (submittedTooFast) {
    return res.status(400).json({
      message: "Please wait a moment before submitting the form.",
    });
  }

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

  if (subject.length < 3 || subject.length > 150) {
    return res.status(400).json({
      message: "Subject must contain between 3 and 150 characters.",
    });
  }

  if (message.length < 10 || message.length > 5000) {
    return res.status(400).json({
      message: "Message must contain between 10 and 5,000 characters.",
    });
  }

  if (
    looksLikeRandomBotText(name) ||
    looksLikeRandomBotText(subject) ||
    looksLikeRandomBotText(message)
  ) {
    console.log("Blocked random bot text:", {
      ip,
      name,
      subject,
      message,
    });

    return fakeSuccessResponse(res);
  }

  if (
    containsSpamContent({
      name,
      email,
      subject,
      message,
    })
  ) {
    return fakeSuccessResponse(res);
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

  const resend = new Resend(apiKey);

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
