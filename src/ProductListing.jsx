import React from "react";
import products from "./data/products.json";
import ingredients from "./data/products.json";

import ProductDetail from "./ProductDetail";

function Listing() {
  console.log(products, ingredients);

  return (
    <div>
      {products.products.map((product) => (
        <ProductDetail product={product} />
      ))}
    </div>
  );
}

export default Listing;
