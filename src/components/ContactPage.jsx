import React, { useState } from "react";
import { motion } from "framer-motion";
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section onClick={window.scroll(0,0)} className="w-full py-16 bg-gradient-to-r mt-8 from-pink-400 via-pink-500 to-pink-600 ">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <div className="w-32 h-1 mx-auto mt-2 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 rounded-full"></div>
          <p className="mt-4 text-white">
            Have questions? Send us a message and we will get back to you shortly.
          </p>
        </div>

        {/* Contact Info & Form */}
        <motion.div
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          transition={{ duration: 1, ease: "easeOut" }}

          className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col space-y-6 bg-white/90 p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Email</h2>
              <p className="text-gray-600">suyp8944@gmail.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Phone</h2>
              <p className="text-gray-600">+885 882202719</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Address</h2>
              <p className="text-gray-600">TekThla, PnomPenh, Cambodia</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white font-bold py-3 rounded-lg hover:scale-105 transition-transform duration-100"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Google Map (Phnom Penh) */}
      <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-64"
          src="https://www.google.com/maps?q=Phnom%20Penh%2C%20Cambodia&z=12&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      </div>
    </section>
  );
}

export default ContactPage;
