"use client";

import { BasketContext } from "@/contexts/basketContext";
import React, { useContext } from "react";

export default function AddToBasketButton({ buttonText, product }) {
  const { addCardToBasket } = useContext(BasketContext);

  return (
    <div
      className="flex w-full h-14 xl:justify-center md:w-1/3 md:mt-20"
      onClick={() => addCardToBasket(product)}
    >
      <button className="inline-block px-4 py-2 mt-4 text-sm w-full font-semibold text-white transition duration-200 ease-in-out bg-gold hover:bg-zinc-600">
        {buttonText}
      </button>
    </div>
  );
}
