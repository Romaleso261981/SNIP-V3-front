"use client";

import { useState, useContext, FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";

import MobileMenu from "./MobileMenu";
import BurgerMenuIcon from "@/assets/icons/burger-menu.svg";
import LogoIcon from "@/assets/icons/logo.svg";
import ShoppingBag from "./ShoppingBag";
import { BasketContext } from "@/contexts/basketContext";
import Basket from "./Basket/Basket";

type HeaderProps = {
  className: string;
};

const Header: FC<HeaderProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("Header");

  const { showBasket } = useContext(BasketContext);

  const isUaActive = pathname.includes("/uk");
  const isEnActive = pathname.includes("/en");

  const handleLocaleChange = (locale: "uk" | "en") => {
    const pathWithoutLocale = pathname.split("/").slice(2).join("/");

    const query = searchParams.toString();
    const queryString = query ? `?${query}` : "";

    router.push(`/${locale}/${pathWithoutLocale}${queryString}`);
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={clsx(
          "w-full px-6 flex justify-between items-center h-16 xl:w-11/12 xl:p-0",
          className
        )}
      >
        <div onClick={() => setIsOpen(true)}>
          <BurgerMenuIcon className="cursor-pointer" />
        </div>
        <Link href={"/uk/"} className="flex flex-col items-center ml-20">
          <LogoIcon className="w-9 h-9" />
          <span className="text-xs">
            {t("title")}
          </span>
        </Link>
        <div className="flex gap-2 text-md cursor-pointer">
          <ShoppingBag />
          <span
            onClick={() => handleLocaleChange("uk")}
            className={clsx("hover:underline", isUaActive && "font-bold")}
          >
            UA
          </span>
          |
          <span
            onClick={() => handleLocaleChange("en")}
            className={clsx("hover:underline", isEnActive && "font-bold")}
          >
            EN
          </span>
        </div>

        {/* Плавне відкриття/закриття MobileMenu */}
        <AnimatePresence>
          {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
        </AnimatePresence>

        {showBasket && <Basket router={router} />}
      </div>
    </div>
  );
};

export default Header;
