import "./assets/landing.css";
import branding from "./assets/bradn.png";
import website from "./assets/web.png";
import announcement from "./assets/seo.png";
import socialmedia from "./assets/tag.png";
import Cards from "../ReusedComponents/Cards";
import { Campaign, Computer, QueryStats, Sell } from "@mui/icons-material";

const cardInfo = [
  {
    img: (
      <Campaign
        sx={{
          backgroundColor: "#5e94d3",
          color: "white",
          fontSize: "5vw",
          padding: "0.7vw",
          borderRadius: "50%",
          display: "block",
          margin: "auto",
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
          backgroundColor: "#5e94d3",
          color: "white",
          fontSize: "5vw",
          padding: "0.7vw",
          borderRadius: "50%",
          display: "block",
          margin: "auto",
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
          backgroundColor: "#5e94d3",
          color: "white",
          fontSize: "5vw",
          padding: "0.7vw",
          borderRadius: "50%",
          display: "block",
          margin: "auto",
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
          backgroundColor: "#5e94d3",
          color: "white",
          fontSize: "5vw",
          padding: "0.7vw",
          borderRadius: "50%",
          display: "block",
          margin: "auto",
        }}
      />
    ),
    header: "Marketing Price Displacement API",
    desc: "The “Marketing Cost Displacement (MCD)” API is not just a tool; it is a strategic asset. By seamlessly integrating a blend of elastic pricing and yield management. SMEs and local businesses can gain the power of budget allocation in their marketing spend.",
  },
];

const SectionFive = () => {
  return (
    <div className="sTwoServicesContainer1">
      <h1 className="sTwoServicesHeader1">Your Tools For Success</h1>
      <span className="lineSpanServices1"></span>
      <div className="sTwoServicesCards1">
        {cardInfo.map((data, index) => (
          <Cards text={data.desc} headerText={data.header} icon={data.img} />
        ))}
      </div>
    </div>
  );
};

export default SectionFive;
