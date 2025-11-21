import {
  FaBoxOpen,
  FaClock,
  FaEnvelope,
  FaMap,
  FaPhone,
} from "react-icons/fa6";
import Icon from "../assets/ppslinks.svg";
import { FaHome, FaInfoCircle, FaServicestack } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const iconSize = 25;
  return (
    <div className="bg-neutral-900 text-neutral-300 px-6 sm:px-12 lg:px-20 py-12 sm:py-16">
      <footer
        id="footer"
        className="px-6 sm:px-12 lg:px-20 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-neutral-300 bg-neutral-900"
      >
        <div>
          <img
            src={Icon}
            className="w-30 h-30 self-center"
            alt="PPS Links Logo"
          />
          <p
            className="text-neutral-400 leading-relaxed
"
          >
            Votre partenaire fiable pour les besoins industriels et
            alimentaires.
          </p>
        </div>
        <section>
          <h1 className="text-lg font-semibold text-white mb-4">
            Liens rapides
          </h1>
          <div className="flex flex-col space-y-2">
            <p className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer">
              <span>
                <FaHome />
              </span>
              Accueil
            </p>
            <p className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer">
              <span>
                <FaBoxOpen />
              </span>
              Produits
            </p>
            <p className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer">
              <span>
                <FaInfoCircle />
              </span>
              À propos
            </p>
            <p className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer">
              <span>
                <FaServicestack />
              </span>
              Services
            </p>
            <p className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer">
              <span>
                <FaEnvelope />
              </span>
              Contact
            </p>
          </div>
        </section>
        <section>
          <h1 className="text-lg font-semibold text-white mb-4">Contact</h1>
          <section className="flex flex-col space-y-2">
            <p className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer">
              <FaMap /> 123 Rue Exemple, Tunis
            </p>
            <p className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer">
              <FaPhone /> +216 12 345 678
            </p>

            <p className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer">
              <FaEnvelope /> contact@entreprise.com
            </p>

            <p className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer">
              <FaClock /> Lun-Ven 9h-18h
            </p>
          </section>
        </section>
      </footer>
      <div className="border-t border-neutral-800 mt-10 pt-6 text-center text-neutral-500 text-sm"></div>
      <section className="text-[#D9D9D9] text-sm text-center">
        <p>© {currentYear} PPS Links. Tous droits réservés.</p>
        <p>Conçu par PPS Links.</p>
      </section>
    </div>
  );
};

export default Footer;
