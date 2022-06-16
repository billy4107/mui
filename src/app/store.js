import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "../components/sideBarSlice";

export const store = configureStore({
    reducer: {
        side: sideBarReducer
    }
})