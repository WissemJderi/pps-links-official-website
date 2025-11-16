const ProductsNavbar = () => {
  const linkStyle = "cursor-pointer";
  return (
    <div className="border-b-2 border-white">
      <ul className="flex flex-row justify-around gap-4 text-sm sm:text-lg font-bold text-white text-center ">
        <li className={`bg-white text-[#063726] ${linkStyle}`}>
          Emballages alimentaires
        </li>
        <li className={linkStyle}>Produits automobiles</li>
        <li className={linkStyle}>Fournitures industrielles</li>
      </ul>
    </div>
  );
};

export default ProductsNavbar;
