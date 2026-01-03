"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function StickyCTA() {
  const { lang } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // بعد از کمی اسکرول ظاهر شود
      setShow(window.scrollY > 520);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const primary = lang === "fa" ? "رزرو با واتساپ" : "Book via WhatsApp";
  const secondary = lang === "fa" ? "دیدن قیمت‌ها" : "View Pricing";

  const wa = () => {
    const url = `https://wa.me/358417539326?text=${encodeURIComponent(
      lang === "fa"
        ? "سلام سارا، برای رزرو کوچینگ پیام می‌دم."
        : "Hi Sara, I’d like to book a coaching session."
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-4 left-0 right-0 z-[60] px-4"
        >
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-lg backdrop-blur">
            <div className="text-sm text-slate-700">
              {lang === "fa"
                ? "آماده‌ای قدم اول رو برداری؟"
                : "Ready to take the first step?"}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#pricing"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                {secondary}
              </a>
              <button
                onClick={wa}
                className="rounded-xl px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
                style={{ background: "var(--brand-primary)" }}
              >
                {primary}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
