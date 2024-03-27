import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import TextImageComponent from "../../ReusedComponents/TextImageComponent";
import ImageTextComponent from "../../ReusedComponents/ImageTextComponent";
import TextImageService from "../TextImageService";
import ImageTextService from "../ImageTextService";
import PackagesLayout from "../BrandIdentity/PackagesLayout";
import Footer from "../../Footer/Footer";
import Carousel from "./Carousel";

const Offering = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4vw",
        justifyContent: "center",
        alignItems: "top",
        backgroundColor: "#ff",

        // height: "100vh",

        "@media (max-width: 600px)": {
          display: "flex",
          flexDirection: "column",
          gap: "4vw",
          justifyContent: "center",
          alignItems: "top",
          padding: "2vh 0",
          backgroundColor: "#7097da",
        },
      }}
    >
      <Card
        sx={{
          textAlign: "center",
          padding: "2vw",
          width: "70vw",
          margin: "0 auto",
          borderRadius: "1.5vw",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        }}
      >
        <Typography
          sx={{
            fontSize: "3vw",
            textAlign: "center",
            fontWeight: "bold",
            color: "#333",
            "@media (max-width: 600px)": {
              fontSize: "7vw",
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
              padding: "2vh 0",
            },
          }}
        >
          Offering
        </Typography>
        <Typography
          sx={{
            width: "60vw",
            fontSize: "1.2vw",
            textAlign: "centert",
            // fontWeight: "bold",
            margin: "0 auto",
            color: "#333",
            lineHeight: "6vh",
            "@media (max-width: 600px)": {
              fontSize: "4.5vw",
              width: "90vw",
              textAlign: "justify",
              textJustify: "distribute",
            },
          }}
        >
          We are excited to introduce Prevail's groundbreaking "Website
          Production & Management" service, a strategic initiative designed to
          empower SMEs and local businesses with a robust online presence that
          not only captivates but also seamlessly engages with their target
          audience. Our comprehensive service goes beyond the conventional
          website development model but a state-of-the-art website.
        </Typography>
      </Card>

      <Grid
        sx={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
          padding: "5vh 0",
        }}
      >
        <Carousel />
      </Grid>
      {/* <Grid
        sx={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
          padding: "5vh 0",
        }}
      >
        <TextImageService
          textHeader={"Shopify Platform"}
          text={
            "We specialise in crafting customised websites on Shopify, offering a range of services for enhancing online presence including website development, online sales, and business management tools. Our expertise with Shopify allows us to leverage its versatile features like customisable templates, point of sale options, and robust marketing and SEO tools. We also focus on inventory management and analytics, ensuring that each website is not only visually appealing but also strategically equipped for business success."
          }
          imageUrl={
            "https://img.freepik.com/free-vector/shopping-payment-online-process-computer-smartphone-tablet_1150-65523.jpg?w=740"
          }
        />
        <ImageTextService
          textHeader={"Real Estate Platform "}
          text={
            "Prevail recognises the challenges SMEs and local businesses in the real estate industry face, especially when competing with larger entities in the digital space. We offer a comprehensive service package tailored for real estate, featuring advanced options like admin login for website edits, seamless website transfers, dynamic and SEO-optimised content, and responsive design. Additionally, our all-inclusive services include brainstorming sessions, website development presentations, and content optimisation, all designed to elevate your online presence"
          }
          imageUrl={
            "https://img.freepik.com/free-vector/apartment-rent-concept-illustration_114360-3893.jpg?t=st=1709724395~exp=1709727995~hmac=00a049af05e8f9481a07b26c0a926abe61d7b1da747df092950fc6f445c819cd&w=1060"
          }
        />
        <TextImageService
          textHeader={"Holistic Website Development"}
          text={
            "We do not just build websites; we create digital experiences. Our partnership approach ensures that every website is not only visually stunning but also functionally superior, reflecting the unique ethos of your business."
          }
          imageUrl={
            "https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-4449.jpg?w=1060"
          }
        />
        <ImageTextService
          textHeader={"Technical Expertise"}
          text={
            "With advanced technologies like MERN Stack and Microservice Architecture, we guarantee that your website stays ahead in innovation, offering a seamless experience to your users."
          }
          imageUrl={
            "https://img.freepik.com/free-vector/flat-computer-engineering-concept_23-2148158173.jpg?w=1060"
          }
        />
        <TextImageService
          textHeader={"Comprehensive Features"}
          text={
            "Our service includes all essentials from SSL certificates to dynamic UI & React, ensuring a fully functional, secure, and engaging website that caters to all your business needs."
          }
          imageUrl={
            "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=1060"
          }
        />
        <ImageTextService
          textHeader={"Website Excellence"}
          text={
            "We go beyond basics by incorporating features like property listing pages, a calendar booking system, and an intuitive properties filter component, enhancing the user experience manifold (customer login, review, and rating)."
          }
          imageUrl={
            "https://img.freepik.com/free-vector/mobile-apps-concept-landing-page_52683-22745.jpg?t=st=1709724646~exp=1709728246~hmac=1e2fae413b4a803dcad2edbbdbb8db3c6f82a7c0a1a8b5a8bca787da3169ea89&w=1060"
          }
        />
        <TextImageService
          textHeader={"Maintenance and Security"}
          text={
            "Our commitment does not end with development. We take care of everything from content updates to security monitoring and technical support, which allow our clients to focus on their core business operations."
          }
          imageUrl={
            "https://img.freepik.com/free-vector/mmorpg-abstract-concept-illustration_335657-1858.jpg?t=st=1709724683~exp=1709728283~hmac=fbd3a3394862cb6aa06ddcfd00244d864e8648ae3abfc4e665fc95b811443967&w=1060"
          }
        />
      </Grid> */}
      <Grid>
        <Typography
          sx={{
            width: "60vw",
            fontSize: "1.5vw",
            textAlign: "center",
            fontWeight: "bold",
            margin: "0 auto",
            color: "white",
            "@media (max-width: 600px)": {
              fontSize: "4.5vw",
              width: "90vw",
              textAlign: "justify",
              textJustify: "distribute",
            },
          }}
        >
          Contact Prevail today to transform your digital presence. Let us build
          a website that not only reflects your brand but also drives your
          business towards unprecedented growth and success. With Prevail, you
          are not just getting a service provider; you are gaining a partner
          committed to your digital success. Our team of experts is ready to
          embark on this journey with you, ensuring that your website not only
          meets but exceeds expectations.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Offering;
