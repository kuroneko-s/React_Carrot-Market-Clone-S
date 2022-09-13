import { NextResponse, userAgent, NextRequest } from "next/server";

export function middleware(request: NextRequest, response: NextResponse) {
  const ua = userAgent(request);
  if (ua.isBot || !request.cookies.get("carrot_session")) {
    request.nextUrl.searchParams.set("from", request.nextUrl.pathname);
    request.nextUrl.pathname = "/enter";

    // return NextResponse.redirect(request.nextUrl);
  }

  if (request.nextUrl.pathname.startsWith("/api")) {
    console.log("APi handler");
  }

  if (request.nextUrl.pathname.startsWith("/profile")) {
    console.log("only profile page");
  }

  return NextResponse.next();
}
