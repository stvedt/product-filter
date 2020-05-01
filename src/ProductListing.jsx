import React, { useState } from "react";
import products from "./data/products.json";
import ingredients from "./data/ingredients.json";

import ProductDetail from "./ProductDetail";

function Listing() {
  const [activeIngredient, setActiveIngredient] = useState(0);
  const productList = products.products;
  const ingredientList = ingredients.ingredients;

  function onClickIngredient(id) {
    if (id === activeIngredient) {
      setActiveIngredient(null);
      return;
    }
    setActiveIngredient(id);
  }
  return (
    <div>
      <div className="ingredients">
        {ingredientList.map((ingredient) => (
          <span
            onClick={() => onClickIngredient(ingredient.id)}
            className={ingredient.id === activeIngredient ? "active" : ""}
          >
            {`${ingredient.name} `}
          </span>
        ))}
      </div>
      <hr />
      <div className="products">
        {productList
          .filter(
            (product) =>
              !activeIngredient ||
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
