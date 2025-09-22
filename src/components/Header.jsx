import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useCart } from "./ShopContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  // Define menu items with paths
  const menuItems = [
    { name: "Shop", path: "/" },
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "Kids", path: "/kids" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="w-[90%] md:w-[80%] mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Z-Store
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-700">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link to={item.path} className="hover:text-pink-500 transition">
                {item.name}
              </Link>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Login & Cart */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/login"
            className="cursor-pointer px-4 py-1 border border-gray-700 text-lg text-gray-800 rounded-lg hover:bg-gray-900 hover:text-white transition"
          >
            Login
          </Link>

         {/* Cart Button */}
          <Link to="/cart" className="relative cursor-pointer">
            <FaCartPlus className="text-2xl text-gray-700 hover:text-gray-900" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <HiX
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <HiMenuAlt3
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 py-4 text-lg font-medium text-gray-700 text-center">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="hover:text-pink-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Login & Cart */}
          <div className="flex flex-col items-center space-y-4 pb-4">
            <Link
              to="/login"
              className="w-[80%] cursor-pointer px-4 py-2 border border-gray-700 text-lg text-gray-800 rounded-lg hover:bg-gray-900 hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/cart"
              className="relative cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <FaCartPlus className="text-2xl text-gray-700 hover:text-gray-900" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                0
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
