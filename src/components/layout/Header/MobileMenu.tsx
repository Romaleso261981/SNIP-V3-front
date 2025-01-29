"use client";

import { FC, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import cross from "@/assets/mobMenu/cross-mob-menu.png";
import { useTranslations } from "next-intl";

type MobMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const MobileMenu: FC<MobMenuProps> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("mobileMenu");

  // Закриваємо меню при натисканні ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Забороняємо прокручування сторінки, коли меню відкрите
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // очищаємо overflow при закритті меню
    };
  }, [isOpen, setIsOpen]);

  // Закриваємо меню при кліку поза ним
  const handleOutsideClick = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains("menu-overlay")) {
      setIsOpen(false);
    }
  };

  const handleLocaleChange = (path: string) => {
    const currentLocale = pathname.split("/")[1];
    router.push(`/${currentLocale}${path.startsWith("/") ? path : "/" + path}`);
    setIsOpen(false);
  };

  return (
    <>
      {/* Бекдроп для затемнення фону поза меню */}
      {isOpen && (
        <div
          className="menu-overlay fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleOutsideClick}
        />
      )}

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex flex-col justify-between p-6 bg-white md:w-[20%]"
      >
        <div className="flex flex-col justify-start py-2 z-50">
          <div className="flex mb-8 justify-between items-center md:mb-0">
            <span className="text-gold font-bold">{t("mainTitle")}</span>
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <Image src={cross} alt="Close menu" width={24} height={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-5 mt-0 xl:mt-10">
            <ul className="flex flex-col gap-4 text-black">
              <li onClick={() => handleLocaleChange("/do-it-yourself")}>
                <span className="cursor-pointer hover:underline">
                  {t("doItYourself")}
                </span>
              </li>
              <li onClick={() => handleLocaleChange("/buy-from-us")}>
                <span className="cursor-pointer hover:underline">
                  {t("buyFromUs")}
                </span>
              </li>
              <li onClick={() => handleLocaleChange("/invite-us")}>
                <span className="cursor-pointer hover:underline">
                  {t("inviteUs")}
                </span>
              </li>
            </ul>

            <div className="w-3/4 border-t-4 border-gold-light mt-5 mb-7" />

            <ul className="flex flex-col gap-4 text-black">
              <li onClick={() => handleLocaleChange("/about-us")}>
                <span className="cursor-pointer hover:underline">{t("about")}</span>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 text-gold">
          <h3 className="text-lg font-medium">{t("contactTitle")}</h3>
          <ul className="flex flex-col gap-2 text-black">
            <li>
              <Link href="tel:+380674358200" className="hover:underline">
                {t("phone")}
              </Link>
            </li>
            <li>
              <Link href="mailto:snip.solomy@gmail.com" className="hover:underline">
                {t("email")}
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
