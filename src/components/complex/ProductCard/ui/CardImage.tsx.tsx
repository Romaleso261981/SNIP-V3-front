"use client";

import { StrapiImage } from "@/types/apiStrapiTypes";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";
import React, { useState } from "react";

export default function CardImage({ images }: { images: StrapiImage[] }) {
  const [index, setIndex] = useState(0);

  const imageUrl = getStrapiMedia(images[index].url);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full">
        <Image
          src={imageUrl || ""}
          alt="Image description"
          layout="responsive"
          width={100}
          height={200}
        />
      </div>
      <div className="w-full flex flex-row gap-1">
        {images.map((item, i) => {
          const URL = getStrapiMedia(item.url);
          return (
            <div
              className="flex-1 my-1 cursor-pointer overflow-hidden"
              key={item.id}
              onClick={() => setIndex(i)}
              style={{ height: "100px" }}
            >
              <Image
                src={URL || ""}
                alt="images"
                layout="responsive"
                width={100}
                height={100}
                className="w-full object-cover md:h-3/4"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
