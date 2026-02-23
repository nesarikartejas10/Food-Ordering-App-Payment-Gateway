import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import categoryReducer from "../features/category/categorySlice";
import searchReducer from "../features/search/searchSlice";
import toast from "react-hot-toast";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
    search: searchReducer,
  },
});

store.subscribe(() => {
  try {
    const cart = store.getState().cart.cart;
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    toast.error("Could not save cart", error);
  }
});

export default store;
