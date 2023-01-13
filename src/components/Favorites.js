import Products from "api/products.json";
import Product from "./ui/Product";
import { useEffect, useState } from "react";
export default function Favorites() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(Products);
  }, []);
  return (
    <div className="container mx-auto pt-8">
      <h3 className="text-sm font-semibold mb-3 px-6 md:px-0">Favoriler</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-0.1 rounded-lg overflow-hidden ">
        {products.length &&
          products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
      </div>
    </div>
  );
}
