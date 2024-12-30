import React from "react";

const ProductInfo = () => {
  const product = {
    name: "laptop",
    price: 1200,
    availability: "In stock",
  };
  return (
    <>
      <p>
        {product.name} is {product.availability} at ${product.price}
      </p>
    </>
  );
};

export default ProductInfo;
