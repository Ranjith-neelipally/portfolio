import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDisplaySize } from "../../Slice/Display";

export const toggleScreenSize = () => {
  const dispatch = useDispatch();
  const handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    dispatch(getDisplaySize({ isMobile }));
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
};
