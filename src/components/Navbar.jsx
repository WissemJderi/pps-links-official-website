import Icon from "../assets/ppslinks.svg";
import NavBarLink from "./utils/NavBarLink";
const Navbar = () => {
  return (
    <div className="bg-[#192927] text-white text-center flex flex-col gap-1 text-xs font-bold py-4 px-2 justify-center items-center">
      <img src={Icon} alt="Logo" className="w-30 h-20" />
      <div className="flex flex-row gap-4 cursor-pointer">
        <p>Acceuil</p>
        <NavBarLink id="about-us" text="À propos de nous" />
        <NavBarLink id="products" text="Produits" />
        <NavBarLink id="services" text="Services" />
        <a href="tel:+21650530016">Contactez-nous</a>
      </div>
    </div>
  );
};

export default Navbar;
