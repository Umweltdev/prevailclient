import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.js";

export function Providers({ children }) {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};
