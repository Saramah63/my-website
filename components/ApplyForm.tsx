"use client";

import { FormEvent, useState } from "react";
import { EMAIL_ADDRESS, WHATSAPP_URL } from "@/lib/siteConfig";

type ApplyPayload = {
  name: string;
  email: string;
  location: "Europe" | "Iran" | "Other";
  currentSituation: string;
  biggestConstraint: string;
  triedSoFar: string;
  desiredChange: string;
  progressBlocker: string;
  preferredFormat: "1:1" | "3-month";
  investmentReadiness: string;
  additionalContext?: string;
  companyWebsite?: string;
  lang?: "fa" | "en";
};

type Labels = {
  name: string;
  email: string;
  location: string;
  currentSituation: string;
  biggestConstraint: string;
  triedSoFar: string;
  desiredChange: string;
  progressBlocker: string;
  preferredFormat: string;
  investmentReadiness: string;
  additionalContext: string;
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
  formatOptions: { value: "1:1" | "3-month"; label: string }[];
  readinessOptions: string[];
};

const DEFAULT_LABELS: Labels = {
  name: "Name",
  email: "Email",
  location: "Location",
  currentSituation: "What are you currently navigating?",
  biggestConstraint: "What feels most unclear or stuck right now?",
  triedSoFar: "What have you already tried to move forward?",
  desiredChange: "What would a meaningful change look like for you in the next 1–3 months?",
  progressBlocker: "What has been preventing progress so far?",
  preferredFormat: "Preferred format",
  investmentReadiness: "Are you open to investing in structured support if there is a good fit?",
  additionalContext: "Anything else you'd like me to know (optional)",
  submit: "Submit application",
  submitting: "Sending...",
  success: "Your application has been received.",
  direct: "I’ll review your responses and get back to you within 2–3 business days.",
  validationError: "Please complete all required fields before submitting.",
  errorTitle: "Something went wrong while sending your application.",
  errorHelp: "If the issue continues, you can contact directly via email or WhatsApp.",
  directEmail: "contact@saramahmodi.com",
  directWhatsapp: "WhatsApp",
  locationOptions: ["Europe", "Iran", "Other"],
  formatOptions: [
    { value: "1:1", label: "Strategic Session" },
    { value: "3-month", label: "3-Month 1:1" },
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
    currentSituation: "",
    biggestConstraint: "",
    triedSoFar: "",
    desiredChange: "",
    progressBlocker: "",
    preferredFormat: "1:1",
    investmentReadiness: "Yes",
    additionalContext: "",
    companyWebsite: "",
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

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok !== true) {
        const serverError =
          typeof data?.error === "string" && data.error.trim()
            ? data.error.trim()
            : lang === "fa"
              ? "ارسال با خطا مواجه شد. لطفاً دوباره تلاش کنید."
              : "Submission failed. Please try again.";
        console.error("Apply form submission failed", {
          status: res.status,
          response: data,
          payload: {
            ...form,
            email: form.email ? "[redacted]" : "",
          },
        });
        throw new Error(serverError);
      }

      setSuccess(true);
      setSuccessDetail(
        typeof data?.message === "string" && data.message.trim() ? data.message.trim() : labels.direct
      );
    } catch (err) {
      const message =
        err instanceof Error && err.message
          ? err.message
          : lang === "fa"
            ? "ارسال با خطا مواجه شد. لطفاً دوباره تلاش کنید."
            : "Submission failed. Please try again.";
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
            <a href={`mailto:${EMAIL_ADDRESS}`}>{labels.directEmail}</a>
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
        <label className="label" htmlFor="currentSituation">{labels.currentSituation}</label>
        <textarea
          className="textarea"
          id="currentSituation"
          required
          placeholder={lang === "fa" ? "مثلاً تغییر شغل، مهاجرت، شروع یا بازسازی کسب‌وکار" : "e.g. career change, migration, starting or restructuring a business"}
          value={form.currentSituation}
          onChange={(e) => setForm((p) => ({ ...p, currentSituation: e.target.value }))}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="biggestConstraint">{labels.biggestConstraint}</label>
        <textarea className="textarea" id="biggestConstraint" required value={form.biggestConstraint} onChange={(e) => setForm((p) => ({ ...p, biggestConstraint: e.target.value }))} />
      </div>

      <div className="field">
        <label className="label" htmlFor="triedSoFar">{labels.triedSoFar}</label>
        <textarea className="textarea" id="triedSoFar" required value={form.triedSoFar} onChange={(e) => setForm((p) => ({ ...p, triedSoFar: e.target.value }))} />
      </div>

      <div className="field">
        <label className="label" htmlFor="desiredChange">{labels.desiredChange}</label>
        <textarea className="textarea" id="desiredChange" required value={form.desiredChange} onChange={(e) => setForm((p) => ({ ...p, desiredChange: e.target.value }))} />
      </div>

      <div className="field">
        <label className="label" htmlFor="progressBlocker">{labels.progressBlocker}</label>
        <textarea className="textarea" id="progressBlocker" required value={form.progressBlocker} onChange={(e) => setForm((p) => ({ ...p, progressBlocker: e.target.value }))} />
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
        <label className="label" htmlFor="additionalContext">{labels.additionalContext}</label>
        <textarea className="textarea" id="additionalContext" value={form.additionalContext} onChange={(e) => setForm((p) => ({ ...p, additionalContext: e.target.value }))} />
      </div>

      <div className="field" style={{ display: "none" }} aria-hidden="true">
        <label className="label" htmlFor="companyWebsite">Website</label>
        <input
          className="input"
          id="companyWebsite"
          value={form.companyWebsite}
          onChange={(e) => setForm((p) => ({ ...p, companyWebsite: e.target.value }))}
          tabIndex={-1}
          autoComplete="off"
        />
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
            <a href={`mailto:${EMAIL_ADDRESS}`}>{labels.directEmail}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              {labels.directWhatsapp}
            </a>
          </div>
        </div>
      ) : null}
    </form>
  );
}
