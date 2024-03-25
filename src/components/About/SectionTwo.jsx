import { useState } from "react";
import { Link } from "react-router-dom";
import { value } from "../Portfolio/assets/PortfolioData";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import CasestudyCards from "../Portfolio/CasestudyCards";

const useStyles = makeStyles({
  CaseNavlist: {
    fontSize: "1vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5vh auto",
    width: "92.4vw", // Initial width for larger screens
    borderRadius: "3vw",
    background: "white",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    color: "grey",
    padding: "0", // Remove default padding
    listStyle: "none", // Remove default list styles
  },
  sTwoAboutList: {
    textDecoration: "none",
    color: "grey",
    padding: "1vh 1vw", // Add padding for each list item
    borderRadius: "3vw",
    fontSize: "1.3vw",
    cursor: "pointer",
    fontFamily: `"Sarabun","sans-serif"`,
    transition: "0.5s ease-in-out",
    textAlign: "center",
    margin: "0 1vw", // Add margin between list items
    "&:hover": {
      backgroundColor: "#b4b4b4",
      color: "white",
    },
    "@media (max-width: 600px)": {
      fontSize: "4vw",
      padding: "1vh 2vw", // Adjust padding for smaller screens
      margin: "0.5vh 0", // Adjust margin for smaller screens
      width: "auto", // Make width auto for smaller screens
    },
  },
  active: {
    background: "#884ed9",
  },
});

const SectionTwo = () => {
  const [selectedSection, setSelectedSection] = useState("Our Why");
  const classes = useStyles();

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <Grid container>
      <ul className={classes.CaseNavlist}>
        <li
          className={`${classes.sTwoAboutList} ${
            selectedSection === "Our Why" ? classes.active : ""
          }`}
          onClick={() => handleSectionClick("Our Why")}
        >
          Our Why
        </li>
        <li
          className={`${classes.sTwoAboutList} ${
            selectedSection === "Our Solution" ? classes.active : ""
          }`}
          onClick={() => handleSectionClick("Our Solution")}
        >
          Our Solution
        </li>
      </ul>
      <Grid
        container
        spacing={2}
        justifyContent="center" // Center the content horizontally
      >
        {value
          .filter((data) => data.header === selectedSection)
          .map((data, index) => (
            <Grid item key={index}>
              <Link
                to={`/about/${data.link}`}
                className="sOneBlogCardLink"
                style={{ textDecoration: "none" }}
              >
                <CasestudyCards
                  header={data.header}
                  text={data.text}
                  image={data.img}
                />
              </Link>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default SectionTwo;
