import Image from "next/image";

import { DoItYourselfResponce } from "@/types/apiStrapiTypes";
import { useTranslations } from "next-intl";

import { getStrapiMedia } from "@/utils/api-helpers";

export default function DoItYourself({ data }: { data: DoItYourselfResponce }) {
  const t = useTranslations("DoItYourself");

  const url = getStrapiMedia(data.examples[0].image.url);

  return (
    <div>
      <div className="flex flex-col justify-center items-center px-8">
        <h3 className="text-gold font-montserrat font-weight-500 text-2xl pb-4">
          {data ? data.main.title : t("title")}
        </h3>
        <p className="text-center pb-4 text-black font-montserrat font-weight-500 text-2xs">
          {data ? data.main.text : t("text")}
        </p>
        <p className="text-center text-black font-montserrat font-weight-500 text-2xs">
          {data ? data.main.bottomText : t("mainBottomText")}
        </p>
      </div>
      <div className="text-center flex flex-col items-center mt-14 mb-14">
        <Image
          alt="bg"
          src={url || ""}
          width={data.examples[0].image.width}
          height={data.examples[0].image.height}
          className="mb-4"
        />
        <h4 className="text-black font-montserrat font-weight-500 text-2xs">
          {data ? data.examples[0].title : t("examplesText")}
        </h4>
      </div>
    </div>
  );
}
