import { AboutStrapiData } from "@/types/apiStrapiTypes";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

type DescriptionSectionProps = {
  about: AboutStrapiData;
};

const DescriptionSection: FC<DescriptionSectionProps> = ({ about }) => {
  const t = useTranslations("HomePage");
  return (
    <div className='flex flex-col mx-auto pt-10 justify-center items-center md:w-full md:max-w-xl xl:my-32'>
      <div className='flex flex-col justify-center items-center w-full text-center p-4 pb-8'>
        <h2 className='text-gold font-medium text-3xl leading-custom-2 mb-12'>
          {about.title}
        </h2>
        <p className='w-full text-black font-medium leading-custom-1 mt-4'>
          {about.text}
        </p>
        <Link
          className='md:w-[210px] md:h-[50px] md:mt-16 flex mt-16 justify-center items-center w-full h-12 text-md text-gold border-gold border-2 shadow hover:bg-gray-100'
          href='/'
          aria-label='link to about page'
        >
          {t("buttonName")}
        </Link>
      </div>
    </div>
  );
};

export default DescriptionSection;
