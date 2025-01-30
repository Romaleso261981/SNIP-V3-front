import { useTranslations } from "next-intl";
import React from "react";

export default function Material({ product }) {
  const t = useTranslations("ProductCard");

  return (
    <div className="flex flex-col gap-2 md:ml-36">
      <h4 className="font-bold">
        {t("materialTitle")}
      </h4>
      <p className="text-black">
        {product.material}
      </p>
    </div>
  );
}
