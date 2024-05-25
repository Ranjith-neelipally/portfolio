import { ButonProps } from "./helpers";
import Button from "@mui/material/Button";

function CustomButton({
  onClick,
  isDisabled,
  title,
  children,
  variant = "text",
  size,
}: ButonProps) {
  return (
    <>
      <Button
        onClick={onClick}
        disabled={isDisabled}
        variant={variant}
        size={size}
      >
        <>{children}</>
        {title}
      </Button>
    </>
  );
}

export default CustomButton;
