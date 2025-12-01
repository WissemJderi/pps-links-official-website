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

  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const linkStyle = "cursor-pointer py-3 px-6";

  return (
    <div className="flex flex-col gap-5">
      <div className="border-b-2 border-[#0b5e41] text-center">
        <motion.ul
          layout
          className="flex flex-row justify-between text-xs sm:text-lg font-bold text-white"
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

      <motion.div
        key={selectedTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mx-10 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4"
      >
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
                whileHover={{ scale: 1.1 }}
                className="mt-3 text-blue-600 font-bold cursor-pointer hover:underline self-end"
                onClick={() => {
                  setSelectedProduct(p);
                  setIsModalOpen(true);
                }}
              >
                <AiOutlineFullscreen size={25} color="black" />
              </motion.button>
            </div>

            <AnimatePresence>
              {isModalOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/70 bg-opacity-60 flex justify-center items-center z-50"
                  onClick={() => setIsModalOpen(false)} // close when clicking background
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
                    className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl"
                  >
                    <img
                      src={selectedProduct?.img}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />

                    <h2 className="text-xl font-bold">
                      {selectedProduct?.title}
                    </h2>
                    <p className="text-gray-700 mt-2">
                      {selectedProduct?.description}
                    </p>

                    <button
                      className="mt-4 px-4 py-2 bg-[#0b5e41] text-white rounded-lg"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Fermer
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductsNavbar;
