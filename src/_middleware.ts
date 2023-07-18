import { NextRequest, NextResponse } from "next/server";

import i18n from "../i18n.json";

export function middleware(request: NextRequest) {
  const matches = request.nextUrl.pathname.match(
    /(?:api|_next\/static|_next\/image|assets|img|favicon\.ico|sw\.js).*/
  );

  if (!matches) {
    const pathname = request.nextUrl.pathname;

    // Check if the locale is set
    const isMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (isMissingLocale) {
      const locale = request.nextUrl.locale || i18n.defaultLocale;
      return NextResponse.redirect(
        new URL(
          `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
          request.url
        )
      );
    }
  }
}

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
