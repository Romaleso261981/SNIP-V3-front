import { useTranslations } from "next-intl";
import React from "react";

export default function Size({ product }) {
  const t = useTranslations("ProductCard");

  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-bold">
        {t("sizeTitle")}
      </h4>
      <p className="">
        {product.size}
      </p>
    </div>
  );
}
