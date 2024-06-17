import { PayloadAction } from "@reduxjs/toolkit";

export interface ThemeInterFace {
  currentTheme: "light" | "dark";
}

export type ThemePayload = PayloadAction<ThemeInterFace>