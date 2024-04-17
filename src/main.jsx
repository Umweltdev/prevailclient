import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import DrawerAppBarWhite from "./components/Navbar/Appbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <DrawerAppBarWhite />
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
