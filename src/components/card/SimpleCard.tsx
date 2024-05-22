import { Card, CardContent, CardHeader } from "@mui/material";
import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(0 0 0 / 40%)",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(135deg, rgba(27,27,27,0.57) 0%, rgba(0,0,0,0) 100%);",
          "& .MuiCardHeader-content": {
            color: "#ffffff",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
  },
});

interface CardProps {
  title?: ReactNode;
  children?: ReactNode;
}

export default function SimpleCard({ title, children }: CardProps) {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        {title && <CardHeader title={title} />}
        {children && <CardContent children={children} />}
      </Card>
    </ThemeProvider>
  );
}
