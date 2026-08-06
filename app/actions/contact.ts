"use server";

export type ContactFormState = {
  ok: boolean;
  message: string;
};

export type ContactFormPayload = {
  email: string;
  about: string;
  description: string;
};

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

  // TODO: Wire up email provider (Resend, SendGrid, etc.)
  console.log("[contact] placeholder send", payload);

  return {
    ok: true,
    message: "Thanks — your message has been received.",
  };
}
