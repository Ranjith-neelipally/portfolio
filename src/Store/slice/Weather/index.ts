import { createSlice } from "@reduxjs/toolkit";
import { WeatherInfoAction } from "../../../Types/WeatherInfo/WeatherAction";
import { WeatherInitialState } from "../../InitialState/WeatherInitialState";
import { WeatherInitialStateInterface } from "../../../Types/WeatherInfo/WeatherInterface";


export const WeatherInfoSlice = createSlice({
  name: "WeatherInfoSlice",
  initialState: WeatherInitialState,
  reducers: {
    updateWeatherState: (
      state: WeatherInitialStateInterface,
      action: WeatherInfoAction
    ) => {
      return {
        ...state,
        data: action.payload.data,
      };
    },
  },
});

export default WeatherInfoSlice.reducer;
export const { updateWeatherState } = WeatherInfoSlice.actions;
