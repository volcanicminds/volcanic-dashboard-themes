import {
  Button as MUIButton,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { ReactNode } from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  label?: string;
  icon?: ReactNode;
  onClick?: () => void;
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  isLoading?: boolean;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  //To add more cases we have to define a palette
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isIconButton?: boolean;
  children?: ReactNode;
}

export const Button = ({
  icon,
  isIconButton,
  isLoading,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return isIconButton ? (
    <IconButton disabled={disabled || isLoading} {...props}>
      {isLoading ? <CircularProgress color={props.color} /> : icon}
    </IconButton>
  ) : (
    <MUIButton disabled={disabled || isLoading} {...props}>
      {isLoading ? <CircularProgress color={props.color} /> : children}
    </MUIButton>
  );
};
