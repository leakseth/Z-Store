import React from "react";
import { motion } from "framer-motion";
import OfferImage from "../assets/image/Offer.png";

function Offer() {
  return (
    <section className="relative w-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 py-12 overflow-hidden">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
        
        {/* Left Content */}
        <div className="space-y-4 text-center md:text-left text-white">
          <p className="text-lg font-medium">✨ Exclusive</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Offers For You
          </h2>
          <p className="text-sm md:text-base text-gray-100 uppercase font-medium">
            Only on best sellers products
          </p>
          <button className="mt-4 bg-white text-pink-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
            Check Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end relative lg:left-20 md:left-15">
          <motion.img
            src={OfferImage} 
            alt="Offer"
            className="
              w-[250px] sm:w-[300px] md:w-[380px] lg:w-[450px] 
              max-h-[500px] object-contain
            "
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Offer;
