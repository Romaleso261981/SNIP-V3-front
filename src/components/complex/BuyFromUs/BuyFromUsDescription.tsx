import { BuyFromUsResponce } from "@/types/apiStrapiTypes";

type BuyFromUsDescriptionProps = {
  data: BuyFromUsResponce;
};

export default function BuyFromUsDescription({
  data,
}: BuyFromUsDescriptionProps) {
  const {
    hero: { description, title, secondaryDescription },
  } = data;

  return (
    <div>
      <div>
        <div className='flex flex-col justify-center items-center px-8'>
          <h3 className='font-montserrat font-weight-500 text-2xl pb-4'>
            {title}
          </h3>
          <p className='text-center pb-4 text-black font-montserrat font-weight-500 text-2xs md:w-2/5'>
            {description}
          </p>
          <p className='text-center pb-4 text-black font-montserrat font-weight-500 text-2xs md:w-2/5'>
            {secondaryDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
