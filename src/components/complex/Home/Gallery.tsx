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
  if (!gallery) return <Loader />;

  return (
    <div className="mx-auto">
      <div className="hidden  md:flex md:flex-row md:justify-center px-3 items-start w-full text-center">
        {gallery.images.map((image, index) => {
          const imageUrl = getStrapiMedia(image.url);
          return (
            <div key={index} className="w-4/5 md:h-96 overflow-hidden">
              <Image
                src={imageUrl || ""}
                alt="Gallery Image"
                width={700}
                height={1200}
              />
            </div>
          );
        })}
      </div>
      <EmblaCarousel images={gallery.images} />
    </div>
  );
};

export default GallerySection;
