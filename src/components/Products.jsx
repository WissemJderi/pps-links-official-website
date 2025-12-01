import ProductsNavbar from "./utils/ProductsNavbar";
import Title from "./utils/Title";

const Products = () => {
  return (
    <section
      aria-labelledby="products-title"
      id="products"
      className="my-20 md:px-50 lg:px-60 flex flex-col sm:flex-col gap-12"
    >
      <Title id="products-title" text={"Nos catégories de produits"} />
      <ProductsNavbar />
    </section>
  );
};

export default Products;
