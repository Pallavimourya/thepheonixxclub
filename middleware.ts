import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Auth routes
  const authRoutes = ['/auth/signin', '/auth/signup'];
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));

  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/:path*'],
}; 