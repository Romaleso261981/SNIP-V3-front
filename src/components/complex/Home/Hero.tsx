import { FC } from "react";
import Image from "next/image";

import { StrapiImage } from "@/types/apiStrapiTypes";
import { getStrapiMedia } from "@/utils/api-helpers";

type HeroSectionProps = {
  title: string;
  video: StrapiImage;
};

const HeroSection: FC<HeroSectionProps> = ({ title, video: image }) => {
  const imageUrl = getStrapiMedia(image.url) || "/default-image.jpg";

  return (
    <div className='relative overflow-hidden h-screen'>
      <Image
        src={imageUrl}
        alt='Galery Image'
        fill
        className='object-cover'
        sizes='(max-width: 768px) 100vw, 1200px'
      />
      <div className='absolute inset-0 z-10 flex flex-col items-center justify-end h-full text-center text-white bg-opacity-20'>
        <h2 className='text-4xl font-medium md:text-5xl font-montserrat lg:text-[45px] mb-8'>
          {title}
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
