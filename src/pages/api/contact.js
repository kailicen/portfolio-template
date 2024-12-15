import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const generateEmailContent = (data) => {
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3>${CONTACT_MESSAGE_FIELDS[key]}:</h3><p>${val}</p>`);
  }, "");

  return { html: htmlData };
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      // Generate email content
      const { html } = generateEmailContent({ name, email, subject, message });

      // Send email using Resend
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: process.env.RESEND_TO_EMAIL, // The email where messages are sent
        subject: `Contact Form: ${subject}`,
        html,
      });

      return res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error.response?.data || error.message);
      return res.status(500).json({ message: "Failed to send email", error: error.message });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
};

export default handler;
