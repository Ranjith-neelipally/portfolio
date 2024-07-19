import { PayloadAction } from "@reduxjs/toolkit";

export interface Admin {
  userName?: string;
  profilePic?: string;
  email?: string;
}

export interface AdminPayload {
  loading?: boolean;
  error?: string | boolean;
  data?: Admin | null;
}

export type AdminState = PayloadAction<AdminPayload>;
