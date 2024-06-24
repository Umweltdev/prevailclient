import React, { useContext } from "react";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import SignUp from "../components/Form/SignUp";
import FooterNew from "../components/Footer/FooterNew";
import { AuthContext } from "../context/AuthContext";

const SignUpForm = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div style={{ width: "100vw", overflowX: "hidden" }}>
      <SignUp />
    </div>
  );
};

export default SignUpForm;
