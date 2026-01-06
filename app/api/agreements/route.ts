import { NextResponse } from "next/server";

export const runtime = "nodejs";

// اینجا باید لینک Web App Agreement خودت را بگذاری (همان لینک agreement که ساختی)
const AGREEMENT_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbxhTH80nbsVmmGKaZqaCus9-xPIx4hsKkovFZ9A_ueSW7GGFe4wN2gSKp5TsS_cf1H7/exec";

async function readJsonOrText(res: Response) {
  const text = await res.text();
  try {
    return { isJson: true as const, json: JSON.parse(text), text };
  } catch {
    return { isJson: false as const, json: null, text };
  }
}

export async function GET() {
  return NextResponse.json({ ok: true });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const enriched = {
      ...body,
      ip: (req.headers.get("x-forwarded-for") || "").split(",")[0].trim(),
      userAgent: req.headers.get("user-agent") || "",
    };

    const upstream = await fetch(AGREEMENT_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enriched),
      redirect: "follow",
      cache: "no-store",
    });

    const parsed = await readJsonOrText(upstream);

    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, error: `Upstream HTTP ${upstream.status}. ${String(parsed.text || "").slice(0, 200)}` },
        { status: 500 }
      );
    }

    // اگر JSON بود و ok:false گفت
    if (parsed.isJson && parsed.json?.ok === false) {
      return NextResponse.json(
        { ok: false, error: parsed.json?.error || "Upstream ok:false" },
        { status: 500 }
      );
    }

    // در غیر این صورت موفق
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Agreements API error" }, { status: 500 });
  }
}
