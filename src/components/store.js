import { configureStore, createSlice } from "@reduxjs/toolkit";
import CartReducer from "./slice1.js";
const stores=configureStore({
    reducer:{
        slice1:CartReducer

    }
})
export default stores;