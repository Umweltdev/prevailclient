import { useContext, useState } from "react";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import FooterNew from "../components/Footer/FooterNew";
import Login from "../components/Form/Login";
import { AuthContext } from "../context/AuthContext";

const LoginForm = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* <DrawerAppBarWhite {...props} isLoggedIn={isLoggedIn} /> */}
      <Login />
      <FooterNew />
    </div>
  );
};

export default LoginForm;
