import { Close } from "@mui/icons-material";
import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import coke from "./assets/coke.png";
import CardService from "./CardService";
import CardPlatform from "./CardPlatform";

const Platform = () => {
  return (
    <Grid
      sx={{
        padding: "0 0 5vh 0",
        margin: "0 auto",
        width: "90vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontSize: "1.3vw",
            color: "#884ed9",
            marginBottom: "3vh",
            fontWeight: "900",
          }}
        >
          Customer Journey
        </Typography>
        <Typography
          sx={{
            fontSize: "2.5vw",
            color: "#333",
            textWeight: "bold",
            fontWeight: "bold",
            width: "50vw",
            marginBottom: "3vh",
          }}
        >
          How you attract more customers with Prevail
        </Typography>
        <Typography
          sx={{
            fontSize: "1.4vw",
            color: "#636363",
            width: "60vw",
            marginBottom: "10vh",
          }}
        >
          Are you ready to take your business to the next level? Imagine having
          a comprehensive view of your customer’s journey, from the moment they
          discover your business to the point where they become loyal advocates.
          The Customer Journey (CJ) strategy offers a powerful marketing tool
          that enables you to gain a deeper understanding of your customers&#39;
          experiences from the very beginning until the very end. When crafted
          with care, it can weave together a compelling story of your
          customers&#39; journey with your business and leave a lasting impact
          that resonates with them.
        </Typography>
      </Grid>
      <Grid sx={{ display: "flex", gap: "4vw" }}>
        <Grid sx={{ width: "50vw", marginBottom: "5vh" }}>
          <Typography
            sx={{
              display: "flex",
              fontSize: "1.9vw",
              fontWeight: "bold",
              marginBottom: "2vh",
            }}
          >
            Trigger
          </Typography>
          <Typography
            sx={{
              fontSize: "1.4vw",
              color: "#636363",
              marginBottom: "2vh",
            }}
          >
            Imagine you are starting a journey with each customer, and the first
            step is understanding what they really need or desire. We know how
            important it is for your business to truly grasp the challenges and
            emotional factors that drive customer interest in what you have to
            offer. By looking at how people interact with your online presence,
            such as your website performance, customer interaction, plus organic
            and paid traffic, we can help you gain insights into what your
            customers like and don&#39;t like. We utilise tools like Google
            Analytics and Google Trends to make sense of all this information
            and provide you with our &quot;Search Engine Marketing (SEM)&quot;
            services. With our expertise in search engine optimisation (SEO) and
            paid ads, we help restore your confident to stand out in the digital
            realm and attract the right customers.
          </Typography>
        </Grid>
        <Grid sx={{ width: "35vw" }}>
          <Typography
            sx={{
              display: "flex",
              fontSize: "1.8vw",
              fontWeight: "bold",
              color: "#494848",
              marginBottom: "3vh",
            }}
          >
            Initial Consideration
          </Typography>
          <Typography
            sx={{
              fontSize: "1.4vw",
              color: "#636363",
              marginBottom: "3vh",
            }}
          >
            After this trigger event, consumers move into the initial
            consideration phase, where your ideal target audience thinks about
            brands or products that can meet their newly identified needs.
            Creating a consistent presence of your brand across all digital
            marketing touchpoints can be challenging when trying to achieve a
            lasting impression on consumers to increase brand familiarity.
          </Typography>
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex", gap: "4vw" }}>
        <Grid sx={{ width: "50vw", marginBottom: "5vh" }}>
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
              marginBottom: "2vh",
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
        <Grid sx={{ width: "35vw" }}>
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
              marginBottom: "3vh",
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
      </Grid>
      <Grid sx={{ display: "flex", gap: "5vw" }}>
        <CardService />
        <CardPlatform />
      </Grid>
    </Grid>
  );
};

export default Platform;
