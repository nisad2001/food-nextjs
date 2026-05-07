"use client";
import { CartContext } from "@/context/CardProvider";
import React, { useContext, useState } from "react";

const CartButton = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(food);
    setInCart(true);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={inCart}
      className='flex-1 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 font-semibold'
    >
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default CartButton;
