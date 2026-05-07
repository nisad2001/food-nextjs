"use client";
import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CardProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  const cartInfo = { cart, addToCart };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CardProvider;
