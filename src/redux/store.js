import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store=configureStore({
    reducer:cartReducer
})

console.log(store.getState())