"use client";

import { useState } from "react";
import {
  EMAIL_ADDRESS,
  EMAIL_GMAIL_URL,
  WHATSAPP_EN_URL,
  WHATSAPP_FA_URL,
} from "@/lib/siteConfig";

type FormState = {
  name: string;
  email: string;
  location: string;
  situation: string;
  unclear: string;
  tried: string;
  changeGoal: string;
  blockers: string;
  preferredFormat: string;
  investmentReadiness: string;
  extraContext: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  location: "",
  situation: "",
  unclear: "",
  tried: "",
  changeGoal: "",
  blockers: "",
  preferredFormat: "Strategic Session",
  investmentReadiness: "Yes",
  extraContext: "",
};

type ApplyFormProps = {
  lang?: "en" | "fa";
};

const COPY = {
  en: {
    title: "Apply to work together",
    intro:
      "A short application to understand your situation and determine if this work is a good fit.",
    success:
      "Your application has been received. I’ll get back to you within 2–3 business days.",
    error: "Something went wrong. Please try again.",
    basicDetails: "Basic details",
    yourSituation: "Your situation",
    formatAndFit: "Format and fit",
    name: "Name",
    email: "Email",
    location: "Location",
    situation: "What are you currently navigating?",
    unclear: "What feels unclear or stuck?",
    tried: "What have you already tried?",
    changeGoal: "What would meaningful change look like in 1–3 months?",
    blockers: "What is blocking progress?",
    preferredFormat: "Preferred format",
    investmentReadiness: "Ready to invest?",
    extraContext: "Anything else?",
    submit: "Submit application",
    submitting: "Sending...",
    fallback: "If the form does not go through:",
    gmail: "Open in Gmail",
    whatsapp: "WhatsApp",
  },
  fa: {
    title: "درخواست همکاری",
    intro:
      "این فرم کوتاه برای این است که وضعیت شما را بهتر درک کنم و مشخص شود آیا این نوع همکاری برای شما مناسب هست یا نه.",
    success: "درخواست شما دریافت شد. طی ۲ تا ۳ روز کاری با شما در تماس خواهم بود.",
    error: "در ارسال درخواست مشکلی پیش آمد. لطفاً دوباره تلاش کنید.",
    basicDetails: "اطلاعات اولیه",
    yourSituation: "وضعیت شما",
    formatAndFit: "فرمت و تناسب همکاری",
    name: "نام",
    email: "ایمیل",
    location: "محل زندگی",
    situation: "در حال حاضر بیشتر با چه موضوعی درگیر هستید؟",
    unclear: "الان بیشترین ابهام یا گیر اصلی شما چیست؟",
    tried: "تا الان برای جلو رفتن چه کارهایی انجام داده‌اید؟",
    changeGoal: "در ۱ تا ۳ ماه آینده، یک تغییر معنادار برای شما چه شکلی دارد؟",
    blockers: "چه چیزی مانع پیشرفت شما شده است؟",
    preferredFormat: "فرمت ترجیحی",
    investmentReadiness: "آماده سرمایه‌گذاری هستید؟",
    extraContext: "نکته دیگری هست؟",
    submit: "ارسال درخواست",
    submitting: "در حال ارسال...",
    fallback: "اگر فرم ارسال نشد، می‌توانید مستقیم در ارتباط باشید:",
    gmail: "ارسال ایمیل از طریق Gmail",
    whatsapp: "واتساپ",
  },
} as const;

