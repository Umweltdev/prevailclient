import React from "react";
import "./assets/landing.css";
import rev from "./assets/rev.svg";
import AccordionUsage from "../ReusedComponents/BrandIdAccordion";
import { Link } from "react-router-dom";

const SectionSeven = () => {
  return (
    <div className="sectionSeven">
      <div className="sSevenRight">
        <div className="sSevenOne">
          <AccordionUsage
            header="01 Unified Brand Presence"
            text="Ensure consistency across your online presence from websiteesthetics
            to bend identity and SEO campaigns"
          />
          {/* <h1 className="sSevenOneHeader">01 Unified Brand Presence</h1>
          <p className="sSevenOneText">
            Ensure consistency across your online presence from websiteesthetics
            to bend identity and SEO campaigns
          </p> */}
        </div>
        <div className="sSevenSecondry">
          <div className="sSevenTwo">
            <AccordionUsage
              header="02 Time & Resource Efficiency"
              text="See Valuable time and resources by entrusting all aspects of your
              digital presence - website, branding and Marketing."
            />
            {/* <h1 className="sSevenOneHeader">02 Time & Resource Efficiency</h1>
            <p className="sSevenOneText">
              See Valuable time and resources by entrusting all aspects of your
              digital presence - website, branding and Marketing.
            </p> */}
          </div>
          <div className="sSevenThree">
            <AccordionUsage
              header="03 Strategic Synergy"
              text="Achieve a seamless synergy/ between website aesthetics brand
              messaging and targeted SEO strategies. ensuring a cohesive and
              impactful brand presence."
            />
            {/* <h1 className="sSevenOneHeader">03 Strategic Synergy</h1>
            <p className="sSevenOneText">
              Achieve a seamless synergy/ between website aesthetics brand
              messaging and targeted SEO strategies. ensuring a cohesive and
              impactful brand presence.
            </p> */}
          </div>
        </div>
      </div>
      <p className="sSevenText">
        Revolutionise your online presencewith our exclusivebundle. The{" "}
        <Link style={{ textDecoration: "none" }} to={`/digitalaccelerator`}>
          {" "}
          <span className="span">
            "Digital Accelarator Bundle package"
          </span>{" "}
        </Link>
        This all-encompassing package seamlessly integrates three core services-
        [website Production & Management]. [Brand Identitiy package], and
        [Search Engine Marketing(SEM)]. Prevail's
        <Link style={{ textDecoration: "none" }} to={`/digitalaccelerator`}>
          <span className="span">"Digital Accelerator Bundle Package"</span>
        </Link>
        service is not just a bundle of services. it is your strategic gateway
        to cohesive, impactful, and cost effective digital presence. Elevate
        your brand with Prevails integrated solutions.
      </p>
    </div>
  );
};

export default SectionSeven;
