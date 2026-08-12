"use server";

import { Resend } from "resend";

export type ContactFormState = {
  ok: boolean;
  message: string;
};

export type ContactFormPayload = {
  email: string;
  about: string;
  description: string;
};

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const payload: ContactFormPayload = {
    email: String(formData.get("email") ?? "").trim(),
    about: String(formData.get("about") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
  };

  if (!payload.email || !payload.about || !payload.description) {
    return {
      ok: false,
      message: "Please fill in all fields.",
    };
  }

  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL || from;

  if (!from || !to) {
    return {
      ok: false,
      message: "Email is not configured. Please try again later.",
    };
  }

  try {
    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject: `Contact form: ${payload.about}`,
      text: [
        `From: ${payload.email}`,
        `About: ${payload.about}`,
        "",
        payload.description,
      ].join("\n"),
      html: `
        <h2>New contact inquiry</h2>
        <p><strong>From:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>About:</strong> ${escapeHtml(payload.about)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.description).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return {
        ok: false,
        message: "Could not send your message. Please try again.",
      };
    }

    return {
      ok: true,
      message: "Thanks — your message has been received.",
    };
  } catch (error) {
    console.error("[contact] send failed", error);
    return {
      ok: false,
      message: "Could not send your message. Please try again.",
    };
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
