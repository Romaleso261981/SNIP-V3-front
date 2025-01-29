import { AboutStrapiResponce } from "@/types/apiStrapiTypes";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";

export default async function BottomDescription({
  data
}: {
  data: AboutStrapiResponce;
}) {
  const {
    bottomFirstText,
    bottomSecondText,
    desctopSeparatorImage,
    separatorImageMobile
  } = data;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="hidden md:flex">
        <Image
          src={getStrapiMedia(desctopSeparatorImage.url) || ""}
          alt="Separator"
          width={2400}
          height={10}
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="flex md:hidden">
        <Image
          src={getStrapiMedia(separatorImageMobile.url) || ""}
          width={2400}
          height={separatorImageMobile.height}
          objectFit="cover"
          alt="Separator"
          loading="lazy"
        />
      </div>
      <div className="w-full flex flex-col justify-center gap-3 text-black items-center px-2 py-10 sm:w-3/4 md:w-2/6 md:justify-between md:px-3">
        <p className="py-10 ">
          {bottomFirstText}
        </p>
        <div className="w-2/4 border-b border-b-gold" />
        <p className="py-10">
          {bottomSecondText}
        </p>
      </div>
    </div>
  );
}
