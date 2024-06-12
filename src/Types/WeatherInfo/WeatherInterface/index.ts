import { WeatherInfoAction } from "../WeatherAction";

export interface WeatherInfoContextInterface {
  state: WeatherInitialStateInterface;
  dispatch: React.Dispatch<WeatherInfoAction>;
}

export interface WeatherInitialStateInterface {
  loading: boolean;
  error: string;
  data?: {
    adminName?: string;
    profilePhoto?: string;
  };
}
