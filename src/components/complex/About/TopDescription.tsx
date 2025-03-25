import { FC } from "react";

type TopDescriptionProps = {
  hero: {
    id: number;
    description: string;
    title: string;
    secondaryDescription: string;
  };
};

const TopDescription: FC<TopDescriptionProps> = ({
  hero: { title, description, secondaryDescription },
}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-xxl mb-10 ma:mb-10'>{title}</h2>
      <div className='w-Full text-black px-2 xl:w-2/6 '>
        <p className='mb-20 ma:mb-20'>{description}</p>
        <p className='mb-10 ma:mb-20'>{secondaryDescription}</p>
      </div>
    </div>
  );
};

export default TopDescription;
