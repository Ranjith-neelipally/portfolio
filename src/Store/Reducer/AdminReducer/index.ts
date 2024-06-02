import { AdminAction } from "../../../Types/AdminTypes/AdminAction";
import { adminInitialState } from "../../InitialState/AdminInitialState";

export const adminReducer = (state: typeof adminInitialState, action: AdminAction) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading:false, 
        data:action.payload,
        error:""
      };
    case "FETCH_FAIL":
      return {
        ...state,
        loading:false, 
        error:action.payload,
        data:{}
      }
    default:
      return state;
  }
};
