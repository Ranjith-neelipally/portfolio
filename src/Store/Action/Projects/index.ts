import { useEffect } from "react";
import { getEnvVariable } from "../../../utils/helpers";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProjectdata } from "../../Slice/Projects";

export const GetAllProjects = () => {
  const baseUrl = getEnvVariable("VITE_REACT_APP_BASE_URL");
  const email = getEnvVariable("VITE_REACT_APP_ADMIN_EMAIL");
  const dispatch = useDispatch();
  useEffect(() => {
    const getProjects = async () => {
      dispatch(getProjectdata({ loading: true, error: false }));
      try {
        const response = await axios.get(`${baseUrl}projects/get-all`, {
          params: { email },
        });

        const data = await response.data;
        if (data) {
          dispatch(getProjectdata({ loading: false, data }));
        }
      } catch (error: any) {
        dispatch(
          getProjectdata({ loading: false, error: error.response.data.error.toString()  })
        );
      }
    };
    getProjects();
  }, [baseUrl, dispatch]);
};
