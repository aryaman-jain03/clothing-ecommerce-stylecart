import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅ import

const Navbar = () => {
  const { cartItems } = useCart(); // ✅ get cart count

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        StyleCart
      </Link>
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