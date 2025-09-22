// src/pages/Cart.jsx
import React, { useState } from "react";
import { useCart } from "../components/ShopContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();
  
  // ✅ Calculate Subtotal
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + Number(item.new_price.toString().replace(/[^0-9.-]+/g, "")) * item.quantity,
    0
  );


  // ✅ Apply discount if promo is valid
  const applyPromo = () => {
    if (promoCode.toLowerCase() === "seth smos" || "sl b seth") {
      setDiscount(0.1); // 10% discount
      alert("Promo applied! You saved 10%");
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const total = subtotal - subtotal * discount;

  if (cartItems.length === 0) {
    return (
      <div className="w-[90%] md:w-[80%] h-[60vh] mx-auto py-12 text-center mt-10">
        <h2 className="text-2xl font-bold mb-6">Your Cart is Empty</h2>
        <Link
          to="/"
          className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
        >
          Go Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="w-[90%] md:w-[80%] min-h-[60vh] mx-auto py-12 mt-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      <div className="flex flex-col gap-6 ">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border rounded-lg p-4 shadow-md"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500">Size: {item.size}</p>
                <p className="text-pink-600 font-bold">{item.new_price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="lg:flex items-center grid gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.size, -1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                <FaMinus />
              </button>
              <span className="px-3 py-1 border rounded">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.size, 1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                <FaPlus />
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item.id, item.size)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Cart Summary */}
      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Promo Code */}
        <div className="flex flex-col gap-3 w-full md:w-1/2">
          <h3 className="font-semibold text-lg">Have a Promo Code?</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promo code"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <button
              onClick={applyPromo}
              className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Totals */}
        <div className="w-full md:w-1/3 border rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between mb-2 text-green-600">
              <span>Discount:</span>
              <span>-{(subtotal * discount).toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            className="w-full mt-6 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
            onClick={() => navigate("/order-complete")}
          >
            Checkout
          </button>

        </div>
      </div>
    </div>
  );
}

export default Cart;
