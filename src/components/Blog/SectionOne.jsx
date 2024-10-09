import { makeStyles } from "@mui/styles";
import Footer from "../Footer/Footer";
import FooterNew from "../Footer/FooterNew";
import Navbar from "../Navbar/Navbar";
import BlogCard from "../ReusedComponents/BlogCard";
import FreeSolo from "../ReusedComponents/SearchInput";
import "./assets/blog.css";
import { BlogCategory, blogBlurbs } from "./assets/blogData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Grid } from "@mui/material";
import BlogListSideCard from "./BlogListSideCard";

const useStyles = makeStyles({
  CaseNavlist: {
    fontSize: "1vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5vh auto",
    width: "88vw",
    // width: "819px",
    borderRadius: "3vw",
    background: "white",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    color: "grey",
    // flexWrap: "wrap",
    "@media (max-width: 600px)": {
      padding: "2vh 0",
      gap: "1vw",
      flexWrap: "wrap",
    },
  },

  sTwoAboutList: {
    textDecoration: "none",
    listStyle: "none",
    // background: "#ba8bd9",
    color: "grey",
    padding: "1vw 0",
    borderRadius: "3vw",
    // fontWeight: "bold",
    fontSize: "1.3vw",
    cursor: "pointer",
    fontFamily: `"Sarabun","sans-serif"`,
    transition: "0.5s ease-in-out",
    // margin: "10vh 0 0 0",
    textAlign: "center",
    width: "18vw",
    "&:hover": {
      backgroundColor: "#b4b4b4",
      color: "white",
    },

    "@media (max-width: 600px)": {
      textDecoration: "none",
      listStyle: "none",
      background: "#ba8bd9",
      color: "white",
      padding: "1vw 2vw",
      borderRadius: "25px",
      // fontWeight: "bold",
      fontSize: "4vw",
      cursor: "pointer",
      width: "unset",
    },
  },
  active: {
    background: "#884ed9",
    color: "#fff",
  },

  cardComponent: {
    display: "flex",
    flexDirection: "row",
    margin: "2vh auto",
  },
});

const SectionOne = () => {
  const [selectedSection, setSelectedSection] = useState("View All");
  const [selectAll, setSelectAll] = useState(true);
  const classes = useStyles();

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setSelectAll(false);
  };

  const handleSelectAll = () => {
    setSelectedSection("View All");
    setSelectAll(true);
  };

  return (
    <>
      <Grid
        sx={{
          // margin: "15vh auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // margin: "0 auto"
        }}
      >
        <Grid sx={{ mt: "200px" }}>
          <Grid>
            <ul className={classes.CaseNavlist}>
              <li
                className={`${classes.sTwoAboutList} ${
                  selectedSection === "View All" ? classes.active : ""
                }`}
                onClick={handleSelectAll}
              >
                View All
              </li>
              <li
                className={`${classes.sTwoAboutList} ${
                  selectedSection === "Social Media Marketing"
                    ? classes.active
                    : ""
                }`}
                onClick={() => handleSectionClick("Social Media Marketing")}
              >
                Social Media Marketing
              </li>
              <li
                className={`${classes.sTwoAboutList} ${
                  selectedSection === "Email Marketing" ? classes.active : ""
                }`}
                onClick={() => handleSectionClick("Email Marketing")}
              >
                Email Marketing
              </li>
              <li
                className={`${classes.sTwoAboutList} ${
                  selectedSection === "SEO" ? classes.active : ""
                }`}
                onClick={() => handleSectionClick("SEO")}
              >
                SEO
              </li>

              <li
                className={`${classes.sTwoAboutList} ${
                  selectedSection === "Mobile Marketing" ? classes.active : ""
                }`}
                onClick={() => handleSectionClick("Mobile Marketing")}
              >
                Mobile Marketing
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid
          sx={{
            width: "90vw",
            display: "flex",
            // justifyContent: "space-between",
            alignItems: "top",
            gap: "4vw",
            margin: "0 auto",

            "@media (max-width: 600px)": {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "0 auto",
              flexWrap: "wrap",
              magin: "0 auto",
              justifyContent: "center",
              alignItems: "top",
              "@media (max-width: 600px)": {
                "@media (max-width: 600px)": {
                  flexDirection: "column",
                  alignItems: "center",
                },
              },
            }}
          >
            {blogBlurbs.map((data, index) => (
              <Link
                rel="canonical"
                to={`/blog/${index}`}
                key={index}
                className="sOneBlogCardLink"
                style={{ textDecoration: "none" }}
              >
                {selectAll || selectedSection === data.category ? (
                  <BlogCard
                    authorFirstName={data.authorFirstName}
                    header={data.header}
                    date={data.date}
                    img={data.img}
                    category={data.category}
                    like={data.like}
                  />
                ) : null}
              </Link>
            ))}
          </Grid>
          <Grid sx={{ marginRight: "1vw" }} className="sOneBlogFeature">
            <FreeSolo />
            <BlogListSideCard />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionOne;
