"use client";

import { FormEvent, useState } from "react";
import { EMAIL_ADDRESS, EMAIL_MAILTO_URL, WHATSAPP_URL } from "@/lib/siteConfig";

type ApplyPayload = {
  name: string;
  email: string;
  location: "Europe" | "Iran" | "Other";
  situation: string;
  unclear: string;
  tried: string;
  changeGoal: string;
  blockers: string;
  preferredFormat: "Strategic Session" | "3-Month 1:1";
  investmentReadiness: string;
  extraContext?: string;
  lang?: "fa" | "en";
};

type Labels = {
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
  submit: string;
  submitting: string;
  success: string;
  direct: string;
  validationError: string;
  errorTitle: string;
  errorHelp: string;
  directEmail: string;
  directWhatsapp: string;
  locationOptions: string[];
  formatOptions: { value: "Strategic Session" | "3-Month 1:1"; label: string }[];
  readinessOptions: string[];
};

const DEFAULT_LABELS: Labels = {
  name: "Name",
  email: "Email",
  location: "Location",
  situation: "What are you currently navigating?",
  unclear: "What feels most unclear or stuck right now?",
  tried: "What have you already tried to move forward?",
  changeGoal: "What would a meaningful change look like for you in the next 1–3 months?",
  blockers: "What has been preventing progress so far?",
  preferredFormat: "Preferred format",
  investmentReadiness: "Are you open to investing in structured support if there is a good fit?",
  extraContext: "Anything else you'd like me to know (optional)",
  submit: "Submit application",
  submitting: "Sending...",
  success: "Your application has been received.",
  direct: "I’ll review your responses and get back to you within 2–3 business days.",
  validationError: "Please complete all required fields before submitting.",
  errorTitle: "Something went wrong while sending your application. Please try again.",
  errorHelp: `If the issue continues, contact directly at ${EMAIL_ADDRESS}.`,
  directEmail: EMAIL_ADDRESS,
  directWhatsapp: "WhatsApp",
  locationOptions: ["Europe", "Iran", "Other"],
  formatOptions: [
    { value: "Strategic Session", label: "Strategic Session" },
    { value: "3-Month 1:1", label: "3-Month 1:1" },
  ],
  readinessOptions: ["Yes", "Not yet"],
};

