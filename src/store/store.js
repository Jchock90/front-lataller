// components/store.js

import { configureStore } from "@reduxjs/toolkit";
import workshopsReducer from "./reducers/workshops";
import modulesReducer from "./reducers/modules";
import usersReducer from "./reducers/users";
import activitiesReducer from "./reducers/activities";
import cartReducer from "./reducers/cart"; // Asegúrate de importar correctamente el reductor del carrito

export default configureStore({
  reducer: {
    workshops: workshopsReducer,
    modules: modulesReducer,
    users: usersReducer,
    activities: activitiesReducer,
    cart: cartReducer, // Asegúrate de agregar el reductor del carrito correctamente
  },
});
