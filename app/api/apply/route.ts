import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { EMAIL_PASS, EMAIL_USER, NOTIFICATION_EMAIL } from "@/lib/siteConfig";

const STORE_PATH = path.join(process.cwd(), "data", "applications.json");
const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;

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
    name: String(body?.name || "").trim(),
    email: String(body?.email || "").trim(),
    location: String(body?.location || "").trim(),
    primaryGoal: String(body?.primaryGoal || "").trim(),
    constraint: String(body?.constraint || "").trim(),
    format: String(body?.format || "").trim(),
    budget: String(body?.budget || "").trim(),
    website: String(body?.website || "").trim(),
    createdAt: new Date().toISOString(),
  };

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  if (!payload.name || !payload.email || !payload.constraint) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  try {
    // NOTE: This file-based storage is intended for dev only.
    // Replace with your database or email delivery in production.
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

    if (EMAIL_USER && EMAIL_PASS && NOTIFICATION_EMAIL) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: EMAIL_USER, pass: EMAIL_PASS },
      });

      await transporter.sendMail({
        from: EMAIL_USER,
        to: NOTIFICATION_EMAIL,
        subject: "New Strategic Session आवेदन / Apply submission",
        text: [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Location: ${payload.location}`,
          `Primary goal: ${payload.primaryGoal}`,
          `Constraint: ${payload.constraint}`,
          `Format: ${payload.format}`,
          `Budget: ${payload.budget}`,
          `Created: ${payload.createdAt}`,
        ].join("\n"),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Storage unavailable. Please try again later." },
      { status: 500 }
    );
  }
}
