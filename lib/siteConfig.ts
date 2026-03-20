export const STRATEGIC_SESSION_PRICE = process.env.NEXT_PUBLIC_STRATEGIC_SESSION_PRICE || "";
export const SESSION_DURATION = process.env.NEXT_PUBLIC_SESSION_DURATION || "";
export const APPLICATION_REVIEW_DAYS = Number(process.env.NEXT_PUBLIC_APPLICATION_REVIEW_DAYS || "") || 0;
export const SCHEDULING_URL =
  process.env.NEXT_PUBLIC_SCHEDULING_URL || "https://calendly.com/saramah63/30min";

export const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/saramahmodi/";
export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/mindshift_for_lifeshift/";
export const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "saramah63@gmail.com";
export const EMAIL_GMAIL_URL =
  process.env.NEXT_PUBLIC_CONTACT_GMAIL_URL ||
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}&su=Website%20Inquiry`;
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "358417539326";
export const WHATSAPP_EN_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_EN_URL ||
  `https://wa.me/${WHATSAPP_NUMBER}?text=Hello,%20I%20would%20like%20to%20get%20in%20touch.`;
export const WHATSAPP_FA_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_FA_URL ||
  `https://wa.me/${WHATSAPP_NUMBER}?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%87%D9%85%DA%A9%D8%A7%D8%B1%DB%8C%20%D8%A8%D8%A7%20%D8%B4%D9%85%D8%A7%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85.`;
export const WHATSAPP_URL = WHATSAPP_FA_URL;

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
