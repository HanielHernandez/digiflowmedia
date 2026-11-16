"use server";

import { Resend } from "resend";
import { validateContact, type ContactPayload } from "@/lib/contact-validation";

export type ContactFormState = {
  ok: boolean;
  message: string;
};

export type ContactFormPayload = ContactPayload;

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
  const result = validateContact(formData);
  if (!result.ok) return result;
  const { payload } = result;

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
        `Name: ${payload.name}`,
        `From: ${payload.email}`,
        `Website: ${payload.website || "Not provided"}`,
        `About: ${payload.about}`,
        "",
        payload.description,
      ].join("\n"),
      html: `
        <h2>New contact inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>From:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Website:</strong> ${escapeHtml(payload.website || "Not provided")}</p>
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
