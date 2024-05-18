import React from "react";
import { NavLink as ReactRouterNavLink, NavLinkProps } from "react-router-dom";

interface CustomNavLinkProps extends Omit<NavLinkProps, "className"> {
  activeClassName?: string;
  children?: React.ReactNode;
  className?: string | ((isActive: boolean) => string | undefined);
}

export const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  activeClassName = "",
  children,
  className,
  ...props
}) => {
  const getClassName = ({ isActive }: { isActive: boolean }) => {
    let activeClass = isActive ? activeClassName : "";
    if (typeof className === "function") {
      return `${className(isActive)} ${activeClass}`.trim();
    }
    return `${className} ${activeClass}`.trim();
  };

  return (
    <ReactRouterNavLink {...props} className={getClassName}>
      {children}
    </ReactRouterNavLink>
  );
};
