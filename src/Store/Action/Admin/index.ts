import axios from "axios";
import { getEnvVariable } from "../../../utils/helpers";
import { useDispatch } from "react-redux";
import { addDate } from "../../Slice/Admin";
import { useEffect } from "react";
import { Admin } from "../../Types/Admin";

interface ApiResponse {
  status: number;
  data: {
    details?: Admin;
    error?: string;
  };
}

export const GetAdminData = (email: Admin["email"]) => {
  const baseUrl = getEnvVariable("VITE_REACT_APP_BASE_URL");
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(addDate({ loading: true }));
        const responseData: ApiResponse = await axios.get(
          `${baseUrl}getAdminDetails`,
          {
            params: { email },
          }
        );

        if (responseData.status === 200 && responseData.data) {
          dispatch(
            addDate({
              loading: false,
              data: responseData.data.details,
              error: responseData.data.error,
            })
          );
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchData();
  }, [dispatch, baseUrl]);
};

export const AddProject = (email: Admin["email"]) => {
  const baseUrl = "https://ranjith-neelipally-portfolio-backend.vercel.app/";

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
