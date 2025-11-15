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
    <div id="products" className="p-10 flex flex-col gap-12">
      <Title text={"Nos catégories de produits"} />
      <ProductsNavbar />
      {productList}
    </div>
  );
};

export default Products;
