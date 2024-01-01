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
      "Craft a unique and memorable image that resonates. Unleash the power of effective branding for lasting impressions and success.",
  },
  {
    icon: website,
    header: "Website Design",
    description:
      "Unlock the potential of email marketing. Deliver targeted messages that captivate and convert, building lasting relationships with your audience.",
  },
  {
    icon: announcement,
    header: "Creative Campaign",
    description:
      "Unlock the potential of email marketing. Deliver targeted messages that captivate and convert, building lasting relationships with your audience.",
  },
  {
    icon: socialmedia,
    header: "Social Media Management",
    description:
      "Maximize your brand's impact on social platforms. Our management strategies ensure a strong online presence and meaningful connections with your audience.",
  },
  {
    icon: email,
    header: "Email Marketing",
    description:
      "Unlock the potential of email marketing. Deliver targeted messages that captivate and convert, building lasting relationships with your audience.",
  },
  {
    icon: calls,
    header: "Lead Generation",
    description:
      "Drive success with strategic lead generation. Our solutions connect you with high-quality leads, converting prospects into valuable customers.",
  },
];

const SectionFive = () => {
  return (
    <div className="sFiveContainer">
      <div className="sFiveHero">
        <h1 className="sFiveHeroText">
          We Offer A Blend Of Creative Solutions
        </h1>
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
