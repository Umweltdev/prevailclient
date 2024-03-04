import "./assets/services.css";
import { serviceCard } from "./assets/ServicesData";
import "./assets/services.css";
import MediaCard from "../ReusedComponents/CardPortfolio";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const gradient = "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)";

const SectionTwo = () => {
  return (
    <div className="sTwoServicesContainer">
      <Typography
        sx={{
          fontSize: 50,
          fontWeight: 900,
          backgroundImage: gradient,
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Services
      </Typography>
      <span className="lineSpanServices"></span>
      <div className="sTwoServicesCards">
        {serviceCard.map((data, index) => (
          // Wrap each MediaCard with a Link component
          <Link
            style={{ textDecoration: "none" }}
            key={index}
            to={`/Services/${index}`}
          >
            <MediaCard img={data.img} header={data.header} text={data.text} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
