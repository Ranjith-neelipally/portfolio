import { PayloadAction } from "@reduxjs/toolkit";

export interface WeatherInfoPayload {
  loading?: boolean;
  error?: string;
  data?: {
    weatherState?: string;
    temperature?: string;
  };
}

export type WeatherInfoAction = PayloadAction<WeatherInfoPayload>;