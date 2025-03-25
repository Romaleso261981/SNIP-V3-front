"use client";

import { AboutStrapiResponce } from "@/types/apiStrapiTypes";
import { getStrapiMedia } from "@/utils/api-helpers";
import TextTruncate from "@/utils/truncateText";
import Image from "next/image";

export default function MidleDescription({
  data,
}: {
  data: AboutStrapiResponce;
}) {
  const { rightFounder, leftFounder, mobileImage, gallery } = data;

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex md:hidden '>
        <Image
          src={getStrapiMedia(mobileImage[0].url) || ""}
          alt='image5'
          width={mobileImage[0].width}
          height={mobileImage[0].height}
          objectFit='cover'
        />
      </div>
      <div className='hidden  md:flex md:flex-row md:justify-center px-3 items-start w-full text-center'>
        {gallery[0].images.map((image, index) => {
          const imageUrl = getStrapiMedia(image.url);

          return (
            <div key={index} className='w-4/5 md:h-96 overflow-hidden'>
              <Image
                src={imageUrl || ""}
                alt='Gallery Image'
                width={700}
                height={2200}
              />
            </div>
          );
        })}
      </div>
      <div className='flex flex-col text-black justify-center items-center my-20 md:flex-row md:justify-around md:px-3'>
        <div className='border-gold border-t-2 py-6 px-2 md:w-2/6 md:h-full'>
          <TextTruncate
            text={leftFounder}
            maxLength={260}
            linkColorClass='text-black'
          />
        </div>
        <div className='border-gold border-t-2 py-6 px-2 md:w-2/6 md:h-full'>
          <TextTruncate
            text={rightFounder}
            maxLength={270}
            linkColorClass='text-black'
          />
        </div>
      </div>
    </div>
  );
}
