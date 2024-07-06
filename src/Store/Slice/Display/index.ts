import { createSlice } from "@reduxjs/toolkit";
import { DisplayInitialState } from "../../InitialState/Display";
import { DisplayPayLoadInterface, DisplayState } from "../../Types/Display";

export const DisplaySlice = createSlice({
  name: "display",
  initialState: DisplayInitialState,
  reducers: {
    getDisplaySize: (state: DisplayPayLoadInterface, action: DisplayState) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { getDisplaySize } = DisplaySlice.actions;
export const displayreducer = DisplaySlice.reducer;
