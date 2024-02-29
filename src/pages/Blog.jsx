import React from "react";
import SectionOne from "../components/Blog/SectionOne";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import DrawerAppBar from "../components/Navbar/Appbar";

const Blog = () => {
  return (
    <>
      <DrawerAppBar />
      <SectionOne />
    </>
  );
};

export default Blog;
