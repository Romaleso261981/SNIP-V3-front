"use client"; // Error boundaries must be Client Components
import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header/Header";

export default function Error() {
  const router = useRouter();

  return (
    <div>
      <Header className="text-gold" />
      <div className="w-full flex justify-center items-center min-h-screen">
        <div className="w-full flex py-6 flex-col  justify-center items-center h-full">
          <Image src="/error.png" width="400" alt="error image" height={400} />
          <div className="w-1/2 flex flex-col mt-16 items-center">
            <h1 className="w-3/4 text-center text-4xl">
              Ця сторінка загубилась у полі, як колосок на світанку{" "}
            </h1>
            <p className="w-2/3 text-center text-black mt-4 mb-16">
              На жаль, ми не змогли знайти сторінку, яку ви шукаєте.Але не
              хвилюйтесь — кожна соломина знаходить своє місце в наших виробах,
              і ми впевнені, що ви знайдете те, що шукаєте на нашому сайті.
            </p>
            <button
              className="p-4 w-72 ring-gold ring-1 hover:bg-black"
              onClick={() => router.push("/")}
            >
              Повернутись на головну
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
