"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { INSTAGRAM_URL, LINKEDIN_URL, WHATSAPP_NUMBER } from "@/lib/siteConfig";

export default function Footer() {
  const pathname = usePathname() || "";
  const isFa = pathname.startsWith("/fa");
  const base = isFa ? "/fa" : "/en";
  const emailUser = "contact";
  const emailDomain = "saramahmodi.com";
  const emailAddress = `${emailUser}@${emailDomain}`;
  const message = isFa
    ? "سلام، برای دریافت اطلاعات درباره برنامه بازآفرینی استراتژیک پیام می‌دهم."
    : "Hello, I am interested in learning more about your Strategic Reinvention program.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerLeft">
          <div className="footerBrand">Sara Mahmodi</div>
          <div className="small">
            Strategic Reinvention Architect. Strategy-led, outcome-focused, confidential.
          </div>
          <div className="footerContact">
            <a href={`mailto:${emailAddress}`}>contact [at] saramahmodi.com</a>
          </div>
        </div>

        <div className="footerLinks">
          <Link className="footerLink" href={`${base}/apply`}>
            {isFa ? "ایمیل" : "Email"}
          </Link>
          <Link className="footerLink" href={`${base}/resources`}>
            {isFa ? "منابع" : "Resources"}
          </Link>
          <Link className="footerLink" href={`${base}/privacy`}>
            {isFa ? "حریم خصوصی" : "Privacy"}
          </Link>
          <a className="footerLink" href="https://donepage.co" target="_blank" rel="noreferrer">
            Donepage
          </a>
          <div className="footerSocial">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span>·</span>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <span>·</span>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
