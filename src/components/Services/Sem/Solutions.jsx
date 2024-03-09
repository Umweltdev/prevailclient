import React from 'react'
import TextImageService from '../TextImageService';
import ImageTextService from '../ImageTextService';
import { Grid, Typography } from '@mui/material';

const Solutions = () => {
  return (
    <div>
      <Grid sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "4vw",
            textAlign: "center",
            fontWeight: "bold",
            color: "#884ed9",
            "@media (max-width: 600px)": {
              fontSize: "7vw",
              width: "90vw",
              textAlign: "center",
            },
          }}
        >
          Solutions
        </Typography>
        <Typography
          sx={{
            width: "60vw",
            fontSize: "1.5vw",
            textAlign: "center",
            fontWeight: "bold",
            margin: "0 auto",
            color: "#884ed9",
            "@media (max-width: 600px)": {
              width: "95vw",
              fontSize: "4.5vw",
              textAlign: "center",
              fontWeight: "bold",
              margin: "0 auto",
              color: "#884ed9",
            },
          }}
        >
          Imagine your business not just being seen but being noticed by the
          right eyes. Our SEM service is not about casting a wide, aimless net.
          It is about precision - ensuring that your business is visible to
          those who are actively seeking what you offer. This targeted approach
          connects you directly with your ideal audience, turning searches into
          valuable opportunities. With Prevail, we do not just set up campaigns;
          we nurture them, adapting to the shifting landscapes of online
          marketing to keep your business relevant and robust.
        </Typography>
      </Grid>
      <Grid
        sx={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
          padding: "5vh 0",
        }}
      >
        <TextImageService
          textHeader={"Precision Targeting"}
          text={
            "We understand that visibility is not enough; businesses need to be seen by the right audience. Our SEM service ensures targeted display marketing, optimising for the audience that matters most to our clients. "
          }
          imageUrl={
            "https://img.freepik.com/free-vector/shopping-payment-online-process-computer-smartphone-tablet_1150-65523.jpg?w=740"
          }
        />
        <ImageTextService
          textHeader={"SEO Mastery"}
          text={
            "Prevail offers a comprehensive approach to Search Engine Optimization (SEO), from regular audits and keyword optimisation to real-time performance metrics and periodical reporting."
          }
          imageUrl={
            "https://img.freepik.com/free-vector/apartment-rent-concept-illustration_114360-3893.jpg?t=st=1709724395~exp=1709727995~hmac=00a049af05e8f9481a07b26c0a926abe61d7b1da747df092950fc6f445c819cd&w=1060"
          }
        />
        <TextImageService
          textHeader={"Continuous Optimisation"}
          text={
            "SEM is an ongoing process that requires continual optimisation of campaigns, regular health checks, and analysis of PPC performance to ensure alignment with our client's evolving missions and objectives."
          }
          imageUrl={
            "https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-4449.jpg?w=1060"
          }
        />
        <ImageTextService
          textHeader={"Comprehensive Analytics"}
          text={
            "Our service includes installing Google Analytics, Google Display, and Google Trends. This provides clients with valuable insights about user behaviour, website performance, and marketing effectiveness."
          }
          imageUrl={
            "https://img.freepik.com/free-vector/flat-computer-engineering-concept_23-2148158173.jpg?w=1060"
          }
        />
        <TextImageService
          textHeader={"Competitive Edge"}
          text={
            "We conduct comprehensive competitive analysis and research, ensuring our clients maintain a competitive edge in the digital landscape through backlink monitoring and gap analysis."
          }
          imageUrl={
            "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=1060"
          }
        />
        <ImageTextService
          textHeader={"Local Dominance"}
          text={
            "Our service includes setting up Google My Business, Bing & Yahoo business listings, and implementing local marketing strategies to increase visibility in specific geographic areas for locally focused businesses."
          }
          imageUrl={
            "https://img.freepik.com/free-vector/mobile-apps-concept-landing-page_52683-22745.jpg?t=st=1709724646~exp=1709728246~hmac=1e2fae413b4a803dcad2edbbdbb8db3c6f82a7c0a1a8b5a8bca787da3169ea89&w=1060"
          }
        />
      </Grid>
    </div>
  );
}

export default Solutions