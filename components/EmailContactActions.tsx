"use client";

import { useEffect, useState } from "react";
import {
  EMAIL_ADDRESS,
  EMAIL_GMAIL_URL,
  WHATSAPP_EN_URL,
  WHATSAPP_FA_URL,
} from "@/lib/siteConfig";

type Props = {
  lang?: "en" | "fa";
  prefix?: string;
  className?: string;
};

export default function EmailContactActions({
  lang = "en",
  prefix,
  className = "",
}: Props) {
  const [copied, setCopied] = useState(false);
  const whatsappUrl = lang === "fa" ? WHATSAPP_FA_URL : WHATSAPP_EN_URL;

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
    } catch (error) {
      console.error("Copy email failed", error);
    }
  }

  return (
    <div className={`emailContact ${className}`.trim()}>
      {prefix ? <p className="emailContactPrefix">{prefix}</p> : null}
      <div className="emailContactRow">
        <span className="emailContactAddress">{EMAIL_ADDRESS}</span>
        <div className="emailContactActions">
          <a
            className="emailContactLink"
            href={EMAIL_GMAIL_URL}
            target="_blank"
            rel="noreferrer"
          >
            {lang === "fa" ? "ارسال ایمیل از طریق Gmail" : "Open in Gmail"}
          </a>
          <a
            className="emailContactLink"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            {lang === "fa" ? "پیام در واتساپ" : "Message on WhatsApp"}
          </a>
          <button
            type="button"
            className="emailContactButton"
            onClick={handleCopy}
          >
            {lang === "fa" ? "کپی آدرس ایمیل" : "Copy email"}
          </button>
        </div>
      </div>
      {copied ? (
        <p className="emailContactCopied">
          {lang === "fa" ? "ایمیل کپی شد" : "Email copied"}
        </p>
      ) : null}
    </div>
  );
}
