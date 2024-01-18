// components/store/actions/cart.js

import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("addToCart", (itineraryId) => {
  return {
    payload: itineraryId,
  };
});

export const removeFromCart = createAction("removeFromCart", (itineraryId) => {
  return {
    payload: itineraryId,
  };
});
