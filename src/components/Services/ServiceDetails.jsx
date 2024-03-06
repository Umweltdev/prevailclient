import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ServiceDetails2 from "./ServiceDetails2";

import { serviceCard } from "./assets/ServicesData";
import HeroSection from "./ServiceDetailsTop";
import DrawerAppBarWhite from "../Navbar/Appbar";
import ServiceDetails3 from "./ServiceDetails3";

const ServiceDetails = () => {
  const { link } = useParams();

  // Find the service data based on the link parameter
  const service = serviceCard.find((service) => service.link === link);

  if (!service) {
    return <div>Service not found</div>;
  }
  <DrawerAppBarWhite />;

  // Render appropriate content based on the componentName property
  switch (service.componentName) {
    case "brand":
      return (
        <>
          <HeroSection
            header={service.header}
            image={service.landingImg}
            text={service.text}
          />
          <ServiceDetails2
            text={service.section2text}
            image={service.section2img}
            header={service.section2header}
          />
          <ServiceDetails3 />
        </>
      );
    case "website":
      return <div>{/* Render WebsiteDevelopment content */}</div>;
    case "webmanagement":
      return <div>{/* Render CustomWebsiteDevelopment content */}</div>;
    case "sem":
      return <div>{/* Render SearchEngineMarketing content */}</div>;
    case "mpd":
      return <div>{/* Render MarketingPriceDisplacement content */}</div>;
    case "digitalaccelerator":
      return <div>{/* Render DigitalAcceleratorBundle content */}</div>;
    default:
      return <div>Component not found</div>;
  }
};

export default ServiceDetails;
