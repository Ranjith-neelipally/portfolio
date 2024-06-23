import { TopNavBar } from "my-material-theme-ui-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TopNavBarComponnet() {
  const navigate = useNavigate();

  const [currentUrl, setcurrentUrl] = useState("/");

  const GetCurrentUrl = () => {
    setcurrentUrl(window.location.pathname);
  };

  useEffect(() => {
    GetCurrentUrl();
    window.addEventListener("popstate", GetCurrentUrl);
    return () => {
      window.removeEventListener("popstate", GetCurrentUrl);
    };
  }, []);

  console.log(currentUrl);

  const handleClick = (path: string) => {
    navigate(path);
    setcurrentUrl(path);
  };
  const NavItemArray = [
    {
      id: "home",
      label: "Home",
      className: "nav-item",
      ariaLabel: "Navigation Item 1",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === "/",
      onClick: () => {
        handleClick("/");
      },
    },
    {
      id: "navItem2",
      label: "About",
      className: "nav-item",
      ariaLabel: "Navigation Item 2",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === "/about",
      onClick: () => {
        handleClick("/about");
      },
    },
    {
      id: "navItem3",
      label: "Work",
      className: "nav-item",
      ariaLabel: "Navigation Item 3",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === "/work",
      onClick: () => {
        handleClick("/work");
      },
    },
    {
      id: "navItem4",
      label: "Skills",
      className: "nav-item",
      ariaLabel: "Navigation Item 4",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === "/skills",
      onClick: () => {
        handleClick("/skills");
      },
    },
    {
      id: "Contact",
      label: "Testimonials",
      className: "nav-item",
      ariaLabel: "Navigation Item 5",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === "/testimonial",
      onClick: () => {
        handleClick("/testimonial");
      },
    },
    {
      id: "Testimonials",
      label: "Contact",
      className: "nav-item",
      ariaLabel: "Navigation Item 6",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === "/contact",
      onClick: () => {
        handleClick("/contact");
      },
    },
  ];

  return <TopNavBar navItems={NavItemArray}/>;
}

export default TopNavBarComponnet;
