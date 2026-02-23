import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const loadCartFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    toast.error("Could not load cart", error);
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: loadCartFromLocalStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        state.cart = state.cart.map((item) => {
          return item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item;
        });
      } else {
        state.cart.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseQty: (state, action) => {
      state.cart = state.cart.map((item) => {
        return item.id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item;
      });
    },

    decreaseQty: (state, action) => {
      state.cart = state.cart.map((item) => {
        return item.id === action.payload
          ? { ...item, qty: item.qty - 1 }
          : item;
      });
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions;
export default cartSlice.reducer;
