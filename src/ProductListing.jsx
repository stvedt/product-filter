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

  const filterdProducts = productList.filter(
    (product) =>
      !activeIngredient || product.ingredient_ids.includes(activeIngredient)
  );
  return (
    <div className="listing-page">
      <div className="ingredients">
        {ingredientList.map((ingredient) => (
          <div
            onClick={() => onClickIngredient(ingredient.id)}
            className={
              ingredient.id === activeIngredient
                ? "ingredient active"
                : "ingredient"
            }
          >
            {`${ingredient.name} `}
          </div>
        ))}
      </div>
      <div className="products">
        {!filterdProducts.length && <span>No products matching filter</span>}
        {filterdProducts.map((product) => (
          <ProductDetail product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Listing;
