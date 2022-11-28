import { set } from "lodash";
import React, { useReducer, useContext, createContext, useEffect } from "react";
import {
  getItem,
  setItem,
  clearStorage,
} from "../core/services/storage/storage";
import { LoadProduct } from "../helper/function";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = items
    .reduce((total, product) => total + product.cost * product.quantity, 0)
    .toFixed(0);
  return { itemsCounter, total };
};

const cartReducer = (state, action) => {
  //console.log(state);

  switch (action.type) {
    case "ADD_ITEM":
      if (
        !state.selectedItems.find((item) => item._id === action.payload._id)
      ) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      setItem(
        "Cart",
        JSON.stringify(state.selectedItems.map((item) => item._id))
      );

      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false,
      };

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item._id !== action.payload._id
      );

      setItem("Cart", JSON.stringify(newSelectedItems.map((item) => item._id)));
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };

    case "CHECKOUT":
      setItem(
        "Checkout",
        JSON.stringify(state.selectedItems.map((item) => item._id))
      );
      const carts = JSON.parse(getItem("Checkout"));
      //console.log("cart= " + carts);

      setItem("Cart", JSON.stringify([]));
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };

    case "CLEAR":
      setItem("Cart", JSON.stringify([]));
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };

    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    LoadProduct(JSON.parse(getItem("Cart"))).then((payload) => {
      payload.forEach((item) => {
        dispatch({ type: "ADD_ITEM", payload: item });
      });
      //console.log(payload);
    });
  }, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
