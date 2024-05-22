import { FormControl, InputLabel, Select as MUISelect } from "@mui/material";
import { ElementType, ReactElement, ReactNode } from "react";

interface SelectProps {
  autoWidth?: boolean;
  children?: ReactNode;
  defaultOpen?: boolean;
  defaultValue?: any;
  displayEmpty?: boolean;
  fullWidth?: boolean;
  IconComponent?: ElementType<any, any>;
  id?: string;
  labelId?: string;
  InputLabelId?: string;
  InputLabelLabel?: ReactNode;
  input?: ReactElement<any, any>;
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
  label?: ReactNode;
  MenuProps?: any;
  multiple?: boolean;
  native?: boolean;
  onChange?: (args: any) => void;
  onClose?: (args: any) => void;
  onOpen?: (args: any) => void;
  open?: boolean;
  renderValue?: (value: any) => ReactNode;
  SelectDisplayProps?: any;
  value?: any;
  variant: "filled" | "outlined" | "standard";
}

export default function Select({
  fullWidth,
  InputLabelId,
  InputLabelLabel,
  ...props
}: SelectProps) {
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id={InputLabelId}>{InputLabelLabel}</InputLabel>
      <MUISelect {...props} />
    </FormControl>
  );
}
