import React, { useState } from "react";
import products from "./data/products.json";
import ingredients from "./data/ingredients.json";

import ProductDetail from "./ProductDetail";

function Listing() {
  console.log(products, ingredients);
  const [activeIngredient, setActiveIngredient] = useState(0);

  return (
    <div>
      <div className="ingredients">
        {ingredients.ingredients.map((ingredient) => (
          <a onClick={() => setActiveIngredient(ingredient.id)}>
            {`${ingredient.name} `}
          </a>
        ))}
      </div>
      <hr />
      <div className="products">
        {products.products
          .filter((product) =>
            product.ingredient_ids.includes(activeIngredient)
          )
          .map((product) => (
            <ProductDetail product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default Listing;
