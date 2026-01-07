"use client";

import React, { useEffect, useMemo, useState } from "react";
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
  const [hover, setHover] = useState(0);
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

async function safeJson(res: Response): Promise<any | null> {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export default function FeedbackForm() {
  const { lang } = useLanguage();
  const isFa = lang === "fa";
  const dir = isFa ? "rtl" : "ltr";

  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState<Status>("idle");
  const [allowPublish, setAllowPublish] = useState(true);

  const [featuredFromSheet, setFeaturedFromSheet] = useState<
    { name: string; rating: number; text: string }[]
  >([]);

  const copy = useMemo(
    () => ({
      title: isFa ? "فیدبک و نظرات مراجعان" : "Client Feedback",
      subtitle: isFa
        ? "اگر با من جلسه داشته‌ای، خوشحال می‌شوم تجربه‌ات را ثبت کنی."
        : "If you’ve worked with me, I’d love your feedback.",
      formTitle: isFa ? "ثبت فیدبک" : "Leave feedback",
      name: isFa ? "نام" : "Name",
      email: isFa ? "ایمیل (اختیاری)" : "Email (optional)",
      message: isFa ? "پیام شما" : "Your message",
      rating: isFa ? "امتیاز" : "Rating",
      publish: isFa ? "اجازه نمایش این نظر در سایت" : "Allow this review to be featured",
      submit: isFa ? "ارسال فیدبک" : "Submit feedback",
      sending: isFa ? "در حال ارسال..." : "Sending...",
      ok: isFa ? "ممنون از فیدبک شما 🌱" : "Thank you for your feedback 🌱",
      err: isFa
        ? "ارسال ناموفق بود. لطفاً دوباره تلاش کن."
        : "Submission failed. Please try again.",
      examplesTitle: isFa ? "نمونه نظرات" : "Featured reviews",
      footer: isFa
        ? "در صورت رضایت، می‌توانم فیدبک شما را بدون اطلاعات حساس در سایت نمایش بدهم."
        : "If you want, I can feature selected feedback on the website (no sensitive info).",
    }),
    [isFa]
  );

  const featuredFallback = useMemo(
  () => [
    {
      name: isFa ? "مراجع" : "Client",
      rating: 5,
      text: isFa
        ? "جلسات بسیار شفاف و کاربردی بودند."
        : "Clear and practical sessions.",
    },
    {
      name: isFa ? "مراجع" : "Client",
      rating: 5,
      text: isFa
        ? "کمک کرد سریع‌تر تصمیم بگیرم."
        : "Helped me make decisions faster.",
    },
    {
      name: isFa ? "مراجع" : "Client",
      rating: 5,
      text: isFa
        ? "ساختار عالی و قابل اجرا."
        : "Great structure and clarity.",
    },
  ],
  [isFa]
);

    const featuredSorted = useMemo(() => {
  const arr = (featuredFromSheet.length > 0 ? featuredFromSheet : featuredFallback).slice();

  // اگر بعداً timestamp داشتی: (x as any).createdAt
  arr.sort((a: any, b: any) => {
    const ra = Number(a.rating || 0);
    const rb = Number(b.rating || 0);
    if (rb !== ra) return rb - ra;

    // اختیاری: اگر createdAt داشتی
    const ta = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const tb = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return tb - ta;
  });

  return arr.slice(0, 6); // حداکثر آیتمی که اسلایدر می‌چرخونه
}, [featuredFromSheet, featuredFallback]);


  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("loading");

  const form = e.currentTarget; // ✅ قبل از await ذخیره کن
  const fd = new FormData(form);

  const payload = {
    type: "feedback",
    lang,
    source: "website",
    fullName: String(fd.get("name") || ""),
    email: String(fd.get("email") || ""),
    rating,
    message: String(fd.get("message") || ""),
    allowPublish,
  };

  try {
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await safeJson(res);

    console.log("FEEDBACK RES", { status: res.status, ok: res.ok, data });

    const success = res.ok && !(data && data.ok === false);

    if (success) {
      setStatus("ok");
      form.reset(); // ✅ به جای e.currentTarget.reset()
      setRating(5);

      // refresh featured
      try {
        const r = await fetch(`/api/testimonials?lang=${lang}&limit=6`, {
          cache: "no-store",
        });
        const j = await r.json().catch(() => null);
        if (r.ok && j?.ok && Array.isArray(j.items)) {
          setFeaturedFromSheet(
            j.items.map((x: any) => ({
              name: String(x.fullName || (isFa ? "مراجع" : "Client")),
              rating: Number(x.rating || 5),
              text: String(x.message || ""),
            }))
          );
        }
      } catch {
        // ignore
      }
    } else {
      setStatus("err");
    }
  } catch (err) {
    console.error("Submit error", err);
    setStatus("err");
  }
}


  useEffect(() => {
    let cancelled = false;

    async function loadTestimonials() {
      try {
        const res = await fetch(`/api/testimonials?lang=${lang}&limit=6`, {
          cache: "no-store",
        });
        const data = await res.json().catch(() => null);

        if (!cancelled && res.ok && data?.ok && Array.isArray(data.items)) {
          setFeaturedFromSheet(
            data.items.map((x: any) => ({
              name: String(x.fullName || (isFa ? "مراجع" : "Client")),
              rating: Number(x.rating || 5),
              text: String(x.message || ""),
            }))
          );
        }
      } catch {
        // silent fallback
      }
    }

    loadTestimonials();
    return () => {
      cancelled = true;
    };
  }, [lang, isFa]);

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
                <textarea
                  className="textarea"
                  name="message"
                  rows={4}
                  required
                />
              </div>

              <div
                className="field"
                style={{ display: "flex", gap: 10, alignItems: "center" }}
              >
                <input
                  id="allowPublish"
                  type="checkbox"
                  checked={allowPublish}
                  onChange={(e) => setAllowPublish(e.target.checked)}
                />
                <label
                  htmlFor="allowPublish"
                  className="muted"
                  style={{ fontSize: 13 }}
                >
                  {copy.publish}
                </label>
              </div>

              <button
                className="btn btnPrimary"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? copy.sending : copy.submit}
              </button>

              {status === "ok" && <p className="note success">{copy.ok}</p>}
              {status === "err" && <p className="note err">{copy.err}</p>}
            </form>
          </div>

          <div className="card">
            <h3 className="h3">{copy.examplesTitle}</h3>

            <div className="reviewsSlider" dir={dir}>
  {featuredSorted.slice(0, 3).map((r, i) => (   // اگر 2-3 تا میخوای: 3
    <div className="reviewSlide" key={`${r.name}-${i}`}>
      <div className="reviewTop">
        <div className="reviewName">{r.name}</div>
        <div className="reviewStars" aria-label={`${r.rating} stars`}>
          {[1, 2, 3, 4, 5].map((n) => (
            <span key={n} className="starStatic">
              <Star filled={Number(r.rating) >= n} />
            </span>
          ))}
        </div>
      </div>

      <div className="muted">
        {r.text.length > 90 ? r.text.slice(0, 90) + "…" : r.text}
      </div>
    </div>
  ))}
</div>

            <div className="divider" />

            <p className="muted" style={{ fontSize: 13 }}>
              {copy.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
