import React from "react";
import { Link as Anchor } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const cartCount = useSelector((store) => store.cart.cartCount);

  return (
    <>
      <Anchor
        to="/cart"
        className="text-black hover:text-white px-4 py-2 pt-3 flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        {cartCount > 0 && (
          <span className="bg-red-500 text-white px-2 ml-1 rounded-full">
            {cartCount}
          </span>
        )}
      </Anchor>
    </>
  );
}
