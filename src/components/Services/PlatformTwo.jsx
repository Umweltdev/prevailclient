import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  imagePlaform: {
    width: "83vw",
    height: "50vh",
    objectFit: "cover",
    borderRadius: "5px",
    margin: "0 auto",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",

    "@media (max-width: 600px)": {
      width: "96vw",
      height: "25vh",
    },
  },
  spline: {
    width: "40vw",
    height: "80vh",
    objectFit: "cover",
    borderRadius: "10vw",
  },
});
{
}

const PlatformTwo = () => {
  const classes = useStyles();
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "83vw",
        margin: "0 auto",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          gap: "4vw",
          flexDirection: "column",
        }}
      >
        <Grid
          sx={{
            // marginBottom: "1vh",
            display: "flex",
            gap: "5vw",
            margin: "0 auto",
            "@media (max-width: 600px)": { flexDirection: "column" },
          }}
        >
          <Grid
            sx={{
              width: "39vw",
              margin: "0 auto",
              "@media (max-width: 600px)": {
                width: "95vw",
              },
            }}
          >
            <Typography
              sx={{
                display: "flex",
                fontSize: "1.9vw",
                fontWeight: "bold",
                marginBottom: "2vh",
                "@media (max-width: 600px)": {
                  display: "flex",
                  fontSize: "6vw",
                  fontWeight: "bold",
                  marginBottom: "1vh",
                },
              }}
            >
              Active Evaluation
            </Typography>
            <Typography
              sx={{
                fontSize: "1.4vw",
                color: "#636363",

                // marginBottom: "1vh",
                // textAlign: "justify",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                  color: "#636363",
                  // marginBottom: "1vh",
                  textAlign: "justify",
                },
              }}
            >
              During this stage, customers actively look around, much like
              window-shopping, comparing different brands and what they offer.
              They are searching for the best value. At Prevail, our role is to
              make sure your products or services are right where your potential
              customers are looking. Our &quot;Website Production &amp;
              Management&quot; service will help you set up a website that is
              not just eye-catching but also user-friendly. Think of this
              website as your online shop window. This helps them make informed
              decisions. Additionally, our “Search Engine Marketing (SEM)”
              service,
            </Typography>
          </Grid>
          <Grid
            sx={{
              width: "39vw",
              "@media (max-width: 600px)": {
                width: "95vw",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "1.4vw",
                color: "#636363",

                marginTop: "7vh",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                  color: "#636363",
                  marginTop: "1vh",
                  textAlign: "justify",
                },
              }}
            >
              especially Pay-Per- Click (PPC) advertising, is crucial at this
              phase. By strategically placing ads on search engines to capture
              the attention of consumers who are looking for information and
              persuade them to consider your product or service. This
              combination of a well-crafted website and smart advertising
              positions you effectively in the minds of your customers when they
              are in the critical phase of comparing and deciding.It is where
              customers can get a comprehensive look at what you offer and learn
              more about your products or services through detailed information,
              customer testimonials, blogs, and FAQs.
            </Typography>
          </Grid>
        </Grid>
        <img
          className={classes.imagePlaform}
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />

        <Grid
          sx={{
            display: "flex",
            flexDirection: "space-between",
            gap: "5vw",
            width: "83vw",
            alignItems: "center",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              marginTop: "3vh",
            },
          }}
        >
          <Grid
            sx={{
              width: "45vw",
              "@media (max-width: 600px)": {
                width: "95vw",
                margin: "0 auto",
              },
            }}
          >
            <Typography
              sx={{
                display: "flex",
                fontSize: "1.8vw",
                fontWeight: "bold",
                color: "#494848",
                marginBottom: "3vh",
                "@media (max-width: 600px)": {
                  display: "flex",
                  fontSize: "6vw",
                  fontWeight: "bold",
                  color: "#494848",
                  marginBottom: "1vh",
                },
              }}
            >
              Purchasing
            </Typography>
            <Typography
              sx={{
                fontSize: "1.4vw",
                color: "#636363",
                marginBottom: "1vh",
                // textAlign: "justify",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",

                  color: "#494848",
                  marginBottom: "1vh",
                },
              }}
            >
              Consider the stage where a consumer is about to make a final
              decision to buy a product or service. At this stage, they become a
              customer. Prevail can help you make this process smoother with our
              range of services. Our &quot;Brand Identity Package&quot; service
              makes your brand stand out, while our &quot;Search Engine
              Marketing (SEM)&quot; service ensures that you reach the right
              audience on Google or Bing. <br /> <br /> Additionally, our
              &quot;Website Production &amp; Management&quot; service keeps your
              website attractive and user-friendly. Currently, we are offering a
              special deal: the &quot;Digital Accelerator&quot; Bundle. This
              bundle combines these three key services to give your digital
              marketing strategy a powerful and visually appealing boost. The
              best part is that we are offering it at a huge discount of up to
              70%. This bundle is a complete solution to make your business
              shine online and attract more customers.
            </Typography>
          </Grid>
          <Grid className={classes.spline}></Grid>
        </Grid>
      </Grid>
      {/* <spline-viewer url="https://prod.spline.design/kqWnRSHfs03RcYiO/scene.splinecode"></spline-viewer> */}
    </Grid>
  );
};

export default PlatformTwo;

// box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
