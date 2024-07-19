import axios from "axios";
import { getEnvVariable } from "../../../utils/helpers";
import { useDispatch } from "react-redux";
import { addAdminData } from "../../Slice/Admin";
import { useEffect } from "react";
import { Admin } from "../../Types/Admin";
import { useAppSelector } from "../../Provider";
import { SessionStorageManager } from "../../../utils/helpers/SessionStorageManager";

interface ApiResponse {
  status: number;
  response: {
    details?: Admin;
    error?: string;
  };
}

export const GetAdminData = (email: Admin["email"]) => {
  const baseUrl = getEnvVariable("VITE_REACT_APP_BASE_URL");
  const dispatch = useDispatch();
  const adminState = useAppSelector((state) => state.Admin);

  useEffect(() => {
    const fetchData = async () => {
      if (adminState.data?.email !== "") {
        return;
      }

      const sessionData = SessionStorageManager({
        action: "get",
        key: "admin",
      });
      if (sessionData) {
        dispatch(addAdminData({ data: sessionData, loading: false }));
        return;
      }
      try {
        dispatch(addAdminData({ loading: true, error: false }));
        const response = await axios.get<ApiResponse>(`${baseUrl}get-admin`, {
          params: { email },
        });

        if (response.status === 200 && response.data) {
          const adminDetails: any = response.data.response;
          dispatch(addAdminData({ data: adminDetails, loading: false }));
          SessionStorageManager({
            action: "set",
            key: "admin",
            data: adminDetails,
          });
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
        dispatch(addAdminData({ loading: false, error: "error.message" }));
      }
    };

    fetchData();
  }, [dispatch, baseUrl]);
};

export const AddProject = (email: Admin["email"]) => {
  const baseUrl = getEnvVariable("VITE_REACT_APP_BASE_URL");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${baseUrl}projects/get-all`, {
          params: { email },
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjects();
  }, [email]);
};
