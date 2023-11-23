import { Computer } from "@mui/icons-material";
import { ServiceItem } from "./assets/PortfolioData";

const SectionTwo = () => {
  return (
    <div className="sTwoPortContainer">
      <h1 className="sTwoPortHero">OUR SERVICES</h1>
      <div className="sTwoCardCont">
        {ServiceItem.map((data, index) => (
          <div key={index} className="sTwoPortCard">
            <p className="sTwoPortCardIcons">{data.icone}</p>
            <h1 className="sTwoPortText">{data.header}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
