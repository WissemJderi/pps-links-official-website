const NavBarLink = ({ id, text }) => {
  return (
    <button
      className="cursor-pointer hover:text-gray-300"
      onClick={() => {
        document
          .getElementById(`${id}`)
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {text}
    </button>
  );
};

export default NavBarLink;
