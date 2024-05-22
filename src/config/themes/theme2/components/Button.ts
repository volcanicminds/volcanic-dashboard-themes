import { Theme } from "@mui/material";

const Button = (theme: Theme) => {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "6px",
          fontWeight: 600,
        },
        sizeMedium: {
          padding: "5px 16px",
        },
      },
    },
  };
};

export default Button;
