import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  AdsClick,
  Campaign,
  DevicesOther,
  Label,
  Plagiarism,
  Poll,
  Speed,
  SsidChart,
  Visibility,
} from "@mui/icons-material";

const images = [
  {
    icon: <DevicesOther />,
    title: "Precision Targeting",
    // subTitle: `We understand that visibility is not enough; businesses need to be seen by the right audience.`,
    text: "We understand that visibility is not enough; businesses need to be seen by the right audience. Our SEM service ensures targeted display marketing, optimising for the audience that matters most to our clients. ",
    imgPath:
      "https://img.freepik.com/premium-photo/shot-red-darts-arrows-target-center-business-target-goal-success-concept_53476-4868.jpg?w=740",
  },
  {
    icon: <Campaign />,
    title: "SEO Mastery",
    // subTitle: `Brand awareness strategies are to introduce your brand and its products or services.`,
    text: "Prevail offers a comprehensive approach to Search Engine Optimization (SEO), from regular audits and keyword optimisation to real-time performance metrics and periodical reporting.",

    imgPath:
      "https://img.freepik.com/premium-photo/chess-king-bishop-pawn-wood-metal-yellow-golden-silver-decoration-business-marketing-financial-management-strategy-idea-decision-leadership-successful-winner-game-teamwork-black-background3d-render_178037-187.jpg?w=740",
  },
  {
    icon: <SsidChart />,
    title: "Continuous Optimisation",
    // subTitle:
    //   "To succeed in the market, it is essential to research and understand your competitors strategies.",
    text: "SEM is an ongoing process that requires continual optimisation of campaigns, regular health checks, and analysis of PPC performance to ensure alignment with our client's evolving missions and objectives.",
    imgPath:
      "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg?t=st=1711540852~exp=1711544452~hmac=a958aa9122b025075105a9b7fe4627524ac10ef43b4327b3e2da5df73ad2838d&w=740",
  },
  {
    icon: <Plagiarism />,
    title: "Comprehensive Analytics",
    // subTitle:
    //   "Having a high keyword ranking can lead to organic traffic being directed to your site.",
    text: "Our service includes installing Google Analytics, Google Display, and Google Trends. This provides clients with valuable insights about user behaviour, website performance, and marketing effectiveness.",
    imgPath:
      "https://img.freepik.com/premium-photo/business-data-analysis-analytics-customers-insights-with-charts-abstract-blue-background-vector-illustration-generative-ai_438099-11783.jpg?w=740",
  },

  {
    icon: <AdsClick />,
    title: "Competitive Edge",
    // subTitle:
    //   "Examining your competitors can aid you in identifying market gaps.",
    text: "We conduct comprehensive competitive analysis and research, ensuring our clients maintain a competitive edge in the digital landscape through backlink monitoring and gap analysis.",
    imgPath:
      "https://img.freepik.com/free-photo/gold-chess-chess-board-game-business-metaphor-leadership-concept_1150-19585.jpg?t=st=1711540979~exp=1711544579~hmac=4c49c1addeb8f6965b461b342c80ccf194c7587df24f3d385a24ac9968e18337&w=740",
  },
  {
    icon: <Visibility />,
    title: "Local Dominance",
    // subTitle:
    //   "The objective of this approach is to spend your marketing budget more efficiently.",
    text: "Our service includes setting up Google My Business, Bing & Yahoo business listings, and implementing local marketing strategies to increase visibility in specific geographic areas for locally focused businesses.",
    imgPath:
      "https://img.freepik.com/free-photo/dark-wooden-pieces-pawn-arrangement_23-2149382411.jpg?t=st=1711541111~exp=1711544711~hmac=47707e450e03dca5a2c9c6356d5df8d65c5c0c6d89016c198294f6f48de56bfe&w=740",
  },
  // {
  //   icon: <Speed />,
  //   title: "Optimisation",
  //   subTitle:
  //     "Examining your competitors can aid you in identifying market gaps.",
  //   text: "To succeed in the market, it is essential to research and understand your competitors' strategies, strengths, weaknesses, and market positioning. Examining your competitors can aid you in identifying market gaps, learning from their successes or mistakes, and differentiating your brand. This analysis can inform your marketing strategies, product development, and overall business strategy.",
  //   imgPath:
  //     "https://img.freepik.com/free-photo/seo-analysis-business-concept-with-wooden-blocks-with-words-it-magnifying-glass-side-view_176474-10449.jpg?t=st=1711132366~exp=1711135966~hmac=42ea62114ac54299762812dbe70aeb7be4527b6cd37f961a6a45b1a5ff0dcaf7&w=740",
  // },
  // {
  //   icon: <Poll />,
  //   title: "Reporting",
  //   subTitle:
  //     "Reporting provides valuable insights into what is working and what is not.",
  //   text: "This involves collecting and analysing data to evaluate the performance of your digital marketing activities. Reporting provides valuable insights into what is working and what is not, enabling you to make informed decisions to improve your marketing strategies. Reports can cover various metrics, including website traffic, conversion rates, social media engagement, and ROI (Return on Investment).",
  //   imgPath:
  //     "https://img.freepik.com/free-photo/business-concept-with-graphic-holography_23-2149160928.jpg",
  // },
];

