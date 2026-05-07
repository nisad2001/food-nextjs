"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/CardProvider";

const CartItems = () => {
  const { cart } = useContext(CartContext);

  return <div>{cart.length} Items Added</div>;
};

export default CartItems;
