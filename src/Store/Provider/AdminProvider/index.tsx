import  { createContext, useReducer, useEffect } from "react";
import { AdminContextInterface, AdminProviderProps } from "../../../Types/AdminTypes/AdminInterface";
import { adminInitialState } from "../../InitialState/AdminInitialState";
import { adminReducer } from "../../Reducer/AdminReducer";
import { fetchAdminDetails,fetchAdminDetailsre } from "../../Action/AdminAction";
import { useAppDispatch } from "../../ReduxStore";

const AdminContext = createContext<AdminContextInterface | undefined>(undefined);

function AdminProvider({ children }: AdminProviderProps) {
  const [state, dispatch] = useReducer(adminReducer, adminInitialState);
  const onedispatch = useAppDispatch()
  useEffect(()=>{
    fetchAdminDetailsre(onedispatch);
    fetchAdminDetails(dispatch)
  }, [dispatch,onedispatch])

  return (
    <AdminContext.Provider value={{ state, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
}

export { AdminContext, AdminProvider };
