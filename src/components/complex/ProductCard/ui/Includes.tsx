import { useTranslations } from "next-intl";
import React from "react";

export default function Includes({ product }) {
  const t = useTranslations("ProductCard");

  return (
    <div className="pt-5 text-black md:pt-16">
      <h4 className="font-bold pb-2">
        {t("includesTitle")}
      </h4>
      <div className="">
        <p>
          {product.includes}
        </p>
      </div>
    </div>
  );
}
