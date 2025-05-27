import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  if (cartItems.length === 0) {
    return <p className="p-8 text-lg">🛒 Your cart is empty.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4 flex-1">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">₹{item.price}</p>
              </div>
            </div>

            {/* Quantity + Remove */}
            <div className="flex items-center gap-4">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, e.target.value)}
                className="w-20 border rounded px-2 py-1 text-sm text-center"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
