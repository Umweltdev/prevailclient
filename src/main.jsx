import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import DrawerAppBarWhite from "./components/Navbar/Appbar.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <DrawerAppBarWhite />
        <ThemeProvider theme={theme}>
        <App />

        </ThemeProvider>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
