import { ButonProps } from "./helpers";
import { ButtonStyles } from "./styles";

function Button({
  onClick,
  isDisabled,
  title,
  children,
  buttonType,
}: ButonProps) {
  return (
    <>
      <ButtonStyles
        onClick={onClick}
        disabled={isDisabled}
        buttonType={buttonType}
      >
        <>{children}</>
        {title}
      </ButtonStyles>
    </>
  );
}

export default Button;
