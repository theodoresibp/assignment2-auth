import { NextRequest, NextResponse } from 'next/server';
import { decode } from 'next-auth/jwt';

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('next-auth.session-token')?.value;
  const payload = await decode({
    token,
    secret: process.env.NEXTAUTH_SECRET as string,
  });

  if (!payload) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  if (req.nextUrl.pathname.startsWith('/admin') && payload?.role === 'ADMIN') {
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  if (req.nextUrl.pathname.startsWith('/dashboard') && payload?.role === 'USER') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  if (req.nextUrl.pathname.startsWith('/login') && payload?.name) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*', '/'],
};
