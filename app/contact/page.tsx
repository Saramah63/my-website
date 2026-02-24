"use client";

import { FormEvent, Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type ContactPayload = {
  reason: string;
  name: string;
  email: string;
  company?: string;
  message: string;
};

function ContactPageContent() {
  const searchParams = useSearchParams();
  const queryReason = (searchParams.get("reason") || "").toLowerCase();

  const defaultReason = useMemo(() => {
    if (queryReason === "custom") return "Custom proposal";
    if (queryReason === "hosting") return "Hosting";
    return "Donepage";
  }, [queryReason]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState<ContactPayload>({
    reason: defaultReason,
    name: "",
    email: "",
    company: "",
    message: "",
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok !== true) {
        throw new Error(data?.error || "Unable to send your message.");
      }

      setSuccess(true);
      setForm((p) => ({ ...p, name: "", email: "", company: "", message: "" }));
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="section">
      <div className="container">
        <div className="card dpFormCard">
          <h1 className="h2">Contact</h1>
          <p className="muted">Tell us what you need and we&apos;ll reply shortly.</p>

          <form className="form" onSubmit={onSubmit}>
            <div className="field">
              <label className="label">Reason</label>
              <select
                className="input"
                required
                value={form.reason}
                onChange={(e) => setForm((p) => ({ ...p, reason: e.target.value }))}
              >
                <option>Donepage</option>
                <option>Hosting</option>
                <option>Custom proposal</option>
                <option>Other</option>
              </select>
            </div>

            <div className="field">
              <label className="label">Name</label>
              <input
                className="input"
                required
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              />
            </div>

            <div className="field">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                required
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              />
            </div>

            <div className="field">
              <label className="label">Company (optional)</label>
              <input
                className="input"
                value={form.company}
                onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
              />
            </div>

            <div className="field">
              <label className="label">Message</label>
              <textarea
                className="textarea"
                required
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              />
            </div>

            {error ? <p className="note err">{error}</p> : null}
            {success ? <p className="note ok">Thanks. Your message was sent.</p> : null}

            <button type="submit" className="btn btnPrimary btnLarge" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<main className="section"><div className="container" /></main>}>
      <ContactPageContent />
    </Suspense>
  );
}
