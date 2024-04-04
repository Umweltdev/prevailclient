import "./assets/services.css";
import { serviceCard } from "./assets/ServicesData";
import MediaCard from "../ReusedComponents/CardPortfolio";
import { Grid, Typography } from "@mui/material";
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
          color: "#333",
          textAlign: "left",
          marginLeft: "2vw",
          "@media (max-width: 600px)": {
            fontSize: "7vw",
            textAlign: "center",
            textJustify: "distribute",
            marginLeft: "unset",
          },
        }}
      >
        Services
      </Typography>
      {/* <span style={{ marginLeft: "12vw" }} className="lineSpanServices"></span> */}
      <Grid
        sx={{
          margin: "6vh 0 10vh 0",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          /* width: 95vw; */
          gap: "4vw",
         
        }}
      >
        {serviceCard.map((data, index) => (
          <Link
            style={{ textDecoration: "none" }}
            key={index}
            to={`/Services/${data.link}`}
          >
            <MediaCard img={data.img} header={data.header} text={data.text} />
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export default SectionTwo;
