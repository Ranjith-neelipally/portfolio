import axios from "axios";
import { useAppDispatch } from "../../ReduxStore";
import { updateWeatherState } from "../../slice/Weather";

export const FetchWeatherDetails = async (
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    dispatch(updateWeatherState({ loading: true }));
    let ipAddresss = null;
    let currentlat = null;
    let currentLong = null;
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      ipAddresss = response.data.ip;
      if (ipAddresss) {
        const response = await axios.get(
          `https://ipgeolocation.abstractapi.com/v1/?api_key=7745e7191a7c4ac8bb88c47a2368a0d8&ip_address=${ipAddresss}`
        );
        currentlat = response.data.latitude;
        currentLong = response.data.longitude;
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${currentlat}&lon=${currentLong}&appid=a442378154ea4f39159fc6ef6829234b`
          );
          if (response) {
            console.log(response.data, "weather date");
          }
        } catch (error) {
          console.log("error", error);
        }
      }
    } catch (error) {
      console.log(error);
    }

  } catch (error) {
    dispatch(updateWeatherState({ error: error.message, loading: false }));
  }
};
