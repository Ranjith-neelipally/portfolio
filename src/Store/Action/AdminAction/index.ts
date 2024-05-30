import axios from "axios";
import { AdminAction } from "../../../@types/AdminTypes/AdminAction";

export const fetchAdminDetails = async (dispatch: React.Dispatch<AdminAction>) => {
    try {
      const res = await axios.get(
        "https://ranjith-neelipally-portfolio-backend.vercel.app/getAdminDetails?email=ranjith@21gangmissal.com"
      );
      dispatch({
        type: "FETCH_SUCCESS",
        payload: {
          adminName: res.data.details.name,
          profilePhoto: res.data.details.profilePhoto,
        },
      });
    } catch (err:any) {
      dispatch({
        type: "FETCH_FAIL",
        payload: err.message,
      });
    }
  };