import { TextField } from "@mui/material";
import { ReactNode, useMemo } from "react";

interface BasicInputProps {
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "medium" | "small";
  disabled?: boolean;
  defaultValue?: any;
  error?: boolean;
  fullWidth?: boolean;
  id?: string;
  inputProps?: {
    "aria-label"?: string;
    form?: string;
    max?: number | string;
    maxLength?: number;
    min?: number | string;
    minLength?: number;
    pattern?: string;
    readOnly?: boolean;
    step?: number | string;
  };
  InputProps?: any;
  label?: string;
  margin?: "dense" | "none" | "normal";
  maxRows?: number | string;
  minRows?: number | string;
  multiline?: boolean;
  name?: string;
  onChange?: (args: any) => void;
  onBlur?: (args: any) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number | string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  //   sx?:
  //     | Array<(args: any) => any | object | boolean>
  //     | ((args: any) => any)
  //     | object;
  type?:
    | "date"
    | "datetime-local"
    | "email"
    | "hidden"
    | "number"
    | "password"
    | "range"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  value?: any;
  variant?: "filled" | "outlined" | "standard";
}

export default function BasicInput({
  startAdornment,
  endAdornment,
  ...props
}: BasicInputProps) {
  const InputProps = useMemo(() => {
    return { ...(props.InputProps || {}), startAdornment, endAdornment };
  }, [startAdornment, endAdornment]);

  return <TextField InputProps={InputProps} {...props} />;
}
