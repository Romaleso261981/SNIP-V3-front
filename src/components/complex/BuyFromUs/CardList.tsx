import Image from "next/image";
import { getStrapiMedia } from "@/utils/api-helpers";
import Link from "next/link";
import { Card, NaboriResponce } from "@/types/apiStrapiTypes";

type CardListProps = {
  cards: NaboriResponce;
};

export default function CardList({ cards }: CardListProps) {
  return (
    <div className='w-full text-center text-gold flex flex-wrap gap-3 justify-center border-gold mt-15 mb-14 md:my-5'>
      {cards.map((card: Card) => {
        const imageUrl = getStrapiMedia(card.gallery.images[0].url) || "";
        return (
          <Link
            href={`product/${card.id}`}
            key={card.id}
            className='flex items-center justify-center w-full md:w-1/4'
          >
            <div className='flex flex-col items-center justify-center w-full md:w-1/2 border border-gold p-4 rounded-sm shadow-lg transition-transform transform hover:scale-105 overflow-hidden group'>
              <div className='relative overflow-hidden w-full h-auto'>
                <Image
                  src={imageUrl}
                  alt={
                    card.gallery.images[0].url
                      ? "Product image"
                      : "Placeholder image"
                  }
                  width={card.gallery.images[0].width}
                  height={card.gallery.images[0].height}
                  className='transition-transform duration-500 transform group-hover:translate-x-[-10%]'
                />
              </div>
              <div className='flex items-center gap-2 py-5 md:flex-col'>
                <h4 className='font-medium text-sm'>{card.name}</h4>
                <span>{card.price} грн</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
