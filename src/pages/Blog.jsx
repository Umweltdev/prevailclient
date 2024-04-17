import React, { useContext } from "react";
import SectionOne from "../components/Blog/SectionOne";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import DrawerAppBar from "../components/Navbar/Appbar";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import { AuthContext } from "../context/AuthContext";

const Blog = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* <DrawerAppBarWhite {...props} isLoggedIn={isLoggedIn} /> */}
      <SectionOne />
    </div>
  );
};

export default Blog;
