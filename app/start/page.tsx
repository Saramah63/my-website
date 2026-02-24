"use client";

import { FormEvent, Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type BriefPayload = {
  plan: "launch" | "growth";
  businessName: string;
  contactEmail: string;
  websiteGoal: string;
  targetAudience: string;
  mainOffer: string;
  problemYouSolve: string;
  desiredCta: string;
  brandColors?: string;
  domain?: string;
  deadlineUrgency?: string;
};

const BOOK_CALL_URL = process.env.NEXT_PUBLIC_BOOK_CALL_URL || process.env.NEXT_PUBLIC_CALENDLY_URL || "#";

function StartPageContent() {
  const searchParams = useSearchParams();
  const queryPlan = (searchParams.get("plan") || "").toLowerCase();
  const initialPlan = queryPlan === "growth" ? "growth" : "launch";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState<BriefPayload | null>(null);
  const [form, setForm] = useState<BriefPayload>({
    plan: initialPlan,
    businessName: "",
    contactEmail: "",
    websiteGoal: "lead gen",
    targetAudience: "",
    mainOffer: "",
    problemYouSolve: "",
    desiredCta: "",
    brandColors: "",
    domain: "",
    deadlineUrgency: "normal",
  });

  const summary = useMemo(() => {
    if (!submitted) return [];
    return [
      ["Plan", submitted.plan === "growth" ? "Growth" : "Launch"],
      ["Business name", submitted.businessName],
      ["Contact email", submitted.contactEmail],
      ["Website goal", submitted.websiteGoal],
      ["Target audience", submitted.targetAudience],
      ["Main offer", submitted.mainOffer],
      ["Problem you solve", submitted.problemYouSolve],
      ["Desired CTA", submitted.desiredCta],
      ["Brand colors", submitted.brandColors || "-"],
      ["Domain", submitted.domain || "-"],
      ["Deadline / urgency", submitted.deadlineUrgency || "-"],
    ];
  }, [submitted]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok !== true) {
        throw new Error(data?.error || "Unable to submit your brief right now.");
      }

      setSubmitted(form);
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="section">
      <div className="container">
        {!submitted ? (
          <div className="card dpFormCard">
            <h1 className="h2">Get Started</h1>
            <p className="muted">Short brief. Clear scope. Fast build.</p>

            <form className="form" onSubmit={onSubmit}>
              <div className="field">
                <label className="label">Plan</label>
                <select
                  className="input"
                  value={form.plan}
                  onChange={(e) => setForm((p) => ({ ...p, plan: e.target.value as "launch" | "growth" }))}
                >
                  <option value="launch">Launch (€99)</option>
                  <option value="growth">Growth (€249)</option>
                </select>
              </div>

              <div className="field">
                <label className="label">Business name</label>
                <input
                  className="input"
                  required
                  value={form.businessName}
                  onChange={(e) => setForm((p) => ({ ...p, businessName: e.target.value }))}
                />
              </div>

              <div className="field">
                <label className="label">Contact email</label>
                <input
                  type="email"
                  className="input"
                  required
                  value={form.contactEmail}
                  onChange={(e) => setForm((p) => ({ ...p, contactEmail: e.target.value }))}
                />
              </div>

              <div className="field">
                <label className="label">Website goal</label>
                <select
                  className="input"
                  required
                  value={form.websiteGoal}
                  onChange={(e) => setForm((p) => ({ ...p, websiteGoal: e.target.value }))}
                >
                  <option value="lead gen">Lead gen</option>
                  <option value="booking">Booking</option>
                  <option value="sales">Sales</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="field">
                <label className="label">Target audience</label>
                <input
                  className="input"
                  required
                  value={form.targetAudience}
                  onChange={(e) => setForm((p) => ({ ...p, targetAudience: e.target.value }))}
                />
              </div>

              <div className="field">
                <label className="label">Main offer</label>
                <input
                  className="input"
                  required
                  value={form.mainOffer}
                  onChange={(e) => setForm((p) => ({ ...p, mainOffer: e.target.value }))}
                />
              </div>

              <div className="field">
                <label className="label">Problem you solve</label>
                <input
                  className="input"
                  required
                  value={form.problemYouSolve}
                  onChange={(e) => setForm((p) => ({ ...p, problemYouSolve: e.target.value }))}
                />
              </div>

              <div className="field">
                <label className="label">Desired CTA</label>
                <input
                  className="input"
                  required
                  placeholder="Book call / Buy / Contact"
                  value={form.desiredCta}
                  onChange={(e) => setForm((p) => ({ ...p, desiredCta: e.target.value }))}
                />
              </div>

              <div className="field">
                <label className="label">Brand colors (optional)</label>
                <input
                  className="input"
                  value={form.brandColors}
                  onChange={(e) => setForm((p) => ({ ...p, brandColors: e.target.value }))}
                />
              </div>

              <div className="field">
                <label className="label">Domain (optional)</label>
                <input
                  className="input"
                  value={form.domain}
                  onChange={(e) => setForm((p) => ({ ...p, domain: e.target.value }))}
                />
              </div>

              <div className="field">
                <label className="label">Deadline / urgency (optional)</label>
                <select
                  className="input"
                  value={form.deadlineUrgency}
                  onChange={(e) => setForm((p) => ({ ...p, deadlineUrgency: e.target.value }))}
                >
                  <option value="normal">Normal</option>
                  <option value="soon">Soon (within 2 weeks)</option>
                  <option value="urgent">Urgent (within 7 days)</option>
                </select>
              </div>

              {error ? <p className="note err">{error}</p> : null}

              <button type="submit" className="btn btnPrimary btnLarge" disabled={loading}>
                {loading ? "Submitting..." : "Submit Brief"}
              </button>
            </form>

            <p className="note muted">
              Need something custom? <Link href="/contact?reason=custom">Request a custom proposal</Link>.
            </p>
          </div>
        ) : (
          <div className="card dpFormCard">
            <h1 className="h2">Thank you</h1>
            <p className="muted">We&apos;ll review and reply within 24–48 hours.</p>

            <div className="dpSummary">
              {summary.map(([label, value]) => (
                <div className="dpSummaryRow" key={label}>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>

            <div className="dpActions">
              <a
                className="btn btnPrimary btnLarge"
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
              <Link className="btn btnLarge" href="/en">
                Back to home
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default function StartPage() {
  return (
    <Suspense fallback={<main className="section"><div className="container" /></main>}>
      <StartPageContent />
    </Suspense>
  );
}
