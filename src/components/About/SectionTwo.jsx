import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./assets/about.css";
import { Button, Typography } from "@mui/material";

const SectionTwo = () => {
  const [selectedSection, setSelectedSection] = useState("Our Why");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="sTwoAboutContainer">
      <div className="sTwoAboutSideBar">
        <ul className="sTwoAboutSideList">
          <li
            className={`sTwoAboutList ${
              selectedSection === "Our Why" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("Our Why")}
          >
            Our Why
          </li>
          <li
            className={`sTwoAboutList ${
              selectedSection === "Our Solution" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("Our Solution")}
          >
            Our Solution
          </li>
        </ul>
      </div>
      <div className="sTwoAboutDetail">
        {selectedSection === "Our Why" && (
          <>
            <Typography
              sx={{
                fontSize: "5vw",
                color: "white",
                fontWeight: "bold",
                "@media (max-width: 600px)": { fontSize: "7vw" },
              }}
            >
              Our Why
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5vw",
                color: "white",
                fontWeight: "bold",
                textAlign: "justify",
                textJustify: "distribute",
                "@media (max-width: 600px)": {
                  fontSize: "4.5vw",
                  color: "white",
                  fontWeight: "unset",
                  textAlign: "justify",
                  textJustify: "distribute",
                },
              }}
            >
              Understanding the nuances of marketing budgets and effective
              strategies is essential to businesses. The costs associated with
              marketing can vary significantly, contingent on factors like a
              company's marketing budget, specific goals, and the number of
              marketing channels they choose to employ. It is a well-established
              industry guideline that businesses should allocate between 15% and
              20% of their sales towards marketing expenses.
            </Typography>
            <Link to="/about/ourWhy">
              <Button
                variant="contained"
                sx={{
                  width: "10vw",
                  margin: "5vh 0",
                  background: "#884ed9",
                  fontWeight: "bold",
                  "@media (max-width: 600px)": {
                    width: "unset",
                    margin: "2vh 0",
                    fontSize: "3.5vw",
                  },
                }}
              >
                Learn More
              </Button>
            </Link>
          </>
        )}
        {selectedSection === "Our Solution" && (
          <>
            <Typography
              sx={{
                fontSize: "5vw",
                color: "white",
                fontWeight: "bold",
                "@media (max-width: 600px)": { fontSize: "7vw" },
              }}
            >
              Our Solution
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5vw",
                color: "white",
                fontWeight: "bold",
                textAlign: "justify",
                textJustify: "distribute",
                "@media (max-width: 600px)": {
                  fontSize: "4.5vw",
                  color: "white",
                  fontWeight: "unset",
                  textAlign: "justify",
                  textJustify: "distribute",
                },
              }}
            >
              This is where Prevail takes centre stage. We specialise in working
              closely with SMEs and local businesses, empowering them to
              differentiate themselves and position their brand effectively in
              front of their target audience. We believe in forging strong
              partnerships with our clients to develop tailored solutions that
              maximise both short-term and long-term growth.
            </Typography>
            <Link to="/about/ourSolution">
              <Button
                variant="contained"
                sx={{
                  width: "10vw",
                  margin: "5vh 0",
                  background: "#884ed9",
                  fontWeight: "bold",
                  "@media (max-width: 600px)": {
                    width: "unset",
                    margin: "2vh 0",
                    fontSize: "3.5vw",
                  },
                }}
              >
                Learn More
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default SectionTwo;
