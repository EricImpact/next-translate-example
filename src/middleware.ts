import { NextRequest, NextResponse } from "next/server";

import i18n from "../i18n.json";

export function middleware(request: NextRequest) {
  const matches = request.nextUrl.pathname.match(
    /(?:api|_next\/static|_next\/image|assets|img|favicon\.ico|sw\.js).*/
  );
  const path = request.nextUrl.pathname;

  // If URL contains a match, do not process any other middleware
  if (matches) return NextResponse.next();

  const locale = request.nextUrl.locale || i18n.defaultLocale;

  // If the request does not include the locale, redirect to include the locale
  if (!request.nextUrl.pathname.includes(locale)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${request.nextUrl.pathname}`;
    return NextResponse.redirect(url);
  }

  // Finally, if we get here return response
  return NextResponse.next();
}
