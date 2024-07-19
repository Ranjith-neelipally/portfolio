import { useEffect } from "react";
import { getEnvVariable } from "../../../../utils/helpers";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getSkillsdata } from "../../../Slice/Skills";

export const GetAllSkills = () => {
  const baseUrl = getEnvVariable("VITE_REACT_APP_BASE_URL");
  const email = getEnvVariable("VITE_REACT_APP_ADMIN_EMAIL");
  const dispatch = useDispatch();
  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await axios.get(`${baseUrl}skills`, {
          params: { email },
        });
        const data = await response.data;
        if (data) {
          dispatch(getSkillsdata({ loading: false, data }));
        }
        console.log(data, "data");
      } catch (error: any) {
        dispatch(
          getSkillsdata({
            loading: false,
            error: error.response.data.error.toString(),
          })
        );
      }
    };
    getSkills();
  }, [baseUrl, dispatch]);
};
