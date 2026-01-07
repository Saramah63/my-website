import { NextResponse } from "next/server";

export const runtime = "nodejs";

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
    const type = String(body?.type || "").toLowerCase();

    // فقط این‌ها را ساپورت کن
    let targetPath: string | null = null;

    if (type === "feedback") targetPath = "/api/feedback";
    // اگر agreement هم داری:
    // if (type === "agreement") targetPath = "/api/agreements";

    if (!targetPath) {
      return NextResponse.json(
        { ok: false, error: "Unsupported type for /api/submit" },
        { status: 400 }
      );
    }

    const url = new URL(targetPath, req.url);

    const upstream = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const parsed = await readJsonOrText(upstream);

    // اگر HTTP upstream خطا بود
    if (!upstream.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: `Upstream HTTP ${upstream.status}. First 200 chars: ${String(parsed.text || "").slice(0, 200)}`,
        },
        { status: 500 }
      );
    }

    // اگر JSON بود و گفت ok:false
    if (parsed.isJson && parsed.json?.ok === false) {
      return NextResponse.json(
        { ok: false, error: parsed.json?.error || "Upstream returned ok:false" },
        { status: 500 }
      );
    }

    // در غیر این صورت (HTTP 200 حتی اگر متن ساده باشد) => موفق
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Submit API error" },
      { status: 500 }
    );
  }
}
