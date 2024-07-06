import { PayloadAction } from "@reduxjs/toolkit";

export interface DisplayPayLoadInterface {
  isMobile: boolean;
}

export type DisplayState = PayloadAction<DisplayPayLoadInterface>;
