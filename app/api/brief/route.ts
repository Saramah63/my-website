import { NextResponse } from "next/server";

export const runtime = "nodejs";

const BRIEF_WEBHOOK_URL =
  process.env.BRIEF_WEBHOOK_URL || process.env.GOOGLE_SHEETS_WEBAPP_URL || "";

async function readJsonOrText(res: Response) {
  const text = await res.text();
  try {
    return { isJson: true as const, json: JSON.parse(text), text };
  } catch {
    return { isJson: false as const, json: null, text };
  }
}

export async function POST(req: Request) {
  try {
    if (!BRIEF_WEBHOOK_URL) {
      return NextResponse.json(
        { ok: false, error: "Missing BRIEF_WEBHOOK_URL (or GOOGLE_SHEETS_WEBAPP_URL)." },
        { status: 500 }
      );
    }

    const body = await req.json();

    const payload = {
      type: "brief",
      plan: String(body?.plan || "launch"),
      businessName: String(body?.businessName || ""),
      contactEmail: String(body?.contactEmail || ""),
      websiteGoal: String(body?.websiteGoal || ""),
      targetAudience: String(body?.targetAudience || ""),
      mainOffer: String(body?.mainOffer || ""),
      problemYouSolve: String(body?.problemYouSolve || ""),
      desiredCta: String(body?.desiredCta || ""),
      brandColors: String(body?.brandColors || ""),
      domain: String(body?.domain || ""),
      deadlineUrgency: String(body?.deadlineUrgency || ""),
      ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "",
      userAgent: req.headers.get("user-agent") || "",
      submittedAt: new Date().toISOString(),
    };

    const upstream = await fetch(BRIEF_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
      cache: "no-store",
    });

    const parsed = await readJsonOrText(upstream);

    if (!upstream.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: `Upstream HTTP ${upstream.status}. ${String(parsed.text || "").slice(0, 200)}`,
        },
        { status: 500 }
      );
    }

    if (parsed.isJson && parsed.json?.ok === false) {
      return NextResponse.json(
        { ok: false, error: parsed.json?.error || "Upstream ok:false" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Brief API error" },
      { status: 500 }
    );
  }
}
