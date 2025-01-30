import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";
import React from "react";

export default function CardImage({ image }: { image: string }) {
  const imageUrl = getStrapiMedia(image);

  return (
    <div className="">
      <Image
        src={imageUrl || ""}
        alt="Image description"
        layout="responsive"
        width={100}
        height={200}
      />
    </div>
  );
}
