import React from "react";
import SectionOne from "../components/Blog/SectionOne";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import DrawerAppBar from "../components/Navbar/Appbar";

const Blog = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <DrawerAppBar />
      <SectionOne />
    </div>
  );
};

export default Blog;
