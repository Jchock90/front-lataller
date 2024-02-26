import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/actions/cart";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (moduleId) => {
    // Dispatch para eliminar un elemento del carrito
    dispatch(removeFromCart(moduleId));
  };

  return (
    <div className="flex flex-col items-center pt-10">
            <h2 className="text-6xl text-black font-bold rounded-xl p-2 lowercase" id="gothicFont">Carrito</h2>

    <div className="flex flex-col items-center pt-10" id="navStyle">
      {cartItems.map((item) => (
        <div key={item.id} className="flex flex-col items-center w-[360px] mb-4 p-2 bg-gray-100 rounded-xl">
          <img
            src={item.photo}
            alt={item.name}
            className="w-full h-40 object-cover mb-2 rounded-xl"
          />
          <div className="text-center mb-2">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-gray-600">{item.price} ARS</p>
          </div>
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="w-[80px] h-[40px] shadow-md border-2 font-semibold text-white text-tracking-wider text-center  bg-violetin border-white hover:border-b-4 hover:border-[#b7f708] rounded-xl px-4 py-2 pt-3 flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-black"
          >
            Eliminar
          </button>
        </div>
      ))}
      {cartItems.length === 0 && (
        <p className="text-gray-600 text-4xl pt-10" id="navStyle">El carrito está vacío</p>
      )}
    </div>
    </div>
  );
};

export default ShoppingCart;
