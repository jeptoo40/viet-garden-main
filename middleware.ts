import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export function middleware(req: NextRequest) {
  const token =
    req.cookies.get("adminToken")?.value ||
    req.headers.get("authorization")?.split(" ")[1];

  const url = req.nextUrl.clone();

  console.log("🛡️ Middleware checking:", url.pathname);
  console.log("🍪 Token from cookie:", token ? token.substring(0, 20) + "..." : "NONE");

  // Allow login route
  if (url.pathname.startsWith("/login")) {
    console.log("✅ Allowing /login route");
    return NextResponse.next();
  }

  // If no token → redirect
  if (!token) {
    console.log("❌ No token found, redirecting to /login");
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Verify token using jose (Edge Runtime compatible)
  const jwtSecret = process.env.JWT_SECRET;
  console.log("🔑 JWT_SECRET exists:", !!jwtSecret);

  if (!jwtSecret) {
    console.error("❌ JWT_SECRET is not set in environment!");
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return jwtVerify(token, new TextEncoder().encode(jwtSecret))
    .then((result) => {
      console.log("✅ Token verified successfully:", result.payload);
      return NextResponse.next();
    })
    .catch((error) => {
      console.error("❌ Token verification failed:", error.message);
      url.pathname = "/login";
      return NextResponse.redirect(url);
    });
}

export const config = {
  matcher: ["/admin/:path*"],
};
