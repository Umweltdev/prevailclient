import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
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
    padding: "5vh 0",
    gap: "2vw",
    "@media (max-width: 600px)": {
      padding: "2vh 0",
      gap: "1vw",
      flexWrap: "wrap"
    },
  },

  sTwoAboutList: {
    textDecoration: "none",
    listStyle: "none",
    background: "#ba8bd9",
    color: "white",
    padding: "1vh 2vw",
    borderRadius: "25px",
    // fontWeight: "bold",
    fontSize: "1.3vw",
    cursor: "pointer",
    "@media (max-width: 600px)": {
      textDecoration: "none",
      listStyle: "none",
      background: "#ba8bd9",
      color: "white",
      padding: "1vh 2vh",
      borderRadius: "25px",
      // fontWeight: "bold",
      fontSize: "4vw",
      cursor: "pointer",
    },
  },
  active: {
    background: "#884ed9",
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
                selectedSection === "Website Design & Development"
                  ? classes.active
                  : ""
              }`}
              onClick={() => handleSectionClick("Website Design & Development")}
            >
              Website Design & Development
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
      <Grid>
        <Grid
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
                  <Grid sx={{ display: "flex", flexDirection: "row" }}>
                    <CasestudyCard text={data.text} image={data.img} />
                  </Grid>
                ) : null}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CaseStudies;
