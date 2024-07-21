import { useEffect } from "react";
import { getEnvVariable } from "../../../utils/helpers";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProjectdata } from "../../Slice/Projects";
import { useAppSelector } from "../../Provider";
import { ForceUPdateStore } from "../../Types/CommonTypes";
import { ProjectsPayload } from "../../Types/Projects";

export const GetAllProjects = ({
  forceUpdate = false,
}: ForceUPdateStore = {}) => {
  const baseUrl = getEnvVariable("VITE_REACT_APP_BASE_URL");
  const email = getEnvVariable("VITE_REACT_APP_ADMIN_EMAIL");
  const dispatch = useDispatch();
  const projects: ProjectsPayload = useAppSelector((state) => state.Projects);

  console.log(projects, "projects from store");
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
          getProjectdata({
            loading: false,
            error: error.response.data.error.toString(),
          })
        );
      }
    };

    if (
      !projects ||
      (projects.data && projects.data[0]._id === "") ||
      forceUpdate
    ) {
      getProjects();
    }
  }, [baseUrl, dispatch, forceUpdate]);
};
