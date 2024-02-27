import "./assets/services.css";
import { serviceCard } from "./assets/ServicesData";
import "./assets/services.css";

const SectionTwo = () => {
  return (
    <div className="sTwoServicesContainer">
      <h1 className="sTwoServicesHeader1">Services</h1>
      <span className="lineSpanServices"></span>
      <div className="sTwoServicesCards">
        {serviceCard.map((data, index) => (
          <div key={index} className="sTwoServicesCard">
            <img style={{ width: "5vw" }} src={data.img} alt="icons" />
            <h1 className="sTwoServicesCardHeader">{data.header}</h1>
            <p className="sTwoServicesCardText">{data.text}</p>
            <button className="btnService">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
