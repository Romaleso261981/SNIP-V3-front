"use client";

import { useState } from "react";
import Image from "next/image";
import { DoItYourselfResponce } from "@/types/apiStrapiTypes";
import { useTranslations } from "next-intl";
import { getStrapiMedia } from "@/utils/api-helpers";

export default function DoItYourself({ data }: { data: DoItYourselfResponce }) {
  const t = useTranslations("DoItYourself");
  const [isHovered, setIsHovered] = useState(false);

  const url = getStrapiMedia(data.examples[0].image.url);

  return (
    <div className="w-full px-4 md:px-8">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-gold font-montserrat mt-9 font-weight-500 text-3xl pb-4">
          {data ? data.main.title : t("title")}
        </h3>
        <p className="text-center pb-4 text-black font-montserrat font-weight-500 text-2xs md:w-2/5">
          {data ? data.main.text : t("text")}
        </p>
        <p className="text-center text-black font-montserrat font-weight-500 text-2xs md:w-2/5">
          {data ? data.main.bottomText : t("mainBottomText")}
        </p>
      </div>

      <div className="text-center flex flex-col items-center mt-14 mb-14">
        <div className="relative">
          {isHovered
            ? <div className="flex justify-center px-2">
                <iframe
                  src="https://www.youtube.com/embed/Lm1nK9lkBw0?autoplay=1"
                  title="Різдвяний павук (як сплести октаедр?) набір для плетіння"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="mb-4 w-full h-72 md:w-96 md:h-72"
                />
              </div>
            : <div
                className="flex justify-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  alt="bg"
                  src={url || ""}
                  width={450}
                  height={450}
                  className="h-auto w-64 md:w-96"
                />
              </div>}
        </div>
        <h4 className="text-black font-montserrat font-weight-500 text-2xs">
          {data ? data.examples[0].title : t("examplesText")}
        </h4>
      </div>
    </div>
  );
}