const useStyles = makeStyles({
  imageCar: {
    width: "40vw",
    height: "23vw",
    objectFit: "cover",
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
    borderRadius: "1vw",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "20vh",
      marginTop: "2vh",
    },
  },

  mainImage: {
    width: "80vw",
    height: "50vh",
    objectFit: "cover",
    margin: "0 0 5vh 0",
    borderRadius: "5px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "30vh",
      margin: "0 auto",
      // marginTop: "2vh",
    },
  },
});

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const classes = useStyles();

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid
      sx={{
        padding: "15vh 0 0 0",
        display: "flex",
        flexDirection: "column",
        width: "80vw",
        margin: "0 auto",
        "@media (max-width: 600px)": {
          padding: "5vh 0 0 0",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        },
      }}
      justifyContent="center"
    >
      <img
        className={classes.mainImage}
        src="https://img.freepik.com/free-photo/homepage-concept-with-search-bar_23-2150040210.jpg?t=st=1711627296~exp=1711630896~hmac=d04c9ee44ba5854784f2e620f2f2d6a581e1f4b83fe23f4ddc2f01c13224e04c&w=826"
        alt=""
      />
      <Grid
        sx={{
          margin: "0 auto",
          // width: "60vw",
          textAlign: "center",
          marginBottom: "3vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 600px)": {
            margin: "0 auto",
            // width: "60vw",
            textAlign: "center",
            marginBottom: "3vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "3.2vw",
            fontWeight: "900",
            "@media (max-width: 600px)": {
              fontSize: "6vw",
              fontWeight: "900",
              marginTop: "3vh",
            },
          }}
        >
          Solution
        </Typography>
        <Typography
          sx={{
            fontSize: "1.3vw",
            width: "80vw",
            textAlign: "center",
            margin: "0 auto",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
            },
          }}
        >
          {" "}
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
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
          height: "85vh",
          marginTop: "4vh",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            height: "unset",
            margin: "4vh auto",
          },
        }}
      >
        {/* LEFT */}
        <Grid
          sx={{
            width: "40vw",
            marginTop: "4vh",
            "@media (max-width: 600px)": {
              width: "95vw",
            },
          }}
        >
          <Typography
            sx={{
              width: "35vw",
              fontSize: "2vw",
              fontWeight: "bold",
              color: "#333",
              // marginBottom: "2vh",
              "@media (max-width: 600px)": {
                fontSize: "6vw",
                width: "95vw",
              },
            }}
          >
            {images[activeStep].title}
          </Typography>

          <Typography
            sx={{
              width: "35vw",
              fontSize: "1.4vw",
              marginTop: "2vh",
              // lineHeight: "4vh",
              // height: "50vh",
              "@media (max-width: 600px)": {
                width: "95vw",
                fontSize: "4vw",
                marginTop: "1vh",
                lineHeight: "unset",
                height: "unset",
                textAlign: "justify",
                textJustify: "distribute",
              },
            }}
          >
            {images[activeStep].text}
          </Typography>
        </Grid>

        {/* RIGHT */}
        <Grid
          sx={{
            width: "40vw",
            transition: " 1s ease-in-out",

            "@media (max-width: 600px)": {
              width: "95vw",
              transition: " 1s ease-in-out",
            },
          }}
        >
          <img
            className={classes.imageCar}
            src={images[activeStep].imgPath}
            alt={images[activeStep].label}
          />
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",

          "@media (max-width: 600px)": {
            width: "82vw",
            flexWrap: "wrap",
            margin: "0 auto",
          },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            background: "white",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            color: "grey",
            borderRadius: "3vw",
            // width: "85vw",
          }}
        >
          {images.map((step, index) => (
            <Grid
              sx={{
                background: "white",
                // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                borderRadius: "3vw",
                color: "#333",

                "&:hover": {
                  backgroundColor: "#b4b4b4",
                  color: "#fff",
                  borderRadius: "3vw",
                },
              }}
            >
              <Button
                key={index}
                onClick={() => handleStepChange(index)}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "-33vh",
                  padding: "1vh 0vw",
                  // fontWeight: "900",
                  fontSize: "0.8vw",
                  color: activeStep === index ? "#884ed9" : "#333",
                  fontWeight: activeStep === index ? "bold" : "none",
                  borderRadius: "1px",
                  width: "13.4vw",
                  // background: activeStep === index ? "#884ed9" : "none",
                  "&:hover": {
                    backgroundColor: "#dcdcdc",
                    color: "#333",
                    fontWeight: "bold",
                    borderRadius: "0.5vw",
                  },
                  "@media (max-width: 600px)": { display: "none" },
                }}
              >
                {step.title}
              </Button>
              <Button
                key={index}
                onClick={() => handleStepChange(index)}
                sx={{
                  display: "none",

                  "@media (max-width: 600px)": {
                    cursor: "pointer",
                    display: "flex",
                    padding: "1vh 0",
                    fontSize: "3vw",

                    color: activeStep === index ? "#a16ad9" : "#484949",
                    borderTop:
                      activeStep === index ? "3px solid #a16ad9" : "none",
                  },
                }}
              >
                {step.icon}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Carousel;
