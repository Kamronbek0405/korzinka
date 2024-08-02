import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./products/products"
import { saveState } from "../utils/storage";


export const store = configureStore({
    reducer:{
        product: ProductReducer,
    }
});

store.subscribe(()=>{
    saveState("products", store.getState().product)
})