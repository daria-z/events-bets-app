import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlise";
import eventsReducer from "../features/events/eventsSlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    cart: cartReducer
  },
});
