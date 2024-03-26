import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { caseData } from "../Portfolio/assets/PortfolioData";
import CasestudyCard from "../Portfolio/CasestudyCard";

const useStyles = makeStyles({
  CaseNavlist: {
    fontSize: "1vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5vh auto",
    width: "92.4vw",
    // width: "819px",
    borderRadius: "3vw",
    background: "white",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    color: "grey",
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
    width: "20vw",
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
  },
});

const CaseStudies = () => {
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
    <Grid>
      <Grid>
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
                selectedSection === "MaaS" ? classes.active : ""
              }`}
              onClick={() => handleSectionClick("MaaS")}
            >
              MaaS
            </li>
            <li
              className={`${classes.sTwoAboutList} ${
                selectedSection === "Website Design & Dev" ? classes.active : ""
              }`}
              onClick={() => handleSectionClick("Website Design & Dev")}
            >
              Website Design & Dev
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
                selectedSection === "Digital Marketing" ? classes.active : ""
              }`}
              onClick={() => handleSectionClick("Digital Marketing")}
            >
              Digital Marketing
            </li>
          </ul>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1vw",
          flexWrap: "wrap",
        }}
      >
        {caseData.map((data, index) => (
          <Grid
            key={index}
            sx={{ display: "flex", flexDirection: "row", margin: "5vh 0" }}
          >
            <Link
              to={`/Portfolio/${index}`}
              key={index}
              className="sOneBlogCardLink"
              style={{ textDecoration: "none" }}
            >
              {selectAll || selectedSection === data.header ? (
                <CasestudyCard text={data.text} image={data.img} />
              ) : null}
            </Link>
          </Grid>
        ))}
      </Box>
    </Grid>
  );
};

export default CaseStudies;
