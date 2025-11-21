import Title from "./utils/Title";
import { motion } from "motion/react";

const AboutUs = () => {
  const paragraphDifference = 0.5;
  return (
    <div
      id="about-us"
      className="my-20 p-10 md:px-50 lg:px-80  flex flex-col gap-12"
    >
      <Title text={"A Propos De Nous"} />
      <section className="flex flex-col gap-3 text-gray-200 text-left sm:text-xl text-lg py-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2 + paragraphDifference },
          }}
        >
          <strong>PPS Links</strong> est une entreprise spécialisée dans la
          <strong> distribution de produits</strong> destinés aux secteurs
          <strong> alimentaire, automobile et industriel.</strong>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.3 + paragraphDifference },
          }}
        >
          Nous proposons <strong>une large gamme d’articles</strong> — des
          <strong> emballages plastiques alimentaires</strong> aux{" "}
          <strong> pièces et accessoires industriels</strong>, en passant par
          les
          <strong> huiles et produits automobiles.</strong>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4 + paragraphDifference },
          }}
        >
          Notre mission est simple : fournir des
          <strong> produits de qualité, fiables</strong> et
          <strong> adaptés</strong> aux besoins variés de nos clients, tout en
          offrant <strong>un service rapide et professionnel.</strong>
        </motion.p>
      </section>
    </div>
  );
};

export default AboutUs;
