export const SITE_PHONE_DISPLAY = "+1 305-320-9637";
export const SITE_PHONE_HREF = "tel:+1-305-320-9637";
export const SITE_CONTACT_EMAIL = "digitalflowmediallc@gmail.com";

/** Use a Zoom scheduler URL when one is available; phone is the fallback. */
export const SITE_MEETING_HREF =
  process.env.NEXT_PUBLIC_MEETING_URL || SITE_PHONE_HREF;

export const PRODUCT_LINKS = {
  invoiceCreator: "https://dev.custominvoicegenerator.com/",
  menuPilot: "https://menupilot-omega.vercel.app/",
} as const;
