import React from "react";

function ProductDetail(props) {
  const { name, collection } = props.product;
  return <div>{`${name}, ${collection}`}</div>;
}

export default ProductDetail;
