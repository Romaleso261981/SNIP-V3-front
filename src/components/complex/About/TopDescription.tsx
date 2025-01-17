import { FC } from "react";

type TopDescriptionProps = {
  main: { title: string; text: string; bottomText: string };
};

const TopDescription: FC<TopDescriptionProps> = ({
  main: { text, title, bottomText }
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xxl mb-5 ma:mb-10">
        {title}
      </h2>
      <div className="w-11/12 px-2 md:w-2/3 ">
        <p className="mb-10 ma:mb-20">
          {text}
        </p>
        <p className="mb-10 ma:mb-20">
          {bottomText}
        </p>
      </div>
    </div>
  );
};

export default TopDescription;
