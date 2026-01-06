"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Lang = "fa" | "en";

function getTodayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function AgreementForm({ lang }: { lang: Lang }) {
  const isFa = lang === "fa";
  const pdfUrl = isFa ? "/agreements/agreement-fa.pdf" : "/agreements/agreement-en.pdf";

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // Fixed packages (no API)
  const packageOptions = useMemo(
    () => [
      { value: "single_session", fa: "جلسه تکی", en: "Single Session" },
      { value: "monthly_package", fa: "پکیج ماهانه", en: "Monthly Package" },
      { value: "three_month_package", fa: "پکیج سه ماهه", en: "3-Month Package" },
    ],
    []
  );

  const [sessionType, setSessionType] = useState<string>(packageOptions[0].value);

  // Signature pad
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);
  const hasDrawn = useRef(false);

  const labels = useMemo(() => {
    return {
      title: isFa ? "فرم تایید و امضای قرارداد" : "Agreement Confirmation & Signature",
      name: isFa ? "نام و نام خانوادگی" : "Full name",
      email: "Email",
      phone: isFa ? "شماره تماس" : "Phone",
      package: isFa ? "نوع جلسه / پکیج" : "Session type / Package",
      sessionDate: isFa ? "تاریخ شروع/جلسه" : "Session date/start",
      notes: isFa ? "توضیحات / هدف" : "Notes / Goals",
      consent: isFa ? "قرارداد را خوانده‌ام و تایید می‌کنم." : "I have read and accept the agreement.",
      sig: isFa ? "امضای دیجیتال (با ماوس یا لمس)" : "Digital signature (mouse/touch)",
      clear: isFa ? "پاک کردن امضا" : "Clear signature",
      viewPdf: isFa ? "مشاهده PDF" : "View PDF",
      submit: isFa ? "ثبت و ذخیره قرارداد" : "Submit & Save Agreement",
      submitting: isFa ? "در حال ارسال..." : "Submitting...",
      ok: isFa ? "با موفقیت ذخیره شد." : "Saved successfully.",
      sigRequired: isFa ? "لطفاً امضا کنید." : "Please provide a signature.",
    };
  }, [isFa]);

  useEffect(() => {
    // Ensure canvas has correct pixel ratio for crisp signature
    const c = canvasRef.current;
    if (!c) return;

    const resize = () => {
      const rect = c.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      c.width = Math.floor(rect.width * dpr);
      c.height = Math.floor(rect.height * dpr);

      const ctx = c.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineWidth = 2.2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "rgba(255,255,255,0.92)";
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  function getPos(e: PointerEvent, canvas: HTMLCanvasElement) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return { x, y };
  }

  function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    c.setPointerCapture(e.pointerId);
    drawing.current = true;
    const p = getPos(e.nativeEvent, c);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  }

  function onPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current) return;
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const p = getPos(e.nativeEvent, c);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    hasDrawn.current = true;
  }

  function onPointerUp(e: React.PointerEvent<HTMLCanvasElement>) {
    const c = canvasRef.current;
    if (!c) return;
    drawing.current = false;
    try {
      c.releasePointerCapture(e.pointerId);
    } catch {}
  }

  function clearSignature() {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, c.width, c.height);
    hasDrawn.current = false;
  }

  function signatureDataUrl(): string | null {
    const c = canvasRef.current;
    if (!c) return null;
    if (!hasDrawn.current) return null;
    return c.toDataURL("image/png");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setDone(false);

    const sig = signatureDataUrl();
    if (!sig) {
      setErr(labels.sigRequired);
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      type: "agreement",
      lang,
      submittedAt: new Date().toISOString(),
      page: window.location.pathname,

      // fields
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      sessionType, // fixed select
      sessionDate: String(fd.get("sessionDate") || ""),
      notes: String(fd.get("notes") || ""),
      consent: true, // this is the YES column
      signaturePngBase64: sig,
    };

    setLoading(true);
    try {
      const res = await fetch("/api/agreements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: any = null;
      try {
        data = JSON.parse(text);
      } catch {
        data = null;
      }

      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || "Submission failed");
      }

      setDone(true);
      window.open(pdfUrl, "_blank", "noopener,noreferrer");
    } catch (e: any) {
      setErr(e?.message || "Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h3 className="h3">{labels.title}</h3>

      <form className="form" onSubmit={onSubmit}>
        <div className="grid2">
          <div className="field">
            <label className="label">{labels.name}</label>
            <input className="input" name="name" required />
          </div>

          <div className="field">
            <label className="label">{labels.email}</label>
            <input className="input" type="email" name="email" required />
          </div>
        </div>

        <div className="grid2">
          <div className="field">
            <label className="label">{labels.phone}</label>
            <input className="input" name="phone" />
          </div>

          <div className="field">
            <label className="label">{labels.package}</label>
            <select
              className="input"
              value={sessionType}
              onChange={(e) => setSessionType(e.target.value)}
              required
            >
              {packageOptions.map((p) => (
                <option key={p.value} value={p.value}>
                  {isFa ? p.fa : p.en}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="field">
          <label className="label">{labels.sessionDate}</label>
          <input className="input" type="date" name="sessionDate" defaultValue={getTodayISO()} required />
        </div>

        <div className="field">
          <label className="label">{labels.notes}</label>
          <textarea className="textarea" name="notes" rows={4} />
        </div>

        <div className="field">
          <label className="label">{labels.sig}</label>
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: 12,
              background: "rgba(255,255,255,0.04)",
              padding: 10,
            }}
          >
            <canvas
              ref={canvasRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              style={{
                width: "100%",
                height: 160,
                display: "block",
                borderRadius: 10,
              }}
            />
            <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button type="button" className="btn" onClick={clearSignature}>
                {labels.clear}
              </button>
              <a className="btn" href={pdfUrl} target="_blank" rel="noopener noreferrer">
                {labels.viewPdf}
              </a>
            </div>
          </div>
        </div>

        <label style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <input type="checkbox" required />
          <span className="muted" style={{ lineHeight: 1.7 }}>
            {labels.consent}
          </span>
        </label>

        {err && <p className="note err">{err}</p>}
        {done && <p className="note ok">{labels.ok}</p>}

        <button className="btn btnPrimary" type="submit" disabled={loading}>
          {loading ? labels.submitting : labels.submit}
        </button>
      </form>
    </div>
  );
}
