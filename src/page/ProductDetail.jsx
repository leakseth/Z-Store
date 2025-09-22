// src/page/ProductDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data_product } from "../assets/js/data_product";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useCart } from "../components/ShopContext";

// nocation
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const sizes = ["S", "M", "L", "XL", "XXL"];

function ProductDetail() {
  const { productId } = useParams();
  const product = data_product.find((p) => p.id === parseInt(productId));

  const [mainImage, setMainImage] = useState(product?.image || "");
  const [selectedSize, setSelectedSize] = useState(null);

  const { addToCart } = useCart();

  if (!product) {
    return <h2 className="text-center mt-10 text-xl">Product not found</h2>;
  }

  return (
    <div onClick={window.scroll(0,0)} className="w-[90%] md:w-[80%] mx-auto py-12 mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left: Images */}
      <div className="flex gap-4">
        {/* Thumbnails */}
        <div className="flex flex-col gap-4">
          {[product.image, product.image, product.image].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              className={`w-20 h-20 object-cover rounded-lg border cursor-pointer hover:border-pink-500 ${
                mainImage === img ? "border-pink-500" : "border-gray-200"
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="border h-[450px] w-full rounded-2xl overflow-hidden relative group">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="flex flex-col gap-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          {product.name}
        </h1>

        {/* Ratings */}
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaRegStar className="text-yellow-400" />
          <span className="text-gray-500 ml-2">(122)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4 text-xl md:text-2xl">
          <span className="text-red-500 font-bold">{product.new_price}</span>
          <span className="line-through text-gray-400">{product.old_price}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600">{product.description}</p>

        {/* Size Selector */}
        <div>
          <p className="font-semibold mb-2">Select Size</p>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-lg font-medium ${
                  selectedSize === size
                    ? "bg-pink-600 text-white border-pink-600"
                    : "bg-white text-gray-700 border-gray-300"
                } hover:bg-pink-500 hover:text-white transition`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => {
              if (!selectedSize) {
                toast.error("Please select a size before adding to cart.");
                return;
              }
              addToCart(product, selectedSize);
              toast.success(`${product.name} added to cart!`);
            }}
            className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl shadow hover:bg-pink-700 transition"
          >
            Add to Cart
          </button>

          {/* Toast Container */}
          <ToastContainer position="top-right" autoClose={2000} />

        </div>

        {/* Category & Tags */}
        <div className="mt-4 text-gray-500 text-sm">
          <p>Category: {product.category || "Uncategorized"}</p>
          <p>Tags: {product.tags?.join(", ") || "None"}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
