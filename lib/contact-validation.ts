export type ContactPayload = {
  name: string;
  email: string;
  website: string;
  about: string;
  description: string;
};

export function validateContact(formData: FormData):
  | { ok: true; payload: ContactPayload }
  | { ok: false; message: string } {
  const field = (key: string) => String(formData.get(key) ?? "").trim();
  const payload: ContactPayload = {
    name: field("name"), email: field("email"), website: field("website"),
    about: field("about"), description: field("description"),
  };
  if (!payload.name || !payload.email || !payload.about) {
    return { ok: false, message: "Please enter your name, email, and request type." };
  }
  if (payload.name.length > 120 || payload.email.length > 254 ||
      payload.website.length > 2048 || payload.description.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return { ok: false, message: "Please check your email and keep your message under 5,000 characters." };
  }
  if (!["Free website analysis", "Project inquiry"].includes(payload.about)) {
    return { ok: false, message: "Please choose a request type." };
  }
  if (payload.about === "Free website analysis" && !payload.website) {
    return { ok: false, message: "Please enter the website you would like us to review." };
  }
  if (payload.website) {
    try {
      const url = new URL(payload.website);
      if (!["https:", "http:"].includes(url.protocol) || !url.hostname.includes(".") || url.username || url.password) throw new Error();
    } catch {
      return { ok: false, message: "Please enter a valid website URL starting with https:// or http://." };
    }
  }
  if (payload.about === "Project inquiry" && !payload.description) {
    return { ok: false, message: "Please tell us a little about your project." };
  }
  return { ok: true, payload };
}
