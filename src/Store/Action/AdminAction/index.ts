import axios from "axios";
import { useAppDispatch } from "../../ReduxStore";
import { updateAdminState } from "../../slice/Admin";
import { AdminFormFields } from "../../../Types/AdminForm";

const baseUrl = "https://ranjith-neelipally-portfolio-backend.vercel.app/";

export const fetchAdminDetails = async (
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    dispatch(updateAdminState({ loading: true }));
    const res = await axios.get(
      `${baseUrl}getAdminDetails?email=email@email.com`
    );

    dispatch(
      updateAdminState({
        data: {
          adminName: res.data.details.name,
          profilePhoto: res.data.details.profilePhoto,
        },
        loading: false,
        error: "",
      })
    );
  } catch (err: any) {
    dispatch(updateAdminState({ error: err.message, loading: false }));
  }
};

export const postAdminDetails = async (formDetails: AdminFormFields) => {
  if (formDetails) {
    try {
      await axios.post(`${baseUrl}adminform`, formDetails);
      console.log("Details posted successfully");
    } catch (err) {
      console.log(err);
    }
  }
};
