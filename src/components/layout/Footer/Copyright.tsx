"use client";

import { useTranslations } from "next-intl";

const Copyright = () => {
  const t = useTranslations("Footer.copyright");

  return (
    <span className="flex justify-end pt-5 text-gold">
      {t("text")}
    </span>
  );
};

export default Copyright;
