import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

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
          className="flex flex-row justify-between gap-4 text-sm sm:text-lg font-bold text-white"
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
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productData[selectedTab].map((p, i) => (
          <motion.div
            key={i}
            className="p-4 bg-[#0b5e41] text-white rounded-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {p}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductsNavbar;
