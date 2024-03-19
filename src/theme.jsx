import { createTheme } from "@mui/material/styles";

const palette = {
  primary: {
    light: "#d6c0ee",
    main: "#a16ad9",
    dark: "#40009f",
    contrastText: "#ffffff",
  },
  secondary: {
    light: "#c3d2ef",
    main: "#7097da",
    dark: "#003994",
    contrastText: "#ffffff",
  },
  other: {
    light: "#efe6f9",
    main: "#884ed9",
    dark: "#3101ae",
    contrastText: "#ffffff",
  },
};

const typography = {
  fontFamily: "Quando, serif",

  // Weight
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  // Size
  fontSizeSmall: 12,
  fontSize: 16,
  fontSizeMedium: 22,
  fontSizeBig: 32,
  fontSizeSubHeader: 45,
  fontSizeHeader: 57,
};

const theme = createTheme({
  palette,
  typography,
});

export default theme;
