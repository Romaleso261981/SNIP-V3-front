import { useTranslations } from "next-intl";
import React from "react";

export default function MainTitle({ product }) {
  const t = useTranslations("ProductCard");

  return (
    <div className="w-full flex flex-col items-start justify-start font-weight-500 text-black ">
      <h4 className=" py-2 md:text-xl md:pb-5">
        {product.name}
      </h4>
      <div className="w-full border-b border-gold" />
      <div className="flex flex-row items-end gap-2 md:text-xl md:pt-5">
        <span className="text-black text-xl">
          {product.price}
        </span>
        <span>
          {t("currency")}
        </span>
      </div>
    </div>
  );
}
