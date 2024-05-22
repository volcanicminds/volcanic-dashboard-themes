import { Theme } from "@mui/material";

const Button = (theme: Theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          fontWeight: 100,
        },
      },
    },
  };
};

export default Button;
