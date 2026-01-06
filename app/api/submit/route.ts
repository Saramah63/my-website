import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const type = String(body?.type || "").toLowerCase();

    if (type === "feedback") {
      // same host internal call
      const url = new URL("/api/feedback", req.url);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const text = await res.text();
      return new NextResponse(text, {
        status: res.status,
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
      });
    }

    // اگر agreement یا چیز دیگری داری، اینجا می‌تونی روت خودش را صدا بزنی
    return NextResponse.json({ ok: false, error: "Unsupported type for /api/submit" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Submit API error" }, { status: 500 });
  }
}
