import { InviteUsStrapiResponce } from "@/types/apiStrapiTypes";
import { useTranslations } from "next-intl";
import { FC } from "react";

type InviteUsDescriptionProps = {
  data: InviteUsStrapiResponce;
};

const InviteUsDescription: FC<InviteUsDescriptionProps> = ({ data }) => {
  const {
    hero: { title },
  } = data;

  const t = useTranslations("InviteUs");
  return (
    <div className='mx-auto w-full sm:max-w-3xl md:my-4'>
      <div className='flex flex-col justify-center items-center w-full text-center'>
        <h2 className='font-normal py-6 text-xxl'>
          {title ? title : t("descriptionTitle")}
        </h2>
        <p className='w-full text-slate-600 font-medium text-md md:hidden'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          dignissimos laborum assumenda aut atque. Blanditiis libero repellendus
          vel impedit, ex dolorum omnis nam odit qui, quae veniam deserunt
          officia placeat.
          {/* {description ? description : t("descriptionTitle")} */}
        </p>
      </div>
    </div>
  );
};

export default InviteUsDescription;
