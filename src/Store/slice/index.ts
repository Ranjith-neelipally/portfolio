import { createSlice } from "@reduxjs/toolkit";
import { adminInitialState } from "../InitialState/AdminInitialState";
import { AdminActionre } from "../../Types/AdminTypes/AdminAction";
import { adminInitialStateInterface } from "../../Types/AdminTypes/AdminInterface";

export const AdminSlice = createSlice({
  name: "adminSlice",
  initialState: adminInitialState,
  reducers: {
    updateAdminState: (
      state: adminInitialStateInterface,
      action: AdminActionre
    ) => {
      console.log(action.payload.data);
      return {
        ...state,
        data: action.payload.data,
      };
    },
  },
});

export default AdminSlice.reducer;
export const { updateAdminState } = AdminSlice.actions;
