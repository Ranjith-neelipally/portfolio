import { configureStore } from "@reduxjs/toolkit";
import { AdminSlice } from "../slice/Admin";
import { WeatherInfoSlice } from "../slice/Weather";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    admin: AdminSlice.reducer,
    weather: WeatherInfoSlice.reducer,
  },
});

export const useAppDispatch:()=> typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector

