import Contacts from "./Contacts";
import Copyright from "./Copyright";
import FooterDescription from "./Description";
import Information from "./Information";
import Menu from "./Menu";

const Footer = () => {
  return (
    <footer className="m-auto w-full md:px-1 border-t-gold border-t">
      <div className="container m-auto w-[90%]">
        <FooterDescription />
        <div className="w-full flex flex-col justify-between py-20 gap-20 items-center  md:flex-row md:items-start md:border-t-0 md:py-10">
          <Menu />
          <Contacts />
          <Information />
        </div>
      </div>
      <div className="border-t-gold border-t" />
      <Copyright />
    </footer>
  );
};

export default Footer;
