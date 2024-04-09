import React from "react";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import FooterNew from "../components/Footer/FooterNew";
import Login from "../components/Form/Login";


const LoginForm = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <DrawerAppBarWhite />
      <Login />
      <FooterNew />
    </div>
  );
};

export default LoginForm;
