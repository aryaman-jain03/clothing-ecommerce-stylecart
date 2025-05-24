import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(product => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <div className="border p-4 rounded hover:shadow-md bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-2"
              />
              <h2 className="font-semibold">{product.name}</h2>
              <p>₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;