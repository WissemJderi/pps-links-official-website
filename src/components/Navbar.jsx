import Icon from "../assets/ppslinks.svg";
import NavBarLink from "./utils/NavBarLink";
import { motion } from "motion/react";
const Navbar = () => {
  return (
    <div className="bg-[#192927] text-white text-center flex flex-col gap-6 text-sm sm:text-lg sm:font-medium font-bold py-6 px-2 justify-center ">
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        src={Icon}
        alt="PPS Links Logo"
        className="w-40 h-32 self-center"
      />
      <div className="flex flex-row gap-x-6 sm:gap-x-10 sm:justify-around justify-center">
        <NavBarLink id="about-us" text="À propos de nous" />
        <NavBarLink id="products" text="Produits" />
        <NavBarLink id="services" text="Services" />
        <motion.a
          aria-label="Call us at +216 53356331"
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer hover:text-gray-300"
          href="tel:+21653356331"
        >
          Contactez-nous
        </motion.a>
      </div>
    </div>
  );
};

export default Navbar;
