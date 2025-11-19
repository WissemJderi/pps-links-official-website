import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { products } from "./data";
import { AiOutlineFullscreen } from "react-icons/ai";

const ProductsNavbar = () => {
  const tabs = [
    "Emballages alimentaires",
    "Produits automobiles",
    "Fournitures industrielles",
  ];
  const productData = {
    0: ["Boîtes alimentaires", "Barquettes", "Films plastiques"],
    1: ["Huiles moteur", "Liquide de frein", "Filtres automobiles"],
    2: ["Gants industriels", "Sacs poubelle pro", "Rubans adhésifs"],
  };

  const [selectedTab, setSelectedTab] = useState(0);

  const linkStyle = "cursor-pointer py-3 px-6";

  return (
    <div>
      {/* NAVBAR */}
      <div className="border-b-2 border-[#0b5e41]">
        <motion.ul
          layout
          className="flex flex-row justify-between gap-4 text-xs sm:text-lg font-bold text-white"
        >
          {tabs.map((tab, i) => (
            <motion.li
              key={i}
              initial={false}
              className={linkStyle}
              animate={{
                backgroundColor: i === selectedTab ? "#0b5e41" : "#09100f",
              }}
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedTab(i)}
            >
              {tab}
              {i === selectedTab ? (
                <motion.div layoutId="underline" id="underline" />
              ) : null}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* PRODUCTS SECTION */}
      <div className="mx-10 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4">
        {products[selectedTab].map((p, i) => (
          <motion.div
            key={i}
            className="bg-[#D9D9D9] rounded-lg flex flex-col gap-8 p-3 md:p-4 lg:p-9"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={p.img}
              alt="Product Image "
              className="rounded-lg h-40 w-full object-cover"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-sm font-semibold">{p.title}</h3>
              <p className="text-[#313131] text-xs">{p.description}</p>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 2 },
                }}
                className="mt-3 text-blue-600 font-bold cursor-pointer hover:underline self-end"
              >
                <AiOutlineFullscreen size={25} color="black" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductsNavbar;
