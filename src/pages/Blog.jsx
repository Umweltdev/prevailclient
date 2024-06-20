import React, { useContext } from "react";
import SectionOne from "../components/Blog/SectionOne";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import DrawerAppBar from "../components/Navbar/Appbar";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Blog/Header";
import AppBarNav from "../components/Navbar/Appbar";
import JoinOurCustomer from "../components/About/JoinOurCustomer";
import FooterNew from "../components/Footer/FooterNew";

const Blog = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <AppBarNav color="#fff" />
      <Header />
      <SectionOne />
      <JoinOurCustomer />
      <FooterNew />
    </div>
  );
};

export default Blog;
