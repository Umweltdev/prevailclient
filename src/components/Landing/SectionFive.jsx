import "./assets/landing.css";
import branding from "../../assets/branding.png";
import website from "../../assets/website.png";
import announcement from "../../assets/announcement.png";
import socialmedia from "../../assets/socialmedia.png";
import email from "../../assets/email.png";
import calls from "../../assets/calls.png";

const cardInfo = [
  {
    icon: branding,
    header: "Branding",
    description:
      "Our “Brand Identity Package” service is the foundation for creating a lasting impression. We collaborate closely with you to define their unique brand identity, crafting eye-catching logos and compelling marketing collateral.",
  },
  {
    icon: website,
    header: "Website Development",
    description: `Prevail's groundbreaking "Website Production & Management" service, is a strategic initiative designed to empower SMEs and local businesses with a robust online presence that not only captivates but also seamlessly engages with their target audience.`,
  },
  {
    icon: announcement,
    header: "Search Engine Marketing",
    description:
      "Our “Search Engine Marketing (SEM)” service is the gateway to getting businesses in front of their ideal target audience. Our SEM service goes beyond the basics, providing a comprehensive approach around targeted advertising, SEO, performance metrics and continuous adjustment & reports.",
  },
  {
    icon: socialmedia,
    header: "Marketing Price Displacement API",
    description:
      "The “Marketing Cost Displacement (MCD)” API is not just a tool; it is a strategic asset. By seamlessly integrating a blend of elastic pricing and yield management. SMEs and local businesses can gain the power of budget allocation in their marketing spend.",
  },
];

const SectionFive = () => {
  return (
    <div className="sFiveContainer">
      <div className="sFiveHero">
        <h1 className="sFiveHeroText">Your Tools for Success</h1>
        <div className="sFiveHeroHr"></div>
      </div>
      <div className="sFiveCardContainer">
        {cardInfo.map((data, i) => (
          <div key={i} className="sFiveCard">
            <img className="sFiveIcon" src={data.icon} alt="" />
            <h1 className="sFiveCardHero">{data.header}</h1>
            <p className="sFiveText">{data.description}</p>
            <button className="sFiveBtn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFive;
