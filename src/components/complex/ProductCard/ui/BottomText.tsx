import { useTranslations } from "next-intl";
import React from "react";

export default function BottomText() {
  const t = useTranslations("ProductCard");

  return (
    <div className="pt-5 text-black md:pt-16">
      <p>
        {t("buttonText")}
        <span className="text-gold-light ml-2">
          {t("span")}
        </span>
      </p>
    </div>
  );
}
