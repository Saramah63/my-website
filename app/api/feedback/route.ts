import { NextResponse } from "next/server";

export const runtime = "nodejs";

const FEEDBACK_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbyqk1jBw_vpe_GVwmFhryc7tJC-ly4zvQBFex4jDR8iIbklsFfDgw3bQy7CrFhn2OOliw/exec";

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
    const body = await req.json();

    const ratingNum = Number(body?.rating ?? 0);
    const rating = Number.isFinite(ratingNum) ? ratingNum : 0;

    // بهتر: ip و userAgent را از هدرها بگیر (قابل اعتمادتر از کلاینت)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "";
    const userAgent = req.headers.get("user-agent") || "";

    const payload = {
      type: "feedback",
      lang: String(body?.lang || "en"),
      source: String(body?.source || "website"),
      fullName: String(body?.fullName || body?.name || ""),
      email: String(body?.email || ""),
      rating,
      message: String(body?.message || ""),
      allowPublish: Boolean(body?.allowPublish ?? false),
      ip,
      userAgent,
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
    

    return NextResponse.json(
      { ok: true },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Feedback API error" },
      { status: 500 }
    );
  }
}
