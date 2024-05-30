import { AdminAction } from "../AdminAction";

export interface AdminContextInterface {
  state: adminInitialStateInterface;
  dispatch: React.Dispatch<AdminAction>;
}

export interface AdminProviderProps {
  children: React.ReactNode;
}

export interface adminInitialStateInterface {
  loading: boolean;
  error: string;
  data?: {
    adminName?: string;
    profilePhoto?: string;
  };
}

