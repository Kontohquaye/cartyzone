import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const session = req.cookies.get("cartyzone-session.token");
  const pathname = req.nextUrl.pathname.toLowerCase();

  const protectedRoutes = ["/dashboard", "/orders", "/checkout"];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (!session && isProtected) {
    return NextResponse.redirect(new URL("/account/login", req.url));
  }

  if (session && pathname === "/account/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/orders/:path*",
    "/checkout/:path*",
    "/account/login",
  ],
};
