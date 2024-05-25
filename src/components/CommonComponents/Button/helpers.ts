export interface ButonProps {
  onClick?: () => void;
  isDisabled?: boolean;
  buttonType?: "primary" | "secondary" | "danger" | "ghost";
  children: React.ReactNode;
  title?: string;
  className?: string;
}
