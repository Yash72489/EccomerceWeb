import React, { createContext, useReducer } from "react";
import {
  Beautydata,
  KidData,
  Mensdata,
  ShopData,
  Sportdata,
  Womendata,
} from "../../data/Shop.data";
import { cartReducer } from "../../Reducer";

export const ShopPacksContext = createContext(null);

const initialState = {
  shopPacks: ShopData,
  kiddata: KidData,
  womendata: Womendata,
  beautydata: Beautydata,
  sportdata: Sportdata,
  mensdata: Mensdata,
  count: 0,
  cart: [],
};

export const ShopPacksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Prevent quantity from going below 1
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  return (
    <ShopPacksContext.Provider
      value={{
        shopPacks: state.shopPacks,
        kiddata: state.kiddata,
        womendata: state.womendata,
        beautydata: state.beautydata,
        sportdata: state.sportdata,
        mensdata: state.mensdata,
        count: state.count,
        cart: state.cart,
        addToCart,
        removeFromCart,
        updateQuantity, // Add this function
      }}
    >
      {children}
    </ShopPacksContext.Provider>
  );
};
