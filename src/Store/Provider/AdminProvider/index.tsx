import  { createContext, useReducer, useEffect } from "react";
import { AdminContextInterface, AdminProviderProps } from "../../../@types/AdminTypes/AdminInterface";
import { adminInitialState } from "../../InitialState/AdminInitialState";
import { adminReducer } from "../../Reducer/AdminReducer";
import { fetchAdminDetails } from "../../Action/AdminAction";

const AdminContext = createContext<AdminContextInterface | undefined>(undefined);

function AdminProvider({ children }: AdminProviderProps) {
  const [state, dispatch] = useReducer(adminReducer, adminInitialState);

  useEffect(()=>{
    fetchAdminDetails(dispatch)
  }, [dispatch])

  return (
    <AdminContext.Provider value={{ state, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
}

export { AdminContext, AdminProvider };
