import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import cartReducer from "../utils/cartSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    },
});

export default store;