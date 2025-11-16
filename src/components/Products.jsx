import ProductCard from "./utils/ProductCard";
import ProductsNavbar from "./utils/ProductsNavbar";
import Title from "./utils/Title";
import { products } from "./utils/data";

const Products = () => {
  const productList = products.map((product) => {
    return (
      <ProductCard
        key={product.title}
        title={product.title}
        img={product.img}
        description={product.description}
      />
    );
  });
  return (
    <div
      id="products"
      className="p-10 md:px-50 lg:px-60 flex flex-col sm:flex- gap-12"
    >
      <Title text={"Nos catégories de produits"} />
      <ProductsNavbar />
      <div className="grid md:grid-cols-2 gap-8 md:gap-4">{productList}</div>
    </div>
  );
};

export default Products;
