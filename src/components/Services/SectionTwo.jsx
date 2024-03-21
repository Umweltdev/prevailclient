import "./assets/services.css";
import { serviceCard } from "./assets/ServicesData";
import "./assets/services.css";
import MediaCard from "../ReusedComponents/CardPortfolio";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";

const gradient = "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)";

const SectionTwo = () => {
  return (
    <div className="sTwoServicesContainer">
      <Typography
        sx={{
          fontSize: 50,
          fontWeight: 900,
          color: "#884ed9",
          // WebkitBackgroundClip: "text",
          // color: "transparent",

          "@media (max-width: 600px)": {
            fontSize: "7vw",
            textAlign: "justify",
            textJustify: "distribute",
          },
        }}
      >
        Our Services
      </Typography>
      <span className="lineSpanServices"></span>
      <div className="sTwoServicesCards">
        {serviceCard.map((data, index) => (
          <Link
            style={{ textDecoration: "none" }}
            key={index}
            to={`/Services/${data.link}`}
          >
            <MediaCard img={data.img} header={data.header} text={data.text} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
