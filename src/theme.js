import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
 
  palette: {
    mode: "light",
    primary: {
      main: "#884ed9",
      light: "#d1c4e9",
      contrastText: "#fff",
    },
    secondary: {
      main: "#1D0D40",
    },
    success: {
      main: "#027A48",
    },
    background: {
      default: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
      paper: "rgba(255, 255, 255, 0.7)",
    },
    text: {
      primary: "#1D0D40",
      secondary: "#505660",
    },
  },

  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 14,
    h1: {
      fontWeight: 800,
      fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: "clamp(1.5rem, 4vw, 2rem)",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
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
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: 1.5,
      color: "#505660",
    },
    body2: {
      fontWeight: 600,
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

  // Using your exact breakpoint values for consistency across your app.
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 968,
      lg: 1250,
      xl: 1536,
    },
  },

  // Adding specific styles for Buttons, Cards, etc., for the modern UI.
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          textTransform: "none",
          fontWeight: 600,
          padding: "12px 28px",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#5828e3",
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          transition: "transform 0.3s ease-in-out, border-color 0.3s ease-in-out",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      }
    }
  },
});