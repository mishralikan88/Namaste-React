import React from "react";
import { useSelector } from "react-redux";

const cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return <div>cart Items - {cartItems.length}</div>;
};

export default cart;
