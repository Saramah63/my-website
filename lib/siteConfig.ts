export const STRATEGIC_SESSION_PRICE = process.env.NEXT_PUBLIC_STRATEGIC_SESSION_PRICE || "";
export const SESSION_DURATION = process.env.NEXT_PUBLIC_SESSION_DURATION || "";
export const APPLICATION_REVIEW_DAYS = Number(process.env.NEXT_PUBLIC_APPLICATION_REVIEW_DAYS || "") || 0;
export const SCHEDULING_URL =
  process.env.NEXT_PUBLIC_SCHEDULING_URL || "https://calendly.com/saramah63/30min";

export const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/saramahmodi/";
export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/mindshift_for_lifeshift/";
export const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@saramahmodi.com";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "358417539326";

export const EMAIL_USER = process.env.EMAIL_USER || "";
export const EMAIL_PASS = process.env.EMAIL_PASS || "";
export const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "";
export const SITE_NAME = process.env.SITE_NAME || "SaraMahmodi.com";
export const APP_ENV = process.env.APP_ENV || "development";
export const ENABLE_BOTEH_BG = process.env.NEXT_PUBLIC_ENABLE_BOTEH_BG !== "false";

export function formatPriceOrRequest(value: string) {
  return value ? value : "Request details";
}

export function formatDurationOrRequest(value: string) {
  return value ? value : "Request details";
}

export function reviewWindowText(days: number) {
  if (!days || Number.isNaN(days)) return "2–3";
  return String(days);
}
