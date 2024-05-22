import { ReactNode, useMemo } from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import componentsCustomization from "@/config/themes/components";
import baseThemes from "@/config/themes/themeIndex";
import typographies from "@/config/themes/typographies";

export const DEFAULT_THEME = import.meta.env.VITE_DEFAULT_THEME as string;

export default function ThemeCustomization({
  children,
}: {
  children: ReactNode;
}) {
  const theme = useMemo(
    () =>
      (
        baseThemes as {
          [key: string]: Theme;
        }
      )[DEFAULT_THEME] as Theme,
    [DEFAULT_THEME]
  );
  const overrideTypography = useMemo(
    () =>
      (
        typographies as {
          [key: string]: any;
        }
      )[DEFAULT_THEME],

    [typographies, DEFAULT_THEME]
  );

  const themeOptions = useMemo(
    () => ({
      palette: theme.palette,
      typography: overrideTypography,
    }),
    [theme, overrideTypography]
  );

  const muiTheme = createTheme(themeOptions);
  muiTheme.components = componentsCustomization(DEFAULT_THEME, muiTheme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
