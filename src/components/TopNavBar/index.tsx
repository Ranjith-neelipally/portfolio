import { TopNavBar, Avatar } from "my-material-theme-ui-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Store/Provider";

function TopNavBarComponnet({ isMobile: _isMobile }: any) {
  const navigate = useNavigate();
  const adminState = useAppSelector((state) => state.Admin);
  const slug = adminState.data?.slug;

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

  const handleClick = (path: string) => {
    navigate(path);
    setcurrentUrl(path);
  };

  const getSlugPath = (subPath: string) => {
    return slug ? `/${slug}${subPath === "/" ? "" : subPath}` : subPath;
  };

  const NavItemArray = [
    {
      id: "home",
      label: "Home",
      className: "nav-item",
      ariaLabel: "Navigation Item 1",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === getSlugPath("/") || currentUrl === getSlugPath(""),
      onClick: () => {
        handleClick(getSlugPath("/"));
      },
    },
    {
      id: "navItem2",
      label: "About",
      className: "nav-item",
      ariaLabel: "Navigation Item 2",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === getSlugPath("/about"),
      onClick: () => {
        handleClick(getSlugPath("/about"));
      },
    },
    {
      id: "navItem3",
      label: "Work",
      className: "nav-item",
      ariaLabel: "Navigation Item 3",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === getSlugPath("/work"),
      onClick: () => {
        handleClick(getSlugPath("/work"));
      },
    },
    {
      id: "navItem4",
      label: "Skills",
      className: "nav-item",
      ariaLabel: "Navigation Item 4",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === getSlugPath("/skills"),
      onClick: () => {
        handleClick(getSlugPath("/skills"));
      },
    },
    {
      id: "Contact",
      label: "Testimonials",
      className: "nav-item",
      ariaLabel: "Navigation Item 5",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === getSlugPath("/testimonial"),
      onClick: () => {
        handleClick(getSlugPath("/testimonial"));
      },
    },
    {
      id: "Testimonials",
      label: "Contact",
      className: "nav-item",
      ariaLabel: "Navigation Item 6",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === getSlugPath("/contact"),
      onClick: () => {
        handleClick(getSlugPath("/contact"));
      },
    },
  ];

  return (
    <TopNavBar
      navItems={NavItemArray}
      topnavIcon={<Avatar label={adminState.data?.userName || "Ranjith"} />}
      navbarHeaderText={adminState.data?.userName || "Ranjith Neelipally"}
      navBarHeaderDesc={adminState.data?.userName ? "Full Stack Developer" : "Front-end, UX/UI Developer"}
      // $navLoaction={isMobile ? "" : "side"}
    />
  );
}

export default TopNavBarComponnet;
