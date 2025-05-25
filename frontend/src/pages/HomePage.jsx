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
      <section>
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Men", "Women", "Kids", "Accessories"].map((category) => (
            <div
              key={category}
              className="bg-gray-100 p-6 rounded text-center font-medium shadow hover:shadow-md"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">What's New</h2>
        <div className="flex overflow-x-auto gap-4">
          {products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="min-w-[200px] flex-shrink-0 bg-white border rounded shadow p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover mb-2 rounded"
              />
              <h3 className="font-semibold">{product.name}</h3>
              <p>₹{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-600 text-white px-4 py-1 text-sm rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

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