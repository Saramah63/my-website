"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type StatItem = {
  value: number;
  suffix?: string;
  labelFa: string;
  labelEn: string;
};

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.25, ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function CountUp({
  target,
  duration = 900,
  suffix = "",
  startOn,
}: {
  target: number;
  duration?: number;
  suffix?: string;
  startOn: boolean;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!startOn) return;
    let raf = 0;
    const start = performance.now();
    const from = 0;
    const to = target;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const next = Math.round(from + (to - from) * eased);
      setVal(next);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [startOn, target, duration]);

  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const pathname = usePathname();
  const isFa = pathname.startsWith("/fa");
  const { ref, inView } = useInView<HTMLDivElement>();

  const items: StatItem[] = useMemo(
    () => [
      {
        value: 24,
        suffix: "h",
        labelFa: "زمان پاسخ‌دهی",
        labelEn: "Response time",
      },
      {
        value: 60,
        suffix: "min",
        labelFa: "مدت هر جلسه",
        labelEn: "Session length",
      },
      {
        value: 100,
        suffix: "%",
        labelFa: "محرمانگی",
        labelEn: "Confidentiality",
      },
      {
        value: 4.9,
        suffix: "/5",
        labelFa: "رضایت مراجعان",
        labelEn: "Client rating",
      },
    ],
    []
  );

  return (
    <section
      id="stats"
      style={{
        padding: "56px 20px",
        background: "#ffffff",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          borderRadius: 16,
          padding: "28px 18px",
          background: "linear-gradient(135deg, #f5f9fc 0%, #ffffff 65%)",
          border: "1px solid rgba(15,76,129,0.12)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            alignItems: "baseline",
            marginBottom: 14,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 22,
              color: "#0f4c81",
              letterSpacing: 0.2,
            }}
          >
            {isFa ? "چرا این کوچینگ جواب می‌دهد" : "Why this coaching works"}
          </h2>
          <p
            style={{
              margin: 0,
              color: "#334155",
              fontSize: 14,
              opacity: 0.9,
              direction: isFa ? "rtl" : "ltr",
              textAlign: isFa ? "right" : "left",
            }}
          >
            {isFa
              ? "سیگنال‌های اعتماد و کیفیت — واضح، کوتاه، قابل سنجش"
              : "Trust & quality signals — clear, short, measurable"}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 14,
          }}
        >
          {items.map((s, idx) => {
            const isDecimal = String(s.value).includes(".");
            const target = isDecimal ? Math.round(s.value * 10) : s.value;
            const suffix = isDecimal ? "" : s.suffix ?? "";

            return (
              <div
                key={idx}
                style={{
                  borderRadius: 14,
                  padding: "18px 16px",
                  background: "#ffffff",
                  border: "1px solid rgba(2, 6, 23, 0.08)",
                  boxShadow: "0 8px 24px rgba(2,6,23,0.05)",
                  transform: inView ? "translateY(0)" : "translateY(8px)",
                  opacity: inView ? 1 : 0,
                  transition: "all 600ms ease",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: "#0f4c81",
                    lineHeight: 1.1,
                  }}
                >
                  {isDecimal ? (
                    <>
                      <CountUp
                        target={target}
                        duration={900}
                        startOn={inView}
                      />
                      {String(s.value).includes(".") ? (
                        <>
                          <span style={{ fontSize: 26 }}>
                            {String(s.value).endsWith(".9") ? "" : ""}
                          </span>
                          <span style={{ fontSize: 26 }}>
                            {(inView ? (target / 10).toFixed(1) : "0.0")
                              .replace(".0", "")}
                            {s.suffix}
                          </span>
                        </>
                      ) : null}
                    </>
                  ) : (
                    <CountUp
                      target={target}
                      duration={900}
                      suffix={suffix}
                      startOn={inView}
                    />
                  )}
                </div>

                <div
                  style={{
                    marginTop: 8,
                    color: "#0f172a",
                    fontWeight: 600,
                    fontSize: 14,
                    direction: isFa ? "rtl" : "ltr",
                    textAlign: isFa ? "right" : "left",
                  }}
                >
                  {isFa ? s.labelFa : s.labelEn}
                </div>
              </div>
            );
          })}
        </div>

        {/* responsive fix */}
        <style>{`
          @media (max-width: 980px) {
            #stats div[style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          }
          @media (max-width: 520px) {
            #stats div[style*="grid-template-columns: repeat(2"] { grid-template-columns: repeat(1, minmax(0, 1fr)) !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
