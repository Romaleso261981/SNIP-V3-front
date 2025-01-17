import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import { getByFromUsStrapiData } from "@/utils/fetch-api";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Buy from us",
  description:
    "We are a team of professionals who are passionate about their work. We are always ready to help you with the design of your home, office, or any other space. We are always ready to help you with the design of your home, office, or any other space."
};

export default async function page({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const { data } = await getByFromUsStrapiData(locale);

  console.log("buy-from-us data", data);

  return (
    <GeneralLayout>
      <h1>buy-from-us data</h1>
      {/* <BuyFromUsDescription data={data} /> */}
      {/* <ProductList cards={naboris} /> */}
    </GeneralLayout>
  );
}
