import { useState } from "react";
import { Link } from "react-router-dom";
import { value } from "../Portfolio/assets/PortfolioData";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import CasestudyCards from "../Portfolio/CasestudyCards";
import consult from "./assets/consult.svg";
import "./SectionConsultation.css"; 

const useStyles = makeStyles({
  CaseNavlist: {
    fontSize: "1vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5vh 30.5vw",
    width: "92.4vw",
    borderRadius: "3vw",
    background: "white",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    color: "grey",
    overflow: "hidden", // Prevent overflow
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
    padding: "1vw ",
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
          Why Us
        </li>
        <li
          className={`${classes.sTwoAboutList} ${
            selectedSection === "Our Solution" ? classes.active : ""
          }`}
          onClick={() => handleSectionClick("Our Solution")}
        >
          Solutions
        </li>
      </ul>
      <Grid
        container
        spacing={2}
        justifyContent="center" // Center the content horizontally
        xs={12} md={8}
      >
        {value
          .filter((data) => data.header === selectedSection)
          .map((data, index) => (
            <Grid item key={index}>
              {/* <Link
                to={`/about/${data.link}`}
                className="sOneBlogCardLink"
                style={{ textDecoration: "none" }}
              > */}
                <CasestudyCards
                  header={data.header}
                  text={data.text}
                  //image={data.img}
                />
              {/* </Link> */}
            </Grid>
          ))}
      </Grid>
      <Grid xs={12} md={4}>
        <div className="consultation">
          <img className="img-consult" src={consult} alt="" />
        </div>
      </Grid>
    </Grid>
  );
};

export default SectionTwo;
