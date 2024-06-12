import { WeatherInfoAction } from "../../../Types/WeatherInfo/WeatherAction"
import {WeatherInitialState} from "../../InitialState/WeatherInitialState"

export const WeatherReducer = (
  state: typeof WeatherInitialState,
  action: WeatherInfoAction
) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCH_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: {},
      };
  }
};