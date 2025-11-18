import { motion } from "motion/react";

const NavBarLink = ({ id, text }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer hover:text-gray-300"
      onClick={() => {
        document
          .getElementById(`${id}`)
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {text}
    </motion.button>
  );
};

export default NavBarLink;
