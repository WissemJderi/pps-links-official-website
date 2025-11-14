import ProductsNavbar from "./utils/ProductsNavbar";
import Title from "./utils/Title";

const Products = () => {
  return (
    <div className="p-10 flex flex-col gap-12">
      <Title text={"Nos catégories de produits"} />
      <ProductsNavbar />
    </div>
  );
};

export default Products;