export default function ApplyForm({
  labels = DEFAULT_LABELS,
  lang = "en",
}: {
  labels?: Labels;
  lang?: "fa" | "en";
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [successDetail, setSuccessDetail] = useState("");
  const [form, setForm] = useState<ApplyPayload>({
    name: "",
    email: "",
    location: "Europe",
    situation: "",
    unclear: "",
    tried: "",
    changeGoal: "",
    blockers: "",
    preferredFormat: "Strategic Session",
    investmentReadiness: "Yes",
    extraContext: "",
    lang,
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      setError(labels.validationError);
      setSuccess(false);
      setSuccessDetail("");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);
    setSuccessDetail("");

    const payload = { ...form, lang };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const rawText = await res.text();
      let data: Record<string, unknown> | null = null;

      try {
        data = rawText ? (JSON.parse(rawText) as Record<string, unknown>) : null;
      } catch {
        data = rawText ? { rawText } : null;
      }

      if (!res.ok) {
        console.error("Apply form submission failed", {
          status: res.status,
          statusText: res.statusText,
          response: data,
          payload: {
            ...payload,
            email: form.email ? "[redacted]" : "",
          },
        });

        setError(
          typeof data?.error === "string" && data.error.trim()
            ? data.error.trim()
            : "Something went wrong while sending your application. Please try again. If the issue continues, contact directly at saramah63@gmail.com."
        );
        return;
      }

      console.log("Apply form success", data);
      setSuccess(true);
      setSuccessDetail(
        typeof data?.message === "string" && data.message.trim() ? data.message.trim() : labels.direct
      );
      setForm({
        name: "",
        email: "",
        location: "Europe",
        situation: "",
        unclear: "",
        tried: "",
        changeGoal: "",
        blockers: "",
        preferredFormat: "Strategic Session",
        investmentReadiness: "Yes",
        extraContext: "",
        lang,
      });
    } catch (err) {
      console.error("Apply form network/runtime error", err);
      const message =
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong while sending your application. Please try again. If the issue continues, contact directly at saramah63@gmail.com.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} aria-busy={loading}>
      {success ? (
        <div className="formStatus formStatusSuccess" role="status" aria-live="polite">
          <p className="formStatusTitle">✔ {labels.success}</p>
          <p className="formStatusBody">{successDetail || labels.direct}</p>
          <p className="formStatusBody">If needed, you can also contact directly:</p>
          <div className="formStatusLinks">
            <a href={EMAIL_MAILTO_URL}>{labels.directEmail}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              {labels.directWhatsapp}
            </a>
          </div>
        </div>
      ) : null}

      <div className="field">
        <label className="label" htmlFor="name">{labels.name}</label>
        <input className="input" id="name" required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} />
      </div>

      <div className="field">
        <label className="label" htmlFor="email">{labels.email}</label>
        <input className="input" id="email" type="email" required value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
      </div>

      <div className="field">
        <label className="label" htmlFor="location">{labels.location}</label>
        <select
          id="location"
          className="input"
          value={form.location}
          onChange={(e) => setForm((p) => ({ ...p, location: e.target.value as ApplyPayload["location"] }))}
        >
          {labels.locationOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label className="label" htmlFor="situation">{labels.situation}</label>
        <textarea
          className="textarea"
          id="situation"
          required
          placeholder={lang === "fa" ? "مثلاً تغییر شغل، مهاجرت، شروع یا بازسازی کسب‌وکار" : "e.g. career change, migration, starting or restructuring a business"}
          value={form.situation}
          onChange={(e) => setForm((p) => ({ ...p, situation: e.target.value }))}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="unclear">{labels.unclear}</label>
        <textarea className="textarea" id="unclear" required value={form.unclear} onChange={(e) => setForm((p) => ({ ...p, unclear: e.target.value }))} />
      </div>

      <div className="field">
        <label className="label" htmlFor="tried">{labels.tried}</label>
        <textarea className="textarea" id="tried" required value={form.tried} onChange={(e) => setForm((p) => ({ ...p, tried: e.target.value }))} />
      </div>

      <div className="field">
        <label className="label" htmlFor="changeGoal">{labels.changeGoal}</label>
        <textarea className="textarea" id="changeGoal" required value={form.changeGoal} onChange={(e) => setForm((p) => ({ ...p, changeGoal: e.target.value }))} />
      </div>

      <div className="field">
        <label className="label" htmlFor="blockers">{labels.blockers}</label>
        <textarea className="textarea" id="blockers" required value={form.blockers} onChange={(e) => setForm((p) => ({ ...p, blockers: e.target.value }))} />
      </div>

      <div className="field">
        <label className="label" htmlFor="preferredFormat">{labels.preferredFormat}</label>
        <select
          id="preferredFormat"
          className="input"
          value={form.preferredFormat}
          onChange={(e) => setForm((p) => ({ ...p, preferredFormat: e.target.value as ApplyPayload["preferredFormat"] }))}
        >
          {labels.formatOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label className="label" htmlFor="investmentReadiness">{labels.investmentReadiness}</label>
        <select
          id="investmentReadiness"
          className="input"
          value={form.investmentReadiness}
          onChange={(e) => setForm((p) => ({ ...p, investmentReadiness: e.target.value }))}
        >
          {labels.readinessOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label className="label" htmlFor="extraContext">{labels.extraContext}</label>
        <textarea className="textarea" id="extraContext" value={form.extraContext} onChange={(e) => setForm((p) => ({ ...p, extraContext: e.target.value }))} />
      </div>

      <button className="btn btnPrimary" type="submit" disabled={loading}>
        {loading ? (
          <span className="btnInlineStatus">
            <span className="btnSpinner" aria-hidden="true" />
            <span>{labels.submitting}</span>
          </span>
        ) : (
          labels.submit
        )}
      </button>

      {error ? (
        <div className="formStatus formStatusError" role="alert">
          <p className="formStatusTitle">⚠ {labels.errorTitle}</p>
          <p className="formStatusBody">{error}</p>
          <p className="formStatusBody">{labels.errorHelp}</p>
          <div className="formStatusLinks">
            <a href={EMAIL_MAILTO_URL}>{labels.directEmail}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              {labels.directWhatsapp}
            </a>
          </div>
        </div>
      ) : null}
    </form>
  );
}
