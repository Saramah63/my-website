import { NextResponse } from "next/server";

export const runtime = "nodejs";

// همین لینک exec فیدبک (همان پروژه‌ای که doGet/doPost دارد)
const FEEDBACK_WEBAPP =
  "https://script.google.com/macros/s/AKfycbyqk1jBw_vpe_GVwmFhryc7tJC-ly4zvQBFex4jDR8iIbklsFfDgw3bQy7CrFhn2OOliw/exec";

async function safeJson(res: Response) {
  const text = await res.text();
  try {
    return { json: JSON.parse(text), raw: text };
  } catch {
    return { json: null, raw: text };
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const lang = url.searchParams.get("lang") || "";   // "fa" | "en" | ""
    const limit = url.searchParams.get("limit") || "6";

    const upstreamUrl = new URL(FEEDBACK_WEBAPP);
    upstreamUrl.searchParams.set("lang", lang);
    upstreamUrl.searchParams.set("limit", limit);

    const upstream = await fetch(upstreamUrl.toString(), {
      method: "GET",
      cache: "no-store",
    });

    const { json, raw } = await safeJson(upstream);

    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, error: `Upstream HTTP ${upstream.status}` },
        { status: 500 }
      );
    }

    if (json?.ok === true && Array.isArray(json.items)) {
      // Normalize
      const items = json.items
        .filter((x: any) => x && Number(x.rating) >= 1 && String(x.message || "").trim())
        .map((x: any) => ({
          name: String(x.fullName || "Client"),
          rating: Number(x.rating || 5),
          text: String(x.message || ""),
          lang: String(x.lang || ""),
          timestamp: String(x.timestamp || ""),
          source: String(x.source || ""),
        }));

      return NextResponse.json({ ok: true, items });
    }

    return NextResponse.json(
      { ok: false, error: json?.error || `Invalid upstream JSON: ${raw.slice(0, 200)}` },
      { status: 500 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Testimonials API error" },
      { status: 500 }
    );
  }
}
