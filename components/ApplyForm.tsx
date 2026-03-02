"use client";

import { FormEvent, useState } from "react";
import { SCHEDULING_URL } from "@/lib/siteConfig";

type ApplyPayload = {
  name: string;
  email: string;
  location: "Europe" | "Iran" | "Other";
  primaryGoal: string;
  biggestConstraint: string;
  preferredFormat: "1:1" | "group";
  budgetReadiness?: string;
  companyWebsite?: string;
  lang?: "fa" | "en";
};

type Labels = {
  name: string;
  email: string;
  location: string;
  primaryGoal: string;
  constraint: string;
  format: string;
  budget: string;
  submit: string;
  submitting: string;
  success: string;
  scheduling: string;
  direct: string;
  locationOptions: string[];
  goalOptions: string[];
  formatOptions: { value: "1:1" | "group"; label: string }[];
  budgetOptions: string[];
};

const DEFAULT_LABELS: Labels = {
  name: "Name",
  email: "Email",
  location: "Location",
  primaryGoal: "Primary goal",
  constraint: "Biggest constraint",
  format: "Preferred format",
  budget: "Budget readiness",
  submit: "Submit application",
  submitting: "Submitting...",
  success: "Application received. If you want to book immediately, use the scheduling link below.",
  scheduling: "Scheduling link",
  direct: "Submitted successfully. We will respond within 2–3 business days.",
  locationOptions: ["Europe", "Iran", "Other"],
  goalOptions: ["Migration readiness", "Career direction", "Identity + habits", "Entrepreneurship", "Other"],
  formatOptions: [
    { value: "1:1", label: "1:1" },
    { value: "group", label: "Group" },
  ],
  budgetOptions: ["Request details", "< €1,000", "€1,000–€3,000", "€3,000–€7,000", "€7,000+"],
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
  const [form, setForm] = useState<ApplyPayload>({
    name: "",
    email: "",
    location: "Europe",
    primaryGoal: "Migration readiness",
    biggestConstraint: "",
    preferredFormat: "1:1",
    budgetReadiness: "",
    companyWebsite: "",
    lang,
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok !== true) {
        throw new Error("Submission failed");
      }

      setSuccess(true);
    } catch {
      setError(lang === "fa" ? "ارسال با خطا مواجه شد. لطفاً دوباره تلاش کنید." : "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label className="label" htmlFor="name">{labels.name}</label>
        <input
          className="input"
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="email">{labels.email}</label>
        <input
          className="input"
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
        />
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
        <label className="label" htmlFor="primaryGoal">{labels.primaryGoal}</label>
        <select
          id="primaryGoal"
          className="input"
          value={form.primaryGoal}
          onChange={(e) => setForm((p) => ({ ...p, primaryGoal: e.target.value }))}
        >
          {labels.goalOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label className="label" htmlFor="constraint">{labels.constraint}</label>
        <textarea
          className="textarea"
          id="constraint"
          required
          value={form.biggestConstraint}
          onChange={(e) => setForm((p) => ({ ...p, biggestConstraint: e.target.value }))}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="format">{labels.format}</label>
        <select
          id="format"
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
        <label className="label" htmlFor="budget">{labels.budget}</label>
        <select
          id="budget"
          className="input"
          value={form.budgetReadiness}
          onChange={(e) => setForm((p) => ({ ...p, budgetReadiness: e.target.value }))}
        >
          {labels.budgetOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
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

      {error ? <p className="note err">{error}</p> : null}
      {success ? (
        <p className="note ok">
          {labels.success}
        </p>
      ) : null}

      <button className="btn btnPrimary" type="submit" disabled={loading}>
        {loading ? labels.submitting : labels.submit}
      </button>

      <a className="btn" href={SCHEDULING_URL || "#"} target="_blank" rel="noopener noreferrer">
        {labels.scheduling}
      </a>

      {success ? <p className="small">{labels.direct}</p> : null}
    </form>
  );
}
