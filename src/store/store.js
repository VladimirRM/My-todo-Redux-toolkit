import { configureStore } from "@reduxjs/toolkit";
import todoSlice


export const store =configureStore({
    reducer:{
        todo: todoSlice
    }
})