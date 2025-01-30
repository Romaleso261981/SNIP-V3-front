import { Card } from "@/types/apiStrapiTypes";
import { useTranslations } from "next-intl";
import {
  AddToBasketButton,
  BottomText,
  Breadcrumb,
  CardImage,
  Includes,
  MainTitle,
  Material,
  Size
} from "./ui";

export default function ProductCard({
  product,
  locale
}: {
  locale: string;
  product: Card;
}) {
  const t = useTranslations("ProductCard");

  return (
    <div className="container">
      <Breadcrumb locale={locale} />
      <div className="flex flex-col items-start py-4 w-full justify-around md:flex-row-reverse md:py-6">
        <div className="w-full h-auto md:max-w-xl">
          <CardImage images={product.images} />
        </div>
        <div className="w-full flex flex-col justify-center items-center md:pl-16 md:pr-24 md:w-1/2">
          <MainTitle product={product} />
          <div className="flex flex-row pr-2 justify-between text-black pt-16 items-center md:justify-start w-full">
            <Size product={product} />
            <Material product={product} />
          </div>
          <Includes product={product} />
          <AddToBasketButton buttonText={t("addToBasket")} product={product} />
          <BottomText />
        </div>
      </div>
    </div>
  );
}
