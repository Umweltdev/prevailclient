import { Grid, Typography } from "@mui/material";
import React from "react";

const PlatformTwo = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid sx={{ display: "flex", gap: "4vw", flexDirection: "column" }}>
        <Grid sx={{ width: "75vw", marginBottom: "5vh" }}>
          <Typography
            sx={{
              display: "flex",
              fontSize: "1.9vw",
              fontWeight: "bold",
              marginBottom: "2vh",
            }}
          >
            Active Evaluation
          </Typography>
          <Typography
            sx={{
              fontSize: "1.4vw",
              color: "#636363",
              marginBottom: "1vh",
              textAlign: "justify",
            }}
          >
            During this stage, customers actively look around, much like
            window-shopping, comparing different brands and what they offer.
            They are searching for the best value. At Prevail, our role is to
            make sure your products or services are right where your potential
            customers are looking. Our &quot;Website Production &amp;
            Management&quot; service will help you set up a website that is not
            just eye-catching but also user-friendly. Think of this website as
            your online shop window. It is where customers can get a
            comprehensive look at what you offer and learn more about your
            products or services through detailed information, customer
            testimonials, blogs, and FAQs. This helps them make informed
            decisions. Additionally, our “Search Engine Marketing (SEM)”
            service, especially Pay-Per- Click (PPC) advertising, is crucial at
            this phase. By strategically placing ads on search engines to
            capture the attention of consumers who are looking for information
            and persuade them to consider your product or service. This
            combination of a well-crafted website and smart advertising
            positions you effectively in the minds of your customers when they
            are in the critical phase of comparing and deciding.
          </Typography>
        </Grid>
        <img
          style={{
            width: "75vw",
            height: "50vh",
            objectFit: "cover",
            borderRadius: "5px",
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;",
          }}
          src="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
        <Grid sx={{ width: "75vw" }}>
          <Typography
            sx={{
              display: "flex",
              fontSize: "1.8vw",
              fontWeight: "bold",
              color: "#494848",
              marginBottom: "3vh",
            }}
          >
            Purchasing
          </Typography>
          <Typography
            sx={{
              fontSize: "1.4vw",
              color: "#636363",
              marginBottom: "1vh",
              textAlign: "justify",
            }}
          >
            Consider the stage where a consumer is about to make a final
            decision to buy a product or service. At this stage, they become a
            customer. Prevail can help you make this process smoother with our
            range of services. Our &quot;Brand Identity Package&quot; service
            makes your brand stand out, while our &quot;Search Engine Marketing
            (SEM)&quot; service ensures that you reach the right audience on
            Google or Bing. Additionally, our &quot;Website Production &amp;
            Management&quot; service keeps your website attractive and
            user-friendly. Currently, we are offering a special deal: the
            &quot;Digital Accelerator&quot; Bundle. This bundle combines these
            three key services to give your digital marketing strategy a
            powerful and visually appealing boost. The best part is that we are
            offering it at a huge discount of up to 70%. This bundle is a
            complete solution to make your business shine online and attract
            more customers.
          </Typography>
        </Grid>
        <img
          style={{
            width: "75vw",
            height: "50vh",
            objectFit: "cover",
            borderRadius: "5px",
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;",
          }}
          src="https://img.freepik.com/free-photo/close-up-multiracial-business-partners-standing-front-conference-desk-shaking-hands-after-signing-partnership-contract-diverse-team-being-happy-successful-negotiations-startup-company_482257-13886.jpg?t=st=1711189302~exp=1711192902~hmac=05de2d5542af839a654288bf971d126f0020d5207a09f3fbba96a8b0eb35c122&w=826"
          alt="image"
        />
      </Grid>
    </Grid>
  );
};

export default PlatformTwo;
