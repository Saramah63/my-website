"use client";

import { usePathname } from "next/navigation";
import { INSTAGRAM_URL, LINKEDIN_URL, WHATSAPP_NUMBER } from "@/lib/siteConfig";

function IconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="socialBtn"
    >
      {children}
    </a>
  );
}

export default function SocialIcons() {
  const pathname = usePathname() || "";
  const isFa = pathname.startsWith("/fa");
  const message = isFa
    ? "سلام، برای دریافت اطلاعات درباره برنامه بازآفرینی استراتژیک پیام می‌دهم."
    : "Hello, I am interested in learning more about your Strategic Reinvention program.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="socialRow">
      <IconButton href={LINKEDIN_URL} label="LinkedIn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 4h4v16H4V4Z"
            stroke="currentColor"
            strokeWidth="1.9"
          />
          <path
            d="M10 9h4v2c.6-1.2 2-2 4-2 3 0 5 2 5 6v5h-4v-5c0-2-.8-3-2.5-3S14 13 14 15v5h-4V9Z"
            stroke="currentColor"
            strokeWidth="1.9"
          />
          <path
            d="M6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            stroke="currentColor"
            strokeWidth="1.9"
          />
        </svg>
      </IconButton>

      <IconButton href={INSTAGRAM_URL} label="Instagram">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
            stroke="currentColor"
            strokeWidth="1.9"
          />
          <path
            d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
            stroke="currentColor"
            strokeWidth="1.9"
          />
          <path
            d="M17.5 6.5h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </IconButton>
      <IconButton href={whatsappUrl} label="WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 11.5A8.5 8.5 0 0 1 7.2 19L4 20l1-3.1A8.5 8.5 0 1 1 20 11.5Z"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 9.2c.4-1 1-1 1.4-1 .2 0 .4 0 .6.2.2.2.7 1.1.8 1.3.1.2.1.4 0 .6-.2.3-.4.6-.2 1 .3.6 1.2 1.8 2.6 2.5.4.2.7.2 1-.1.2-.2.6-.7.8-.9.2-.2.4-.2.6-.1.2.1 1.3.6 1.5.7.2.1.3.3.3.5 0 .9-.6 1.6-1.2 2-.6.4-1.4.4-2 .2-3.6-1.2-6-4.8-6.4-6.2-.2-.7-.2-1.5.1-2Z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
      </IconButton>
    </div>
  );
}
