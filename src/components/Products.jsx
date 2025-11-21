import ProductsNavbar from "./utils/ProductsNavbar";
import Title from "./utils/Title";

const Products = () => {
  return (
    <div
      id="products"
      className="my-20 md:px-50 lg:px-60 flex flex-col sm:flex- gap-12"
    >
      <Title text={"Nos catégories de produits"} />
      <ProductsNavbar />
    </div>
  );
};

export default Products;
