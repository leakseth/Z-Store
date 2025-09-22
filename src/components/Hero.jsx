import React from "react";
import { motion } from "framer-motion";
import Hero from "../assets/image/Hero.png";

function Hero() {
  return (
    <section className="w-full h-auto md:h-screen bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 ">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-0 h-full">
        
        {/* Left Content */}
        <motion.div 
          className="flex flex-col space-y-4 text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-700 font-semibold">
            NEW ARRIVALS ONLY
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            new 👋 <br />
            collections <br />
            <span className="text-white drop-shadow-md">for everyone</span>
          </h1>
          <motion.button
            className="px-6 py-2 sm:px-8 sm:py-3 w-fit mx-auto md:mx-0 bg-gray-900 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Latest Collection
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="mb-8 md:mb-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <motion.img
            src={Hero}
            alt="Hero Collection"
            className="w-[220px] sm:w-[300px] md:w-[420px] lg:w-[500px] drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
