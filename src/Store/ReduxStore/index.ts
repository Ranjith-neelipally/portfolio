import { configureStore } from "@reduxjs/toolkit";
import { AdminSlice } from "../slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{
        admin:AdminSlice.reducer
    }
})

export const useAppDispatch:()=> typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector

