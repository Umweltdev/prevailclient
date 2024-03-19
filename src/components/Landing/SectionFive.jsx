import "./assets/landing.css";
import branding from "./assets/bradn.png";
import website from "./assets/web.png";
import announcement from "./assets/seo.png";
import socialmedia from "./assets/tag.png";
import Cards from "../ReusedComponents/Cards";
import { Campaign, Computer, QueryStats, Sell } from "@mui/icons-material";
import { Typography } from "@mui/material";

const cardInfo = [
  {
    img: (
      <Campaign
        sx={{
          background: "#ab63f3",
          color: "white",
          fontSize: "11vw",
          padding: "0.9vw",
          borderRadius: "50%",
          display: "block",
          // margin: "auto",
          "@media (max-width: 600px)": {
            fontSize: "13vw",
            padding: "1.5vw",
          },
        }}
      />
    ),
    header: "Branding",
    desc: "Our “Brand Identity Package” service is the foundation for creating a lasting impression. We collaborate closely with you to define their unique brand identity, crafting eye-catching logos and compelling marketing collateral.",
  },
  {
    img: (
      <Computer
        sx={{
          background: "#ab63f3",
          color: "white",
          fontSize: "11vw",
          padding: "0.7vw",
          borderRadius: "50%",
          display: "block",
          // margin: "auto",
          "@media (max-width: 600px)": {
            fontSize: "13vw",
            padding: "1.5vw",
          },
        }}
      />
    ),
    header: "Website Development",
    desc: `Prevail's groundbreaking "Website Production & Management" service, is a strategic initiative designed to empower SMEs and local businesses with a robust online presence that not only captivates but also seamlessly engages with their target audience.`,
  },
  {
    img: (
      <QueryStats
        sx={{
          background: "#ab63f3",
          color: "white",
          fontSize: "11vw",
          padding: "0.7vw",
          borderRadius: "50%",
          display: "block",
          // margin: "auto",
          "@media (max-width: 600px)": {
            fontSize: "13vw",
            padding: "1.5vw",
          },
        }}
      />
    ),
    header: "Search Engine Marketing",
    desc: "Our “Search Engine Marketing (SEM)” service is the gateway to getting businesses in front of their ideal target audience. Our SEM service goes beyond the basics, providing a comprehensive approach around targeted advertising, SEO, performance metrics and continuous adjustment & reports.",
  },
  {
    img: (
      <Sell
        sx={{
          background: "#ab63f3",
          color: "white",
          fontSize: "11vw",
          padding: "0.7vw",
          borderRadius: "50%",
          display: "block",
          // margin: "auto",
          "@media (max-width: 600px)": {
            fontSize: "13vw",
            padding: "1.5vw",
          },
        }}
      />
    ),
    header: "Marketing Price Displacement API",
    desc: "The “Marketing Cost Displacement (MCD)” API is not just a tool; it is a strategic asset. By seamlessly integrating a blend of elastic pricing and yield management. SMEs and local businesses can gain the power of budget allocation in their marketing spend.",
  },
];

const SectionFive = (gradient) => {
  return (
    <div className="sTwoServicesContainer1">
      <Typography
        sx={{
          fontSize: "3vw",
          fontWeight: "bold",
          color: "#884ed9",
          "@media (max-width: 600px)": {
            fontSize: 20,
            textAlign: "center",
          },
        }}
        className=""
      >
        Your Tools For Success
      </Typography>
      <span className="lineSpanServices1"></span>
      <div className="sTwoServicesCards1">
        {cardInfo.map((data, index) => (
          <Cards
            key={index}
            text={data.desc}
            headerText={data.header}
            icon={data.img}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionFive;
