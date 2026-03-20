"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  EMAIL_ADDRESS,
  EMAIL_GMAIL_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  WHATSAPP_EN_URL,
  WHATSAPP_FA_URL,
} from "@/lib/siteConfig";

export default function Footer() {
  const pathname = usePathname() || "";
  const isFa = pathname.startsWith("/fa");

  const copy = isFa
    ? {
        brandText:
          "طراح محصول، بنیان‌گذار و معمار سیستم‌هایی که محصولات دیجیتال انسان‌محور می‌سازد.",
        navigate: "دسترسی سریع",
        connect: "ارتباط",
        home: "/fa",
        homeLabel: "خانه",
        work: "/work",
        workLabel: "نمونه‌کارها",
        donepageLabel: "Donepage",
        coachingLabel: "همکاری با من",
        contactLabel: "تماس",
        emailLabel: "ایمیل",
        whatsappLabel: "واتساپ",
        baseLine: "مستقر در فنلاند · همکاری بین‌المللی",
        subLine: "ساخته‌شده با وضوح، ساختار و دقت",
        whatsapp: WHATSAPP_FA_URL,
      }
    : {
        brandText:
          "Product-focused designer, founder, and systems thinker building human-centered digital products.",
        navigate: "Navigate",
        connect: "Connect",
        home: "/",
        homeLabel: "Home",
        work: "/work",
        workLabel: "Work",
        donepageLabel: "Donepage",
        coachingLabel: "Work With Me",
        contactLabel: "Contact",
        emailLabel: "Email",
        whatsappLabel: "WhatsApp",
        baseLine: "Based in Finland · Working internationally",
        subLine: "Built with clarity, structure, and intention.",
        whatsapp: WHATSAPP_EN_URL,
      };

  return (
    <footer className="footer" data-lang={isFa ? "fa" : "en"}>
      <div className="container footerInner">
        <div className="footerColumn footerColumnBrand">
          <p className="footerEyebrow">{isFa ? "سارا محمودی" : "Sara Mahmodi"}</p>
          <div className="footerBrand">Sara Mahmodi</div>
          <p className="footerText">{copy.brandText}</p>
        </div>

        <div className="footerColumn">
          <h2 className="footerLabel">{copy.navigate}</h2>
          <div className="footerStack">
            <Link className="footerLineLink" href={copy.home}>
              {copy.homeLabel}
            </Link>
            <Link className="footerLineLink" href={copy.work}>
              {copy.workLabel}
            </Link>
            <Link className="footerLineLink" href="/donepage">
              {copy.donepageLabel}
            </Link>
            <Link className="footerLineLink" href="/work-with-me">
              {copy.coachingLabel}
            </Link>
            <Link className="footerLineLink" href="/contact">
              {copy.contactLabel}
            </Link>
          </div>
        </div>

        <div className="footerColumn">
          <h2 className="footerLabel">{copy.connect}</h2>
          <div className="footerStack">
            <a className="footerLineLink" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="footerLineLink" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a className="footerLineLink" href={EMAIL_GMAIL_URL} target="_blank" rel="noopener noreferrer">
              {copy.emailLabel}
            </a>
            <a className="footerLineLink" href={copy.whatsapp} target="_blank" rel="noopener noreferrer">
              {copy.whatsappLabel}
            </a>
            <p className="footerEmail">{EMAIL_ADDRESS}</p>
          </div>
        </div>
      </div>

      <div className="container footerBottom">
        <p className="footerMeta">{copy.baseLine}</p>
        <p className="footerSubMeta">{copy.subLine}</p>
      </div>
    </footer>
  );
}
