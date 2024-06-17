import { createSlice } from "@reduxjs/toolkit";
import { ThemeInitialState } from "../../InitialState/Theme";
import { ThemeInterFace, ThemePayload } from "../../Types/Theme";
import { retry } from "@reduxjs/toolkit/query";

export const ThemeSlice = createSlice({
  name: "Theme",
  initialState: ThemeInitialState,
  reducers: {
    ToggleTheme: (state: ThemeInterFace, action: ThemePayload) => {
      state.currentTheme = action.payload.currentTheme;
    },
  },
});

export const { ToggleTheme } = ThemeSlice.actions;
export const ThemeReducer = ThemeSlice.reducer;
