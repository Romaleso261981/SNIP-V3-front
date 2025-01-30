"use client";

import Image from "next/image";
import { getStrapiMedia } from "@/utils/api-helpers";
import Link from "next/link";
import { Card } from "@/types/apiStrapiTypes";
import { useTranslations } from "use-intl";
import usePagination from "@/hooks/usePagination";
import { Pagination } from "@mui/material";
import { useState } from "react";

export default function ProductList({ cards }: { cards: Card[] }) {
  const [page, setPage] = useState(1);
  const perPage = 5;
  const count = Math.ceil(cards.length / perPage);
  const t = useTranslations("ProductsList");
  const DATA = usePagination(cards, perPage);

  const cardList = DATA.currentData();

  const handleChange = (_: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    DATA.jump(p);
  };

  return (
    <div>
      <div className="w-full text-center text-gold grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-3 justify-center border-gold mt-15 mb-14 md:my-5">
        {cardList.map((card: Card) => {
          const imageUrl = getStrapiMedia(card.images[0]?.url);
          return (
            <Link
              href={`product/${card.id}`}
              key={card.id}
              className="flex items-center justify-center w-full"
            >
              <div className="flex flex-col items-center justify-center h-full w-full border border-gold p-4 rounded-sm shadow-lg 2xl:p-2 sm:justify-between overflow-hidden">
                {imageUrl && (
                  <div className="w-full h-96 relative overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={card.name || "Product image"}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-all duration-500 ease-in-out transform hover:scale-150 hover:animate-move-horizontal"
                    />
                  </div>
                )}
                <div className="flex items-center gap-2 py-5 md:flex-col">
                  <h4 className="font-medium text-sm">{card.name}</h4>
                  <span>
                    {card.price} {t("currency")}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Пагінація */}
      <div className="flex flex-col gap-3 mb-7 justify-center items-center mt-auto md:flex-row md:justify-around md:py-10 md:px-5">
        <Pagination
          count={count}
          page={page}
          color="standard"
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />

        <div className="flex flex-row gap-3 text-center md:ms-auto">
          {DATA.maxPage === page ? cards.length : perPage * page}
          <span>{t("of")}</span>
          {cards.length}
        </div>
      </div>
    </div>
  );
}
