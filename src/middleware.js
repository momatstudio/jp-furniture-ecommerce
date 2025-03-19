import { getSession } from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const session = await getSession(request);

  // Protect routes that require authentication
  const isProtectedRoute = request.nextUrl.pathname.startsWith("/protected");

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: ["/protected/:path*"],
};
