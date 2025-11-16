const ProductCard = ({ img, title, description }) => {
  return (
    <div className="bg-[#D9D9D9] rounded-lg flex flex-col gap-8  md:p-4 lg:p-9">
      <img
        src={img}
        alt="Product Image "
        className="rounded-lg h-40 w-full object-cover"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl md:text-sm font-semibold">{title}</h3>
        <p className="text-[#313131] text-xs">{description}</p>
        <button className="mt-3 text-blue-600 font-bold cursor-pointer hover:underline self-end">
          Voir Plus &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
