const NavBarLink = ({ id, text }) => {
  return (
    <button
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
