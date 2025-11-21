import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const token =
    req.cookies.get("adminToken")?.value ||
    req.headers.get("authorization")?.split(" ")[1];

  const url = req.nextUrl.clone();

  // Allow login route
  if (url.pathname.startsWith("/login")) {
    return NextResponse.next();
  }

  // If no token → redirect
  if (!token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Verify token
  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    return NextResponse.next();
  } catch {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
