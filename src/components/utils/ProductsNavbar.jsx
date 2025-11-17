import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

const ProductsNavbar = () => {
  const tabs = [
    "Emballages alimentaires",
    "Produits automobiles",
    "Fournitures industrielles",
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const linkStyle = "cursor-pointer";
  return (
    <div className="border-b-2 border-white">
      <motion.ul
        layout
        className="flex flex-row justify-around gap-4 text-sm sm:text-lg font-bold text-white text-center "
      >
        {tabs.map((tab, i) => (
          <motion.li
            key={i}
            initial={false}
            animate={{
              backgroundColor: i === selectedTab ? "#eee" : "#eee0",
            }}
            onClick={() => setSelectedTab(i)}
          >
            {" "}
            {`${tab}`}
            {i === selectedTab ? (
              <motion.div layoutId="underline" id="underline" />
            ) : null}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ProductsNavbar;
