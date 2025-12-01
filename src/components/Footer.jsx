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

  return (
    <footer
      id="footer"
      className="bg-neutral-900 text-neutral-300 px-6 sm:px-12 lg:px-20 py-12 sm:py-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <img src={Icon} className="w-40 h-20 my-2" alt="PPS Links Logo" />
          <p className="text-neutral-400 leading-relaxed">
            Votre partenaire fiable pour les besoins industriels et
            alimentaires.
          </p>
        </div>

        <nav aria-label="Liens rapides">
          <h2 className="text-lg font-semibold text-white mb-4">
            Liens rapides
          </h2>
          <ul className="flex flex-col space-y-2">
            <li>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <FaHome aria-hidden="true" /> Accueil
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("about-us")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <FaInfoCircle aria-hidden="true" /> À propos
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <FaBoxOpen aria-hidden="true" /> Produits
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <FaServicestack aria-hidden="true" /> Services
              </button>
            </li>
          </ul>
        </nav>

        <section aria-labelledby="footer-contact">
          <h2
            id="footer-contact"
            className="text-lg font-semibold text-white mb-4"
          >
            Contact
          </h2>
          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="https://maps.app.goo.gl/ou1NhfN5gXVeCwHD9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <FaMap aria-hidden="true" /> 123 Rue Exemple, Tunis
              </a>
            </li>
            <li>
              <a
                href="tel:+21612345678"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <FaPhone aria-hidden="true" /> +216 12 345 678
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@entreprise.com"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <FaEnvelope aria-hidden="true" /> contact@entreprise.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-neutral-400">
              <FaClock aria-hidden="true" /> Lun-Ven 9h-18h
            </li>
          </ul>
        </section>
      </div>

      <div className="border-t border-neutral-800 mt-10 pt-6 text-center text-neutral-500 text-sm">
        © {currentYear} PPS Links. Tous droits réservés. <br />
        Conçu par PPS Links.
      </div>
    </footer>
  );
};
export default Footer;
