// src/pages/Men.jsx
import React from "react";
import { Link } from "react-router-dom";
import { data_product } from "../assets/js/data_product";
import { motion } from "framer-motion";

function MenProductCard({ item, index }) {
  return (
    <motion.div
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration: 0.6, delay: index*0.1}}
      viewport={{once: true}}
    >
          <Link
            to={`/product/${item.id}`}  onClick={window.scroll(0,0)}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-xl transition"
          >
            <div className="overflow-hidden rounded-lg w-full h-[250px] mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h2>
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-pink-600 font-bold">{item.new_price}</span>
              <span className="text-gray-400 line-through text-sm">{item.old_price}</span>
            </div>
            <p className="text-gray-600 text-sm text-center">{item.description}</p>
          </Link>
    </motion.div>
  );
}

function Men() {
  const menProducts = data_product.filter(item => item.category === "men");

  return (
    <section className="w-full py-12 bg-gray-50 mt-9">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Banner */}
        <div className="relative w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg mb-10 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400">
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            {/* Discount Badge */}
            <span className="bg-white text-pink-600 font-bold text-sm md:text-lg px-5 py-2 rounded-full shadow-md mb-4">
              ✨ 50% OFF All Items ✨
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              Men Collection
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-base md:text-lg text-white/90 max-w-xl">
              Discover elegant & trendy styles designed for your confidence.
            </p>

            {/* Button */}
            <button className="mt-6 bg-white text-pink-600 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-pink-100 transition">
              Shop Now
            </button>
          </div>
        </div>


        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menProducts.map((item) => (
            <MenProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Men;
