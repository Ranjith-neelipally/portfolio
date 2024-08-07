import { createSlice } from "@reduxjs/toolkit";
import { AdminInitialState } from "../../InitialState/Admin";
import { AdminPayload, AdminState } from "../../Types/Admin";

export const AdminSlice = createSlice({
  name: "admin",
  initialState: AdminInitialState,
  reducers: {
    addAdminData: (state: AdminPayload, action: AdminState) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { addAdminData } = AdminSlice.actions;
export const adminreducer = AdminSlice.reducer;
