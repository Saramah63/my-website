"use client";

import React, { useMemo, useState } from "react";
import { useLanguage } from "../lib/LanguageContext";

type Status = "idle" | "loading" | "ok" | "err";

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      style={{ opacity: filled ? 1 : 0.35 }}
    >
      <path
        fill="currentColor"
        d="M12 17.27l5.18 3.18-1.64-5.81L20 10.9l-5.9-.45L12 5l-2.1 5.45-5.9.45 4.46 3.74-1.64 5.81z"
      />
    </svg>
  );
}

function StarsInput({
  value,
  onChange,
  dir,
}: {
  value: number;
  onChange: (v: number) => void;
  dir: "ltr" | "rtl";
}) {
  const [hover, setHover] = useState<number>(0);
  const effective = hover || value;

  return (
    <div className="starsWrap" dir={dir}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          className="starBtn"
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(n)}
          aria-label={`rate ${n}`}
        >
          <Star filled={effective >= n} />
        </button>
      ))}
    </div>
  );
}

async function safeJson(res: Response) {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return { ok: false, error: `Non-JSON response: ${text.slice(0, 200)}` };
  }
}

export default function FeedbackForm() {
  const { lang } = useLanguage();
  const isFa = lang === "fa";
  const dir = isFa ? "rtl" : "ltr";

  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState<Status>("idle");

  const copy = useMemo(() => {
    return {
      title: isFa ? "فیدبک و نظرات مراجعان" : "Client Feedback",
      subtitle: isFa
        ? "اگر با من جلسه داشته‌ای، خوشحال می‌شوم تجربه‌ات را ثبت کنی. فیدبک‌ها به‌صورت خودکار ذخیره می‌شوند."
        : "If you’ve worked with me, I’d love your feedback. Submissions are saved automatically.",
      formTitle: isFa ? "ثبت فیدبک" : "Leave feedback",
      name: isFa ? "نام" : "Name",
      email: isFa ? "ایمیل (اختیاری)" : "Email (optional)",
      message: isFa ? "پیام شما" : "Your message",
      rating: isFa ? "امتیاز" : "Rating",
      submit: isFa ? "ارسال فیدبک" : "Submit feedback",
      sending: isFa ? "در حال ارسال..." : "Sending...",
      ok: isFa ? "ثبت شد. ممنونم از فیدبک شما." : "Submitted. Thank you for your feedback.",
      err: isFa ? "ارسال ناموفق بود. دوباره تلاش کن." : "Submission failed. Please try again.",
      examplesTitle: isFa ? "نمونه نظرات" : "Featured reviews",
    };
  }, [isFa]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const fd = new FormData(e.currentTarget);

    const payload = {
      type: "feedback",
      lang,
      source: "website",
      fullName: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      rating,
      message: String(fd.get("message") || ""),
    };

    try {
      // مهم: مستقیم به /api/feedback می‌زنیم (نه /api/submit)
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await safeJson(res);

      if (res.ok && data?.ok === true) {
        setStatus("ok");
        (e.currentTarget as HTMLFormElement).reset();
        setRating(5);
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  const featured = isFa
    ? [
        {
          name: "مراجع ۱",
          rating: 5,
          text: "جلسات خیلی شفاف و کاربردی بود. کمکم کرد تصمیم‌هام رو سریع‌تر و با اعتمادبه‌نفس بگیرم.",
        },
        {
          name: "مراجع ۲",
          rating: 5,
          text: "در مدت کوتاه، هم ذهنیتم بهتر شد هم قدم‌های واقعی برداشتم. ساختار جلسات عالی بود.",
        },
      ]
    : [
        {
          name: "Client 1",
          rating: 5,
          text: "Clear, practical sessions. I gained confidence and made decisions faster.",
        },
        {
          name: "Client 2",
          rating: 5,
          text: "In a short time, I shifted my mindset and took real steps forward. Great structure.",
        },
      ];

  return (
    <section id="feedback" className="section" dir={dir}>
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{copy.title}</h2>
          <p className="muted">{copy.subtitle}</p>
        </div>

        <div className="grid2">
          <div className="card">
            <h3 className="h3">{copy.formTitle}</h3>

            <form className="form" onSubmit={onSubmit}>
              <div className="field">
                <label className="label">{copy.name}</label>
                <input className="input" name="name" required />
              </div>

              <div className="field">
                <label className="label">{copy.email}</label>
                <input className="input" name="email" type="email" />
              </div>

              <div className="field">
                <label className="label">{copy.rating}</label>
                <StarsInput value={rating} onChange={setRating} dir={dir} />
                <div className="muted" style={{ fontSize: 12 }}>
                  {isFa ? `${rating} از 5` : `${rating} / 5`}
                </div>
              </div>

              <div className="field">
                <label className="label">{copy.message}</label>
                <textarea className="textarea" name="message" rows={4} required />
              </div>

              <button className="btn btnPrimary" type="submit" disabled={status === "loading"}>
                {status === "loading" ? copy.sending : copy.submit}
              </button>

              {status === "ok" && <p className="note ok">{copy.ok}</p>}
              {status === "err" && <p className="note err">{copy.err}</p>}
            </form>
          </div>

          <div className="card">
            <h3 className="h3">{copy.examplesTitle}</h3>

            <div className="reviews">
              {featured.map((r) => (
                <div className="reviewCard" key={r.name}>
                  <div className="reviewTop">
                    <div className="reviewName">{r.name}</div>
                    <div className="reviewStars" aria-label={`${r.rating} stars`}>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <span key={n} className="starStatic">
                          <Star filled={r.rating >= n} />
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="muted" style={{ whiteSpace: "pre-line" }}>{r.text}</div>
                </div>
              ))}
            </div>

            <div className="divider" />

            <p className="muted" style={{ fontSize: 13 }}>
              {isFa
                ? "اگر دوست داشتی، می‌تونم بهترین فیدبک‌ها را (بدون اطلاعات حساس) در سایت نمایش بدهم."
                : "If you want, I can feature selected feedback on the website (no sensitive info)."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
