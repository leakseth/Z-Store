// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext); //teanh yk data pi provider

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add product or increase quantity
  const addToCart = (product, size) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, size, quantity: 1 }];
    });
  };

  // Remove product completely
  const removeFromCart = (productId, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === productId && item.size === size))
    );
  };

  // Update quantity (+/-)
  const updateQuantity = (productId, size, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
