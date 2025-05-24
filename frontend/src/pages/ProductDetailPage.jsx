import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Product Detail Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductDetailPage;