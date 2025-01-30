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
      <div className="flex flex-col items-start w-full justify-around md:flex-row-reverse md:py-6">
        <div className="w-full h-auto md:w-1/2">
          <CardImage image={product.images[0].url} />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center md:pl-16 md:pr-24">
          <MainTitle product={product} />
          <div className="flex flex-row text-black pt-16 items-center justify-start w-full">
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
