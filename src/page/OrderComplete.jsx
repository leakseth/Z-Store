// src/pages/OrderComplete.jsx
import React from "react";
import { useCart } from "../components/ShopContext";
import { Link } from "react-router-dom";

function OrderComplete() {
  const { cartItems } = useCart();

  // ✅ Calculate total
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + Number(item.new_price.toString().replace(/[^0-9.-]+/g, "")) * item.quantity,
    0
  );

  return (
    <div className="w-[90%] md:w-[70%] mx-auto py-12 mt-10">
      <h2 className="text-3xl font-bold text-green-600 mb-6">
        🎉 Order Completed!
      </h2>

      {/* Receipt */}
      <div className="border rounded-lg p-6 shadow-md bg-white">
        <h3 className="text-xl font-semibold mb-4">🧾 Receipt</h3>
        <table className="w-full mb-4 border-collapse">
          <thead>
            <tr className="border-b text-left">
              <th className="py-2">Product</th>
              <th>Size</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{item.name}</td>
                <td>{item.size}</td>
                <td>{item.quantity}</td>
                <td>${item.new_price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between font-bold text-lg border-t pt-2">
          <span>Total:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>

      {/* QR Code Payment */}
      <div className="mt-10 flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4">Scan QR Code to Pay</h3>
        {/* <QRCoe value={`/src/assets/image/Qr.png=${subtotal.toFixed(2)}`} size={200} /> */}
<img
  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`https://pay.ababank.com/oRF8/gnw9xmp6?amount=${subtotal.toFixed(2)}&cur=USD`)}`}
  alt="ABA QR Code"
/>

<p>Total: ${subtotal.toFixed(2)}</p>


      </div>

      {/* Back to Shop */}
      <div className="mt-10 text-center">
        <Link
          to="/"
          className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
        >
          Back to Shop
        </Link>
      </div>
    </div>
  );
}

export default OrderComplete;
