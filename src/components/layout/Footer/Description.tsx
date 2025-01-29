import LogoIcon from "@/assets/icons/logo.svg";
import { useTranslations } from "next-intl";

const FooterDescription = () => {
  const t = useTranslations("Footer.logo");
  return (
    <div className="w-full flex justify-center items-center py-10 border-b-gold border-b xl:border-none">
      <div className="flex flex-col items-center px-1 text-gold">
        <LogoIcon className="w-20 h-20 mb-5" />
        <p className="text-gold text-[24px] font-normal text-center md:w-[45%]">
          {t("description")}
        </p>
      </div>
    </div>
  );
};

export default FooterDescription;
