"use client";

import useTranslation from "next-translate/useTranslation";

export default function ClientPage() {
  const { t, lang } = useTranslation("common");
  return <h1>{t("example")}</h1>;
}
