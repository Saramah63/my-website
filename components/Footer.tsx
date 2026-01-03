"use client";

import { usePathname } from "next/navigation";

const IG = "https://www.instagram.com/mindshift_for_lifeshift/";
const LI = "https://www.linkedin.com/in/saramahmodi/";
const WA = "https://wa.me/358417539326";

export default function Footer() {
  const pathname = usePathname() || "/";
  const isFa = pathname === "/fa" || pathname.startsWith("/fa/");

  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerLeft">
          <div className="footerBrand">MindShift for LifeShift</div>
          <div className="muted" style={{ fontSize: 14 }}>
            {isFa
              ? "Based in Finland — Coaching worldwide (Online)"
              : "Based in Finland — Coaching worldwide (Online)"}
          </div>
        </div>

        <div className="footerRight">
          <a className="footerLink" href={IG} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="footerLink" href={LI} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="footerLink" href={WA} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
