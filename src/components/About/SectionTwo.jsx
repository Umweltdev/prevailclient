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
    fontSize: "1.3vw",
    cursor: "pointer",
    "@media (max-width: 600px)": {
      textDecoration: "none",
      listStyle: "none",
      background: "#ba8bd9",
      color: "white",
      padding: "1vh 2vh",
      borderRadius: "25px",
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

const SectionTwo = () => {
  const [selectedSection, setSelectedSection] = useState("Our Why");
  const classes = useStyles();

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <Grid>
      <Grid>
        <Grid>
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
          {value
            .filter((data) => data.header === selectedSection)
            .map((data, index) => (
              <Grid
                key={index}
                sx={{ display: "flex", flexDirection: "row", margin: "5vh 0" }}
              >
                <Link
                  to={`/about/${data.link}`}
                  key={index}
                  className="sOneBlogCardLink"
                  style={{ textDecoration: "none" }}
                >
                  <Grid sx={{ display: "flex", flexDirection: "row" }}>
                    <CasestudyCards
                      header={data.header}
                      text={data.text}
                      image={data.img}
                    />
                  </Grid>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SectionTwo;
