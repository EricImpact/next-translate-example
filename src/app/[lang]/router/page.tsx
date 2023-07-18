"use client";
import useTranslation from "next-translate/useTranslation";

import ComponentWithRouter from "./ComponentWithRouter";

export default function Example() {
  const { t, lang } = useTranslation("common");

  return (
    <main>
      <h1>{t("doc")}</h1>
      <h2>{lang}</h2>
      <ComponentWithRouter />
    </main>
  );
}
