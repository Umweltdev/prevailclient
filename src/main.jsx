import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
