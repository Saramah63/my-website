"use client";

import { useLanguage } from "../lib/LanguageContext";
import { FadeUp, Stagger, Item } from "./motion/Motion";

export default function WhatIsCoaching() {
  const { t } = useLanguage();
  const points: string[] = t.coaching.points;

  return (
    <section id="coaching" className="section section-muted">
      <div className="container">
        <FadeUp>
          <h2>{t.coaching.title}</h2>
          <p style={{ marginTop: 10 }}>{t.coaching.text}</p>
        </FadeUp>

        <div style={{ marginTop: 22 }}>
          <Stagger>
            <div className="grid-3">
              {t.coaching.points.map((p: string) => (
                <Item key={p}>
                  <div className="card">
                    <div className="badge">●</div>
                    <div style={{ fontWeight: 900 }}>{p}</div>
                  </div>
                </Item>
              ))}
            </div>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
