import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice"
import collectionReducer from "./collectionSlice"
export const store=configureStore({
    reducer:{
        search:searchReducer,
        collection:collectionReducer
    }
})