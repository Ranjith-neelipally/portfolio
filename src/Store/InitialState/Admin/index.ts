import { AdminState } from "../../Types/Admin";

export const AdminInitialState: AdminState = {
  loading: false,
  error: false,
  data: {
    name: "",
    profilePic: "",
    email: "",
  },
};
