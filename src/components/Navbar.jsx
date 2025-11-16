import Icon from "../assets/ppslinks.svg";
import NavBarLink from "./utils/NavBarLink";
const Navbar = () => {
  return (
    <div className="bg-[#192927] text-white text-center flex flex-col gap-6 text-xs sm:text-sm sm:font-medium font-bold py-6 px-2 justify-center ">
      <img src={Icon} alt="Logo" className="w-30 h-20 self-center" />
      <div className="flex flex-row gap-4 sm:justify-around justify-center">
        <NavBarLink id="about-us" text="À propos de nous" />
        <NavBarLink id="products" text="Produits" />
        <NavBarLink id="services" text="Services" />
        <a href="tel:+21650530016">Contactez-nous</a>
      </div>
    </div>
  );
};

export default Navbar;
