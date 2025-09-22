// src/pages/Popular.jsx
import React from "react";
import { data_product } from "../assets/js/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProductCard({ item , index}) {
  return (
    <motion.div
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{once: true}}   
    >
      <Link to={`/product/${item.id}`} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-xl transition">
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

function Popular() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Popular In Women
          </h1>
          <div className="w-32 h-1 mx-auto mt-2 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 rounded-full"></div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data_product.map((item, index) => (
            <ProductCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Popular;
