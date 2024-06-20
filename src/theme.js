import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#884ed9",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 14,
    h5: {
      fontWeight: 700,
      fontSize: "25px",
      lineHeight: 1,
    },
    h6: {
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: 1,
    },
    body2: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: 1.5,
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: 1.5,
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: 1.5,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 968,
      lg: 1250,
      xl: 1536,
    },
  },
});
