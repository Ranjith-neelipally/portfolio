import { AdminPayload } from "../../Types/Admin";

export const AdminInitialState: AdminPayload = {
  loading: false,
  error: false,
  data: {
    name: "",
    profilePic: "",
    email: "",
  },
};
