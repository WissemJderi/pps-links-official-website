import bg from "public/images/containers.webp";
import { motion } from "motion/react";
const Hero = () => {
  const diff = 0.25;
  return (
    <motion.div
      className="relative w-full h-full bg-black/85"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 2 },
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col gap-10 justify-between items-center text-white text-xl p-10 sm:p-40 ">
        <div className="flex flex-col gap-5">
          <motion.h1
            initial={{ y: -40 }}
            animate={{ y: 0, transition: { duration: 0.7 } }}
            className="text-4xl sm:text-5xl font-medium"
          >
            PPS Links
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 + diff } }}
            className="text-3xl sm:text-2xl"
          >
            Fournisseur de produits industriels et alimentaires de qualité
          </motion.h1>
        </div>
        <div className="flex flex-row gap-4 sm:gap-12 items-center justify-around sm:font-semibold font-bold">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.1 + diff } }}
            whileHover={{
              scale: 1.02,
              boxShadow: "5px 5px #000",
              transition: { duration: 0.5 },
            }}
            className="bg-[#0b5e41] border border-[#0b5e41] sm:text-lg text-sm px-4 py-4 cursor-pointer"
          >
            Demander Un Devis
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2 + diff } }}
            whileHover={{
              scale: 1.02,
              boxShadow: "5px 5px #000",
              transition: { duration: 0.5 },
            }}
            onClick={() => {
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border  text-sm px-4 py-4 cursor-pointer sm:text-lg "
          >
            Découvrir Nos Produits
          </motion.button>
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-between text-white text-xl p-10"></div>
    </motion.div>
  );
};

export default Hero;
