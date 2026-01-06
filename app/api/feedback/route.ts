import { NextResponse } from "next/server";

export const runtime = "nodejs";

const FEEDBACK_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbyqk1jBw_vpe_GVwmFhryc7tJC-ly4zvQBFex4jDR8iIbklsFfDgw3bQy7CrFhn2OOliw/exec";

async function readJsonOrText(res: Response) {
  const text = await res.text();
  try {
    return { isJson: true, json: JSON.parse(text), text };
  } catch {
    return { isJson: false, json: null as any, text };
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // سخت‌گیرانه: payload نهایی را استاندارد می‌کنیم
    const payload = {
      type: "feedback",
      lang: body.lang || "en",
      source: body.source || "website",
      fullName: body.fullName || body.name || "",
      email: body.email || "",
      rating: Number(body.rating || 0),
      message: body.message || "",
    };

    const upstream = await fetch(FEEDBACK_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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

    // اگر JSON و ok:false بود -> fail
    if (parsed.isJson && parsed.json?.ok === false) {
      return NextResponse.json({ ok: false, error: parsed.json?.error || "Upstream ok:false" }, { status: 500 });
    }

    // در غیر این صورت success
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Feedback API error" }, { status: 500 });
  }
}
