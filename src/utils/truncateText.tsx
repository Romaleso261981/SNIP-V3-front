"use client";

import { useState } from "react";
import { cn } from "./common";

type TextTruncateProps = {
  text: string;
  maxLength: number;
  linkColorClass: string;
};

export default function TextTruncate({
  text,
  maxLength,
  linkColorClass
}: TextTruncateProps) {
  const [showMore, setShowMore] = useState(false);

  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + " ..." : text;

  return (
    <div className="flex justify-center items-center w-full">
      <p className="w-full md:w-2/3">
        {showMore ? text : truncatedText}
        {text.length > maxLength &&
          <span
            className={cn("cursor-pointer ml-2", linkColorClass)}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </span>}
      </p>
    </div>
  );
}
