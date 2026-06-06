import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

type ApiResponse = {
  message: string;
};

type MailchimpError = {
  title?: string;
  detail?: string;
};

function getFirstName(name: string): string {
  return name.trim().split(/\s+/)[0] || "";
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

  const { name, email } = req.body as {
    name?: string;
    email?: string;
  };

  const normalizedEmail = email?.trim().toLowerCase();
  const normalizedName = name?.trim() ?? "";

  if (!normalizedEmail) {
    return res.status(400).json({
      message: "Please enter your email address.",
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(normalizedEmail)) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
    });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !audienceId || !serverPrefix) {
    console.error("Missing Mailchimp environment variables.");

    return res.status(500).json({
      message: "The mailing list is not configured correctly.",
    });
  }

  /*
   * Mailchimp identifies an existing audience member using the MD5 hash
   * of their lowercase email address.
   */
  const subscriberHash = crypto
    .createHash("md5")
    .update(normalizedEmail)
    .digest("hex");

  const mailchimpUrl =
    `https://${serverPrefix}.api.mailchimp.com/3.0` +
    `/lists/${audienceId}/members/${subscriberHash}`;

  try {
    const mailchimpResponse = await fetch(mailchimpUrl, {
      method: "PUT",
      headers: {
        Authorization: `Basic ${Buffer.from(`solace:${apiKey}`).toString(
          "base64",
        )}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: normalizedEmail,

        // New subscribers receive a confirmation email.
        status_if_new: "pending",

        merge_fields: normalizedName
          ? {
              FNAME: getFirstName(normalizedName),
            }
          : undefined,

        tags: ["web-signup"],
      }),
    });

    const mailchimpResult = (await mailchimpResponse.json()) as MailchimpError;

    if (!mailchimpResponse.ok) {
      console.error("Mailchimp subscription error:", mailchimpResult);

      const errorMessage =
        mailchimpResult.title === "Member In Compliance State"
          ? "This email address cannot currently be resubscribed. Please contact us for assistance."
          : mailchimpResult.detail ||
            "We could not add you to the mailing list.";

      return res.status(mailchimpResponse.status).json({
        message: errorMessage,
      });
    }

    return res.status(200).json({
      message:
        "Thanks for joining. Please check your email to confirm your subscription.",
    });
  } catch (error) {
    console.error("Mailchimp request failed:", error);

    return res.status(500).json({
      message: "Something went wrong. Please try again shortly.",
    });
  }
}
