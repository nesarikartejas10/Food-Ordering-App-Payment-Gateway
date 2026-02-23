import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import categoryReducer from "../features/category/categorySlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
  },
});

export default store;
