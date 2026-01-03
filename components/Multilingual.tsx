"use client";

import { useLanguage } from "../lib/LanguageContext";
import { FadeUp } from "./motion/Motion";

export default function Multilingual() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container">
        <FadeUp>
          <h2>{t.multilingual.title}</h2>
          <p style={{ marginTop: 10 }}>{t.multilingual.text}</p>
        </FadeUp>
      </div>
    </section>
  );
}
