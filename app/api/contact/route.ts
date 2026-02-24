import { NextResponse } from "next/server";

export const runtime = "nodejs";

const CONTACT_WEBHOOK_URL =
  process.env.CONTACT_WEBHOOK_URL || process.env.GOOGLE_SHEETS_WEBAPP_URL || "";

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
    if (!CONTACT_WEBHOOK_URL) {
      return NextResponse.json(
        { ok: false, error: "Missing CONTACT_WEBHOOK_URL (or GOOGLE_SHEETS_WEBAPP_URL)." },
        { status: 500 }
      );
    }

    const body = await req.json();

    const payload = {
      type: "contact",
      reason: String(body?.reason || "Donepage"),
      name: String(body?.name || ""),
      email: String(body?.email || ""),
      company: String(body?.company || ""),
      message: String(body?.message || ""),
      ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "",
      userAgent: req.headers.get("user-agent") || "",
      submittedAt: new Date().toISOString(),
    };

    const upstream = await fetch(CONTACT_WEBHOOK_URL, {
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
      { ok: false, error: err?.message || "Contact API error" },
      { status: 500 }
    );
  }
}
