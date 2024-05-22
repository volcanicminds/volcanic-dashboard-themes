import { PaletteMode, createTheme } from "@mui/material";

export default function Palette(mode: PaletteMode) {
  return createTheme({
    palette: {
      primary: {
        main: "#e3281e",
        light: "#f15653",
        dark: "#b41915",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#7009a3",
        light: "#c55fe0",
        dark: "#520678",
        contrastText: "#000000",
      },
      success: {
        main: "#F2B24E",
        light: "#F5C97D",
        dark: "#D18F31",
        contrastText: "#333333",
      },
      warning: {
        main: "#E6624F",
        light: "#EA817D",
        dark: "#C54441",
        contrastText: "#FFFFFF",
      },
      error: {
        main: "#4BB543",
        light: "#80E07A",
        dark: "#188B2E",
        contrastText: "#FFFFFF",
      },
    },
  });
}
