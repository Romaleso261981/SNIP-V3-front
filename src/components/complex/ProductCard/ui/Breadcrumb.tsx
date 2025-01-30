import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function Breadcrumb({ locale }) {
  const t = useTranslations("ProductCard");

  return (
    <div className="w-full flex flex-row">
      <Link
        href={`/${locale}/buy-from-us`}
        className="flex items-center mx-4 mb-3 cursor-pointer"
      >
        {t("backButtonText")}
      </Link>
    </div>
  );
}
