// components/store/actions/cart.js

import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("addToCart", (moduleId) => {
  return {
    payload: moduleId,
  };
});

export const removeFromCart = createAction("removeFromCart", (moduleId) => {
  return {
    payload: moduleId,
  };
});
