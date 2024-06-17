import { Link } from "react-router-dom";
import { TopNavigation, NavItems } from "./styles";
import { CustomNavLink } from "./CustomeNavLink";

interface TopNavBarProps {
  backgroundcolor?: string;
}

function TopNavBar({ backgroundcolor }: TopNavBarProps) {
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

  return (
    <TopNavigation
      backgroundcolor={backgroundcolor}
    >
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