export default function ApplyForm({ lang = "en" }: ApplyFormProps) {
  const copy = COPY[lang];
  const whatsappUrl = lang === "fa" ? WHATSAPP_FA_URL : WHATSAPP_EN_URL;

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const raw = await res.text();
      let data: Record<string, unknown> | null = null;

      try {
        data = raw ? (JSON.parse(raw) as Record<string, unknown>) : null;
      } catch {
        data = { raw };
      }

      if (!res.ok) {
        console.error("Apply form submission failed", {
          status: res.status,
          statusText: res.statusText,
          response: data,
          payload: formData,
        });
        throw new Error(typeof data?.error === "string" ? data.error : copy.error);
      }

      setSuccess(true);
      setFormData(INITIAL_STATE);
    } catch (submitError) {
      console.error("Apply form network/runtime error:", submitError);
      setError(
        submitError instanceof Error && submitError.message ? submitError.message : copy.error
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="applyPageShell">
      <div className="applyPageHeader">
        <h1 className="applyPageTitle">{copy.title}</h1>
        <p className="applyPageIntro">{copy.intro}</p>
      </div>

      <form onSubmit={onSubmit} className="applyFormShell">
        {success ? (
          <div className="applyStatusBox applyStatusBoxSuccess" role="status" aria-live="polite">
            <p className="applyStatusTitle">✔ {copy.success}</p>
          </div>
        ) : null}

        {error ? (
          <div className="applyStatusBox applyStatusBoxError" role="alert">
            <p className="applyStatusTitle">⚠ {error}</p>
          </div>
        ) : null}

        <div className="applyFormSections">
          <section className="applyFormGroup">
            <h2 className="applyGroupLabel">{copy.basicDetails}</h2>

            <div className="field">
              <label className="label" htmlFor="apply-name">
                {copy.name}
              </label>
              <input
                id="apply-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="applyInput"
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="apply-email">
                {copy.email}
              </label>
              <input
                id="apply-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="applyInput"
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="apply-location">
                {copy.location}
              </label>
              <input
                id="apply-location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="applyInput"
              />
            </div>
          </section>

          <section className="applyFormGroup">
            <h2 className="applyGroupLabel">{copy.yourSituation}</h2>

            <div className="field">
              <label className="label" htmlFor="apply-situation">
                {copy.situation}
              </label>
              <textarea
                id="apply-situation"
                name="situation"
                value={formData.situation}
                onChange={handleChange}
                required
                rows={4}
                className="applyTextarea"
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="apply-unclear">
                {copy.unclear}
              </label>
              <textarea
                id="apply-unclear"
                name="unclear"
                value={formData.unclear}
                onChange={handleChange}
                required
                rows={4}
                className="applyTextarea"
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="apply-tried">
                {copy.tried}
              </label>
              <textarea
                id="apply-tried"
                name="tried"
                value={formData.tried}
                onChange={handleChange}
                rows={4}
                className="applyTextarea"
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="apply-change-goal">
                {copy.changeGoal}
              </label>
              <textarea
                id="apply-change-goal"
                name="changeGoal"
                value={formData.changeGoal}
                onChange={handleChange}
                rows={4}
                className="applyTextarea"
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="apply-blockers">
                {copy.blockers}
              </label>
              <textarea
                id="apply-blockers"
                name="blockers"
                value={formData.blockers}
                onChange={handleChange}
                rows={4}
                className="applyTextarea"
              />
            </div>
          </section>

          <section className="applyFormGroup">
            <h2 className="applyGroupLabel">{copy.formatAndFit}</h2>

            <div className="field">
              <label className="label" htmlFor="apply-format">
                {copy.preferredFormat}
              </label>
              <select
                id="apply-format"
                name="preferredFormat"
                value={formData.preferredFormat}
                onChange={handleChange}
                className="applyInput"
              >
                <option>Strategic Session</option>
                <option>3-Month 1:1</option>
              </select>
            </div>

            <div className="field">
              <label className="label" htmlFor="apply-investment">
                {copy.investmentReadiness}
              </label>
              <select
                id="apply-investment"
                name="investmentReadiness"
                value={formData.investmentReadiness}
                onChange={handleChange}
                className="applyInput"
              >
                <option>Yes</option>
                <option>Not yet</option>
              </select>
            </div>

            <div className="field">
              <label className="label" htmlFor="apply-extra-context">
                {copy.extraContext}
              </label>
              <textarea
                id="apply-extra-context"
                name="extraContext"
                value={formData.extraContext}
                onChange={handleChange}
                rows={4}
                className="applyTextarea"
              />
            </div>
          </section>
        </div>

        <button type="submit" disabled={isSubmitting} className="applySubmitButton">
          {isSubmitting ? copy.submitting : copy.submit}
        </button>

        <div className="applyContactBlock">
          <div className="applyFallbackText">{copy.fallback}</div>

          <div className="applyContactActions">
            <a href={EMAIL_GMAIL_URL} target="_blank" rel="noreferrer">
              {copy.gmail}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              {copy.whatsapp}
            </a>
          </div>

          <div className="applyContactEmail">{EMAIL_ADDRESS}</div>
        </div>
      </form>
    </div>
  );
}
