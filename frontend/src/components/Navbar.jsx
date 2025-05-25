import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* LEFT SIDE: Logo + Category Links */}
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold mr-8">
          StyleCart
        </Link>

        <div className="flex space-x-6 text-sm font-medium">
          <Link to="/products?category=Men" className="text-gray-700 hover:text-black">
            Men
          </Link>
          <Link to="/products?category=Women" className="text-gray-700 hover:text-black">
            Women
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE: Cart Button */}
      <Link
        to="/cart"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Cart ({cartItems.length})
      </Link>
    </nav>
  );
};

export default Navbar;
