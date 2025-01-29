"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Menu = () => {
  const t = useTranslations("Footer");

  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <nav className="flex min-w-40 items-center flex-col gap-4">
      <h3 className="text-gold font-semibold">
        {t("navMenu.title")}
      </h3>
      <ul className="flex items-center text-black gap-4 flex-col text-dark xl:flex-row xl:items-start">
        <li className="flex flex-row">
          <a href={`/${locale}/do-it-yourself`}>
            {t("navMenu.doItYourself")}
          </a>
        </li>
        <li className="flex flex-row">
          <a href={`/${locale}/buy-from-us`}>
            {t("navMenu.buyFromUs")}
          </a>
        </li>
        <li className="flex flex-row">
          <a href={`/${locale}/invite-us`}>
            {t("navMenu.inviteUs")}
          </a>
        </li>
        <li className="flex flex-row">
          <a href={`/${locale}/about-us`}>
            {t("navMenu.aboutUs")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
