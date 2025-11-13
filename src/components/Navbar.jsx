import Icon from "../assets/ppslinks.svg";
const Navbar = () => {
  return (
    <div className="bg-[#192927] text-white flex flex-col gap-1 text-sm font-bold py-4 px-2 justify-center items-center">
      <img src={Icon} alt="Logo" className="w-30 h-20" />
      <div className="flex flex-row gap-4 cursor-pointer">
        <p>Acceuil</p>
        <p>À propos de nous</p>
        <p>Produits</p>
        <p>Services</p>
        <p>Contactez-nous</p>
      </div>
    </div>
  );
};

export default Navbar;
