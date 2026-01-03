"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

const IG = "https://www.instagram.com/mindshift_for_lifeshift/";
const LI = "https://www.linkedin.com/in/saramahmodi/";
const WA = "https://wa.me/358417539326";
const CALENDLY = "https://calendly.com/saramah63/30min";

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A3.8 3.8 0 1 0 12 19.8 3.8 3.8 0 0 0 12 8.2zm0 6.2A2.4 2.4 0 1 1 14.4 12 2.4 2.4 0 0 1 12 14.4zM18 6.3a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.94 6.5A2.44 2.44 0 1 1 7 1.62a2.44 2.44 0 0 1-.06 4.88zM2.5 22h4.9V8.5H2.5V22zM9.2 8.5H14v1.84h.07A5.26 5.26 0 0 1 18.8 8c5.1 0 6.05 3.35 6.05 7.7V22H20V16.6c0-1.3 0-3-1.83-3s-2.11 1.43-2.11 2.9V22H9.2V8.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 12.1A8 8 0 0 1 8.6 19.5L4 20.9l1.5-4.4A8 8 0 1 1 20 12.1zm-4.3 4.2c-.2.5-1.1 1-1.6 1-.4.1-.9.1-1.5 0-1.6-.5-3.7-2-5.2-4.3-.6-.9-1-1.8-.9-2.7.1-.5.5-1.1 1-1.3.2-.1.4-.1.6 0 .1.1.3.3.4.5l.7 1.5c.1.2.1.4 0 .6l-.3.5c-.1.2-.1.4 0 .5.3.6 1.4 1.8 2.2 2.1.1.1.3.1.5 0l.6-.3c.2-.1.4-.1.6 0l1.4.7c.2.1.4.2.5.4.1.2.1.4 0 .8z"
        fill="currentColor"
      />
    </svg>
  );
}

function scrollToIdOrOpenCalendly(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  // اگر بخش رزرو وجود نداشت، مستقیم Calendly باز شود
  window.open(CALENDLY, "_blank", "noopener,noreferrer");
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isFa = pathname.startsWith("/fa");

  const t = {
    brand: "MindShift for LifeShift",
    about: isFa ? "درباره" : "About",
    how: isFa ? "چطور کار می‌کند" : "How it works",
    pricing: isFa ? "تعرفه‌ها" : "Pricing",
    sessions: isFa ? "جلسات" : "Sessions",
    testimonials: isFa ? "نظرات" : "Testimonials",
    agreement: isFa ? "قرارداد" : "Agreement",
    book: isFa ? "رزرو جلسه رایگان" : "Book Free Session",
    langBtn: isFa ? "English" : "فارسی",
  };

  const switchLang = () => router.push(isFa ? "/en" : "/fa");

  const navBtnStyle: React.CSSProperties = {
    color: "var(--muted)",
    background: "transparent",
    border: "1px solid transparent",
    fontSize: 14,
    padding: "8px 10px",
    borderRadius: 10,
    cursor: "pointer",
  };

  const NavBtn = ({ id, label }: { id: string; label: string }) => (
    <button
      type="button"
      style={navBtnStyle}
      onClick={() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(29,78,216,.08)";
        e.currentTarget.style.color = "var(--text)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "var(--muted)";
      }}
    >
      {label}
    </button>
  );

  return (
    <header className="header">
      <div className="container headerInner">
        <a href={isFa ? "/fa" : "/en"} className="brand">
          {t.brand}
        </a>

        <nav className="nav">
          <NavBtn id="about" label={t.about} />
          <NavBtn id="how-it-works" label={t.how} />
          <NavBtn id="pricing" label={t.pricing} />
          <NavBtn id="sessions" label={t.sessions} />
          <NavBtn id="testimonials" label={t.testimonials} />
          <NavBtn id="agreement" label={t.agreement} />
        </nav>

        <div className="headerRight">
          <div className="social">
            <a className="iconBtn" href={IG} target="_blank" rel="noreferrer" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a className="iconBtn" href={LI} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedIn />
            </a>
            <a className="iconBtn" href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <IconWhatsApp />
            </a>
          </div>

          <button className="button buttonGhost" onClick={switchLang} type="button">
            {t.langBtn}
          </button>

          {/* Book: اول اسکرول به #booking، اگر نبود باز کردن Calendly */}
          <button
            className="button buttonPrimary"
            type="button"
            onClick={() => scrollToIdOrOpenCalendly("booking")}
          >
            {t.book}
          </button>
        </div>
      </div>
    </header>
  );
}
