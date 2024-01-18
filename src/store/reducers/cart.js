// Carpeta components, carpeta store, carpeta reducers archivo cart.js

import { createReducer } from "@reduxjs/toolkit";
import { addToCart, removeFromCart } from "../actions/cart";

const initialState = {
  cartItems: [],
  cartCount: 0, // Nueva propiedad para contar los elementos en el carrito
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      state.cartItems.push(action.payload);
      state.cartCount += 1; // Incrementar el recuento al agregar al carrito
    })
    .addCase(removeFromCart, (state, action) => {
      const indexToRemove = action.payload;
      state.cartItems.splice(indexToRemove, 1);
      state.cartCount -= 1; // Decrementar el recuento al eliminar del carrito
    });
});

export default cartReducer;
