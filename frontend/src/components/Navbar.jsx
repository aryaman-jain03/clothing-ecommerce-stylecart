import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-6 flex items-center justify-between gap-4">
      {/* Left: Logo & Category Links */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold text-black whitespace-nowrap">
          StyleCart
        </Link>
        <Link to="/products?category=Men" className="text-gray-700 hover:text-black">
          Men
        </Link>
        <Link to="/products?category=Women" className="text-gray-700 hover:text-black">
          Women
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-sm mx-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Right: Account + Cart */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-sm text-gray-700">👤 {user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
            >
              Account
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow-md z-10">
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Log In
                </Link>
              </div>
            )}
          </div>
        )}

        <Link
          to="/cart"
          className="inline-block bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Cart ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
