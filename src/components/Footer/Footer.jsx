import React from "react";
import "./assets/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="footerMission">
          We offer services in professional website development, Digital
          Marketing, content writing, creative designing and Business
          Administration consulting. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rerum, autem.
        </p>

        <h1 className="footerLogo">PREVAIL</h1>

        <div className="footerServices">
          <h1>Our Services</h1>
          <div className="footerServicesLine"></div>
          <p className="servicesItems">Website services</p>
          <p className="servicesItems">Digital Marketing</p>
          <p className="servicesItems">Content Writing </p>
          <p className="servicesItems">Creative designing </p>
          <p className="servicesItems">Business consulting </p>
        </div>
      </div>
      <div className="footerCopyRight">
        <p className="footerCopyRightItem">
          Copyright © 2024 Prevail Digital Marketing Agency
        </p>
      </div>
    </>
  );
};

export default Footer;
