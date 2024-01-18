// components/store.js

import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cities";
import itinerariesReducer from "./reducers/itineraries";
import usersReducer from "./reducers/users";
import activitiesReducer from "./reducers/activities";
import cartReducer from "./reducers/cart"; // Asegúrate de importar correctamente el reductor del carrito

export default configureStore({
  reducer: {
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    users: usersReducer,
    activities: activitiesReducer,
    cart: cartReducer, // Asegúrate de agregar el reductor del carrito correctamente
  },
});
