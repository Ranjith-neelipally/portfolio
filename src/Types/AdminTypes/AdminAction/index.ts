import { PayloadAction } from "@reduxjs/toolkit";

  export interface AdminPayload {
    loading?: boolean;
    error?: string;
    data?: {
      adminName?: string;
      profilePhoto?: string;
    };
  }
  
  export type AdminAction = PayloadAction<AdminPayload>; 