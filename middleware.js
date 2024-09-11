import { matchesMiddleware } from 'next/dist/shared/lib/router/router';
import { NextResponse } from 'next/server';

export default function middleware(request) {
  return NextResponse.next();
}
let whatever;
export const config = { matcher: `/api` };
