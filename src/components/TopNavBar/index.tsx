import { Link } from "react-router-dom";
import { TopNavigation, NavItems } from "./styles";
import { CustomNavLink } from "./CustomeNavLink";
import { useEffect, useState } from "react";
import axios from "axios";

function TopNavBar() {
  const [currentWeather, setcurrentWeather] = useState({
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  });

  const NavItemArray = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Testimonials",
      link: "/testimonials",
    },
  ];

  const [currentLocation, setCurrentLocation] = useState({
    currentIP: "",
    currentLocation: "",
    currentLat: "",
    currentLong: "",
  });

  const getUserLocation = async () => {
    let ipAddresss = null;
    let currentlat = null;
    let currentLong = null
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      ipAddresss = response.data.ip;
      setCurrentLocation((prevState) => ({
        ...prevState,
        currentIP: response.data.ip,
      }));
      if (ipAddresss) {
        const response = await axios.get(
          `https://ipgeolocation.abstractapi.com/v1/?api_key=7745e7191a7c4ac8bb88c47a2368a0d8&ip_address=${ipAddresss}`
        );
        currentlat = response.data.latitude;
        currentLong = response.data.longitude;
        if (response) {
          setCurrentLocation((prevState) => ({
            ...prevState,
            currentLocation: response.data.city,
            currentLat: response.data.latitude,
            currentLong: response.data.longitude,
          }));
        }
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${currentlat}&lon=${currentLong}&appid=a442378154ea4f39159fc6ef6829234b`
          );
          if(response){
            console.log(response.data, "weather date")
          }
        } catch (error) {
          console.log("error", error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getUserLocation();
  },[]);

  console.log(currentLocation, "from state");

  return (
    <TopNavigation className="flex-column flex-md-row gap-2 align-items-start align-items-md-center bg-light">
      <div className="right-section flex-row justify-content-start">
        <>
          <Link to="/" title="Home" tabIndex={0} className="nav-item">
            <div className="avatar">NR</div>
          </Link>
        </>
        <>
          <div className="name">
            © <span>Code by</span>
          </div>
        </>
      </div>
      <nav
        className="left-section justify-content-end"
        aria-label="Main navigation"
      >
        <NavItems className="">
          {NavItemArray.map((item, index) => (
            <li key={index} title={item.name}>
              <CustomNavLink
                tabIndex={0}
                to={item.link}
                className={(isActive) =>
                  isActive ? "nav-item active shadow-sm" : "nav-item"
                }
              >
                {item.name}
              </CustomNavLink>
            </li>
          ))}
        </NavItems>
      </nav>
    </TopNavigation>
  );
}

export default TopNavBar;
