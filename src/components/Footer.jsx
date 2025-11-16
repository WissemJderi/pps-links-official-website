import { AiFillProduct } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMap,
  FaPhoneFlip,
} from "react-icons/fa6";
import FooterInfo from "./utils/FooterInfo";
import { MdEmail } from "react-icons/md";
import HorizontalRule from "./utils/HorizontalRule";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const iconSize = 25;
  return (
    <footer
      id="footer"
      className="px-5 py-10 sm:px-100 sm:py-20 flex flex-col gap-10"
    >
      <h1 className="text-4xl text-white font-semibold text-center">
        PPS Links
      </h1>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col text-[#D9D9D9] text-xl gap-2">
          <div className="flex flex-row justify-around py-4">
            <p className="cursor-pointer">
              <FaFacebook size={25} />
            </p>

            <p className="cursor-pointer">
              <FaInstagram size={25} />
            </p>

            <p className="cursor-pointer">
              <FaLinkedin size={25} />
            </p>
          </div>

          <HorizontalRule />
        </div>

        <div className="flex flex-col text-[#D9D9D9] text-lg gap-10 items-center">
          <FooterInfo
            label={"Addresse"}
            info={"Kalaa sghira, Sousse"}
            icon={<FaMap size={iconSize} />}
          />
          <FooterInfo
            label={"Téléphone"}
            info={"+216 00 000 000"}
            icon={<FaPhoneFlip size={iconSize} />}
          />
          <FooterInfo
            label={"Email"}
            info={"Kalaa sghira, Sousse"}
            icon={<MdEmail size={iconSize} />}
          />
        </div>
        <hr
          className={`w-full font-bold border-t rounded-4xl border-gray-400 my-2 self-center`}
        />
      </section>

      <section className="text-[#D9D9D9] text-xs text-center">
        <p>© {currentYear} PPS Links. Tous droits réservés.</p>
        <p>Conçu par PPS Links.</p>
      </section>
    </footer>
  );
};

export default Footer;
