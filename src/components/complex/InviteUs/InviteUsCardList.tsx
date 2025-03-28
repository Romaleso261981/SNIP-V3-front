import Image from "next/image";
import { FC } from "react";
import { getStrapiMedia } from "@/utils/api-helpers";
import { useTranslations } from "next-intl";
import { StrapiImage } from "@/types/apiStrapiTypes";

type InviteUsCardListProps = {
  examples: {
    id: number;
    title: string;
    description: string;
    image: {
      url: string;
    };
  }[];
  gallery: StrapiImage[];
};

const InviteUsCardList: FC<InviteUsCardListProps> = ({ examples, gallery }) => {
  const t = useTranslations("InviteUs");

  return (
    <div className='hidden container mx-auto sm:flex flex-col md:w-full sm:max-w-max sd:mb-8'>
      <div className='flex flex-wrap justify-around items-start w-full text-center md:mb-5'>
        {examples.map((example, index) => (
          <article
            key={index}
            className='flex flex-col items-center w-full p-4 md:w-1/3 h-full min-h-[350px]'
          >
            <div className='flex flex-col items-center mx-auto h-full text-center'>
              <h3 className='w-full font-medium text-2xl text-gold md:text-3xl py-4 px-3 border-b-2 border-gold'>
                {example ? example.title : t("cardListText")}
              </h3>
              <p className='flex-grow w-10/12 text-slate-600 text-sm py-4 px-3'>
                {example ? example.description : t("cardListDescription")}
              </p>
              <div className='w-full flex justify-center'>
                <button className='w-full border border-gold text-gold text-sm mt-8 py-3 px-3 md:w-3/4'>
                  {t("cardListbuttonText")}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className='hidden  md:flex md:flex-row md:justify-center px-3 items-start w-full text-center'>
        {gallery.map((image, index) => {
          const imageUrl = getStrapiMedia(image.url);
          return (
            <div key={index} className='w-4/5 md:h-96 overflow-hidden'>
              <Image
                src={imageUrl || ""}
                alt='Gallery Image'
                width={700}
                height={1200}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InviteUsCardList;
