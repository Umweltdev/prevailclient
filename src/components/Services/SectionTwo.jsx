import "./assets/services.css";
import { serviceCard } from "./assets/ServicesData";
import "./assets/services.css";

const SectionTwo = () => {
  return (
    <div className="sTwoServicesContainer">
      <h1 className="sTwoServicesHeader">Services</h1>
      <div className="sTwoServicesCards">
        {serviceCard.map((data, index) => (
          <div key={index} className="sTwoServicesCard">
            <h1 className="sTwoServicesCardHeader">{data.header}</h1>
            <p className="sTwoServicesCardText">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
