import { useTranslations } from "next-intl";
import Link from "next/link";

const Information = () => {
  const t = useTranslations("Footer.info");

  return (
    <nav className="flex min-w-40 text-center flex-col gap-2 mb-10">
      <h3 className="text-gold font-semibold xl:items-start">
        {t("title")}
      </h3>
      <div className="flex gap-3 flex-col items-center">
        <ul className="flex gap-3 text-black flex-col text-center items-center text-dark xl:flex-row">
          <li>
            <Link href="/uk/policy">
              {t("policy")}
            </Link>
          </li>
          <li>
            <Link href="/uk/info">
              {t("shippingAndPayment")}
            </Link>
          </li>
        </ul>
        <ul className="flex gap-3 text-black flex-col text-center items-center text-dark xl:flex-row">
          <li>
            <Link href="">
              {t("return")}
            </Link>
          </li>
          <li>
            <Link href="">
              {t("publicContract")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Information;
