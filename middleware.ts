import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");

  const allowedOrigins = ["*"];
  const isOriginAllowed = origin !== null && allowedOrigins.includes(origin);

  const response = NextResponse.next();


  if (isOriginAllowed) {
    response.headers.set("Access-Control-Allow-Origin", origin!); // Using "!" to assert that origin is not null
  }


  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  response.headers.set("Access-Control-Max-Age", "86400");

  return response;
}

export const config = {
  matcher: "/api/:path*"
};
