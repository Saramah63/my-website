import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { EMAIL_PASS, EMAIL_USER, NOTIFICATION_EMAIL, SITE_NAME } from "@/lib/siteConfig";

const STORE_PATH = path.join(process.cwd(), "data", "submissions.json");
const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;

function sanitize(input: string, max: number) {
  return String(input || "").trim().slice(0, max);
}

export async function POST(req: Request) {
  const hdrs = await headers();
  const ip = hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const record = rateMap.get(ip);
  if (!record || now - record.ts > RATE_WINDOW_MS) {
    rateMap.set(ip, { count: 1, ts: now });
  } else {
    if (record.count >= RATE_LIMIT) {
      return NextResponse.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 });
    }
    record.count += 1;
    rateMap.set(ip, record);
  }

  const body = await req.json().catch(() => ({}));

  const payload = {
    name: sanitize(body?.name, 120),
    email: sanitize(body?.email, 254),
    location: sanitize(body?.location, 40),
    primaryGoal: sanitize(body?.primaryGoal, 120),
    biggestConstraint: sanitize(body?.biggestConstraint, 2000),
    preferredFormat: sanitize(body?.preferredFormat, 20),
    budgetReadiness: sanitize(body?.budgetReadiness, 120),
    companyWebsite: sanitize(body?.companyWebsite, 120),
    lang: body?.lang === "fa" ? "fa" : "en",
    createdAt: new Date().toISOString(),
  };

  if (payload.companyWebsite) {
    return NextResponse.json({ ok: true, message: "Submitted successfully" });
  }

  if (!payload.name || !payload.email || !payload.location || !payload.primaryGoal || !payload.biggestConstraint || !payload.preferredFormat) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  try {
    if (!EMAIL_USER || !EMAIL_PASS || !NOTIFICATION_EMAIL) {
      console.error("Email config missing: EMAIL_USER/EMAIL_PASS/NOTIFICATION_EMAIL");
      return NextResponse.json(
        { ok: false, error: "Email delivery is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    try {
      await transporter.sendMail({
        from: `${SITE_NAME} <${EMAIL_USER}>`,
        to: NOTIFICATION_EMAIL,
        replyTo: payload.email,
        subject: `New Application – SaraMahmodi.com${payload.lang === "fa" ? " [FA]" : ""}`,
        text: [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Location: ${payload.location}`,
          `Primary goal: ${payload.primaryGoal}`,
          `Biggest constraint: ${payload.biggestConstraint}`,
          `Preferred format: ${payload.preferredFormat}`,
          `Budget readiness: ${payload.budgetReadiness}`,
          `Language: ${payload.lang}`,
          `Created: ${payload.createdAt}`,
          "",
          "JSON:",
          JSON.stringify(payload, null, 2),
        ].join("\n"),
      });
    } catch (err) {
      console.error("Email send failed", err);
      return NextResponse.json(
        { ok: false, error: "Email delivery failed. Please try again later." },
        { status: 500 }
      );
    }

    // NOTE: File-based storage is intended for local dev only.
    // Vercel/production file system is read-only, so skip it there.
    if (!process.env.VERCEL) {
      try {
        let current: unknown[] = [];
        try {
          const raw = await fs.readFile(STORE_PATH, "utf8");
          current = JSON.parse(raw) as unknown[];
        } catch {
          current = [];
        }

        current.push(payload);
        await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
        await fs.writeFile(STORE_PATH, JSON.stringify(current, null, 2));
      } catch (err) {
        console.error("Local storage failed", err);
      }
    }

    return NextResponse.json({
      ok: true,
      message: payload.lang === "fa" ? "ارسال با موفقیت انجام شد" : "Submitted successfully",
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Storage unavailable. Please try again later." },
      { status: 500 }
    );
  }
}
