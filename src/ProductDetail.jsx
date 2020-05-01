import React from "react";

function ProductDetail(props) {
  const { name, collection, ingredient_ids } = props.product;
  return <div>{`${name}, ${collection}, ${ingredient_ids}`}</div>;
}

export default ProductDetail;
