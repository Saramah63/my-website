import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (!req.nextUrl.pathname.startsWith("/admin")) return NextResponse.next();

  const user = process.env.ADMIN_USER || "admin";
  const pass = process.env.ADMIN_PASS || "password";

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) {
    return new NextResponse("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Admin"' },
    });
  }

  const base64 = auth.replace("Basic ", "");
  const [u, p] = Buffer.from(base64, "base64").toString().split(":");

  if (u === user && p === pass) return NextResponse.next();

  return new NextResponse("Forbidden", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin"' },
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};
