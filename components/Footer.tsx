"use client";

import Link from "next/link";
import EmailContactActions from "@/components/EmailContactActions";
import { INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/siteConfig";

export default function Footer() {
  const englishBase = "/en";
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerLeft">
          <div className="footerBrand">Sara Mahmodi</div>
          <div className="small">
            Product-focused designer, founder, and strategic builder.
          </div>
          <div className="small footerDirectLabel">Contact</div>
          <EmailContactActions lang="en" className="footerEmailActions" />
        </div>

        <div className="footerLinks">
          <a className="footerLink" href="https://donepage.co" target="_blank" rel="noreferrer">
            Donepage
          </a>
          <Link className="footerLink" href={`${englishBase}/lumi`}>
            Lumi
          </Link>
          <Link className="footerLink" href="/contact">
            Contact
          </Link>
          <Link className="footerLink" href={`${englishBase}/work-with-me`}>
            Work With Me
          </Link>
          <div className="footerSocial">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span>·</span>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
