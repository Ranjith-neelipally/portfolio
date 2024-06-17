import { PayloadAction } from "@reduxjs/toolkit";

export interface Admin {
  name?: string;
  profilePic?: string;
  email?: string;
}

export interface AdminState {
  loading?: boolean;
  error?: string | boolean;
  data?: Admin;
}

export type AdminPayload = PayloadAction<AdminState>;
