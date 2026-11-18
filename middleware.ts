import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

/**
 * The portfolio, projects, blog, and generated résumé are public pages.
 * Only the admin dashboard is gated. The previous catch-all condition sent
 * every non-homepage URL to a sign-in route that is not part of this app.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname === "/admin" || pathname.startsWith("/admin/");

  if (!isAdminRoute) return NextResponse.next();

  const token = await getToken({ req: request });
  if (token?.role === "admin") return NextResponse.next();

  // No public sign-in flow is configured in this portfolio build.
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
