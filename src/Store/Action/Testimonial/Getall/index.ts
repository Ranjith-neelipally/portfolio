import { useEffect } from "react";
import { getEnvVariable } from "../../../../utils/helpers";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getTestimonialData } from "../../../Slice/Testimonials";
import { useAppSelector } from "../../../Provider";
export const GetAllTestimonials = () => {
  const baseUrl = getEnvVariable("VITE_REACT_APP_BASE_URL");
  const email = getEnvVariable("VITE_REACT_APP_ADMIN_EMAIL");
  const dispatch = useDispatch();
  const AllData = useAppSelector((state) => state.Testimonials.data);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const response = await axios.get(`${baseUrl}testimonials`, {
          params: { email },
        });
        dispatch(getTestimonialData({ loading: true }));
        const data = await response.data;
        if (data) {
          dispatch(getTestimonialData({ loading: false, data }));
        }
        console.log(data, "data");
      } catch (error: any) {
        dispatch(
          getTestimonialData({
            loading: false,
            error: error.response.data.error.toString(),
          })
        );
        console.log(error.response.data.error.toString());
      }
    };
    getTestimonials();
  }, [baseUrl, email]);
};
