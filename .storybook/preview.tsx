import React, { useMemo } from "react";
import type { Preview } from "@storybook/react";
import { Theme } from "@mui/material/styles";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import componentsCustomization from "../src/config/themes/components";
import baseThemes from "../src/config/themes/themeIndex";
import typographies from "../src/config/themes/typographies";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;

  const theme = useMemo(
    () =>
      (
        baseThemes as {
          [key: string]: Theme;
        }
      )[themeKey] as Theme,
    [themeKey]
  );
  const overrideTypography = useMemo(
    () =>
      (
        typographies as {
          [key: string]: any;
        }
      )[themeKey],

    [typographies, themeKey]
  );

  const themeOptions = useMemo(
    () => ({
      palette: theme.palette,
      typography: overrideTypography,
    }),
    [theme, overrideTypography]
  );

  const muiTheme = createTheme(themeOptions);
  muiTheme.components = componentsCustomization(themeKey, muiTheme);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "theme1",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "theme1", title: "theme1 Theme" },
        { value: "theme2", title: "theme2 Theme" },
      ],
    },
  },
};

export default preview;
