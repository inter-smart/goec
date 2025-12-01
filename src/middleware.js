import { NextResponse } from "next/server";

export function middleware(request) {
  const userAgent = request.headers.get("user-agent") || "";

  // Quick inline detection for best performance
  const isMobile = /android.+mobile|ip(hone|od)|mobile/i.test(userAgent);

  // Clone the request headers and add device info
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-device-type", isMobile ? "mobile" : "desktop");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Apply middleware to all routes except static files and API
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
