import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">About Us</h2>
          <p className="text-gray-400 text-sm">
            We offer the latest fashion trends for women, providing high-quality clothing with fast shipping and excellent customer support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-pink-500 transition">Shop</li>
            <li className="hover:text-pink-500 transition">Men</li>
            <li className="hover:text-pink-500 transition">Women</li>
            <li className="hover:text-pink-500 transition">Kids</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Customer Service</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-pink-500 transition">Shipping & Returns</li>
            <li className="hover:text-pink-500 transition">Privacy Policy</li>
            <li className="hover:text-pink-500 transition">Terms & Conditions</li>
            <li className="hover:text-pink-500 transition">Track Order</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Follow Us</h2>
          <div className=" space-x-4">
            <a href="https://web.facebook.com/zsmoszin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 flex items-center transition">
              <FaFacebook className=""/><span className="ms-2">Facebook</span>
            </a>
            <a href="https://www.instagram.com/mepkach/" className="text-gray-400 hover:text-pink-500 flex items-center transition">
              <FaInstagram/> <span className="ms-2">Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@sethsmos23" className="text-gray-400 hover:text-gray-500 flex items-center transition">
              <FaTiktok/> <span className="ms-2">Tiktok</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-[90%] md:w-[80%] mx-auto mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Z-Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
