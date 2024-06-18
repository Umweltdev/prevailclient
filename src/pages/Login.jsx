import { useContext, useState } from "react";
///import DrawerAppBarWhite from "../components/Navbar/Appbar";
import FooterNew from "../components/Footer/FooterNew";
import Login from "../components/Form/Login";
import { AuthContext } from "../context/AuthContext";

const LoginForm = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return ( 
      <Login />
  );
};

export default LoginForm;
