import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useLocation } from "react-router-dom";


const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const selectedCategory = searchParams.get("category");


  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products
  .filter((product) =>
    selectedCategory
      ? product.category?.toLowerCase() === selectedCategory.toLowerCase()
      : true
  )
  .map((product) => (

    <div
    key={product.id}
    className="bg-white border rounded-lg shadow hover:shadow-md transition duration-200 p-3 text-sm"
  >
    <Link to={`/products/${product.id}`}>
      <img
        src={product.image}
        alt={product.name}
        className="h-32 w-full object-cover mb-2 rounded"
      />
      <h3 className="font-semibold text-gray-800 text-base">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-1">₹{product.price}</p>
    </Link>
  
    <button
      onClick={() => addToCart(product)}
      className="w-full bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
    >
      Add to Cart
    </button>
  </div>
        
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;