import Loader from "@/components/ui/Loader";
import EmblaCarousel from "@/components/ui/Carousel";
import { HomeGalaryStrapiData } from "@/types/apiStrapiTypes";
import { FC } from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/utils/api-helpers";

type GallerySectionProps = {
  gallery: HomeGalaryStrapiData;
};

const GallerySection: FC<GallerySectionProps> = ({ gallery }) => {
  console.log("gallery", gallery);

  if (!gallery) return <Loader />;

  return (
    <div className="container mx-auto">
      <div className="hidden md:flex md:flex-wrap justify-center items-center text-center p-4 pb-8">
        {gallery.images.map(image => {
          return (
            <div
              className="w-full sm:w-1/2 md:w-1/4 h-full p-2 md:p-0 "
              key={image.id}
            >
              <div className="relative w-full h-0 pb-[66.66%]">
                <Image
                  src={getStrapiMedia(image.url) || ""}
                  alt="Gallery Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          );
        })}
      </div>
      <EmblaCarousel images={gallery.images} />
    </div>
  );
};

export default GallerySection;
