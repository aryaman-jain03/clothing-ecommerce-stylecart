import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="p-6 space-y-12">
  
{/* ✅ Hero Section */}
<section className="bg-gray-50 rounded-lg p-10 text-center shadow">
  <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
    Find Your Style
  </h1>
  <p className="text-gray-600 mb-6 text-lg">
    Discover the latest trends in fashion for Men & Women.
  </p>
  <Link
    to="/products"
    className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
  >
    Shop Now
  </Link>
</section>
      {/* ✅ What's New Section */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-inner">
  <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">
    What's New
  </h2>

  <div className="flex overflow-x-auto space-x-4 pb-2">
    {products.slice(0, 6).map((product) => (
      <div
        key={product.id}
        className="min-w-[180px] flex-shrink-0 bg-white border rounded-lg shadow hover:shadow-md transition duration-200 p-3 text-sm"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-32 w-full object-cover mb-2 rounded"
        />
        <h3 className="font-semibold text-gray-800 text-base">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-1">₹{product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</section>

      {/* ✅ View All Products */}
      <div className="text-center">
        <Link
          to="/products"
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
