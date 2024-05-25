export interface ButonProps {
  onClick?: () => void;
  isDisabled?: boolean;
  variant?: "text" | "outlined" | "contained";
  children: React.ReactNode;
  title?: string;
  className?: string;
  size?: "small" | "medium" | "large";
}
