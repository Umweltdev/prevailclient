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
    title: "Digital Landscape",
    subTitle: `The term "digital landscape" refers to the entire digital
environment where your brand operates.`,
    text: `This includes various online platforms, digital
trends, consumer behaviour online, and the evolution of digital marketing strategies. It
is essential to understand the digital landscape to develop effective marketing strategies
that are relevant and impactful."`,
    imgPath:
      "https://img.freepik.com/free-photo/social-media-concept-with-smartphone_52683-100042.jpg?t=st=1711131269~exp=1711134869~hmac=d6c3061eb82155664d26609d17f6fadf0333df875a6c0312b36f565f91cf5d7b&w=740",
  },
  {
    icon: <Campaign />,
    title: "Brand Awarenes",
    subTitle: `Brand awareness strategies are to introduce your brand and its products or services.`,
    text: `To your target audience. The goal is to create a long-lasting impression in the minds of potential customers so that when they are ready to make a purchase, they think of your brand. This can be achieved by implementing various digital marketing tactics such as content marketing, improving website aesthetics, optimising search engines, running social media campaigns, and more`,
    imgPath:
      "https://img.freepik.com/premium-photo/megaphone-against-gray-white-surface_443869-2.jpg?w=740",
  },
  {
    icon: <SsidChart />,
    title: "Competitor Analysis",
    subTitle:
      "To succeed in the market, it is essential to research and understand your competitors strategies.",
    text: "strengths, weaknesses, and market positioning. Examining your competitors can aid you in identifying market gaps, learning from their successes or mistakes, and differentiating your brand. This analysis can inform your marketing strategies, product development, and overall business strategy.",
    imgPath:
      "https://img.freepik.com/premium-photo/close-up-king-chess-standing-winner-with-falling-chess_101448-2828.jpg?w=740",
  },
  {
    icon: <Plagiarism />,
    title: "Keyword Ranking",
    subTitle:
      "Having a high keyword ranking can lead to organic traffic being directed to your site.",
    text: "When we talk about digital marketing, the term keyword ranking refers to the position of your website on search engine results pages (SERPs) for specific keywords. Having a high keyword ranking can lead to organic traffic being directed to your site, improve visibility, and enhance brand credibility. SEO (Search Engine Optimisation) strategies such as optimising website content, building backlinks, and improving site speed are used to improve keyword rankings",
    imgPath:
      "https://img.freepik.com/premium-photo/block-keyword-yellow-background-conceptual-image-importance-keywords_121826-2305.jpg?w=740",
  },

  {
    icon: <AdsClick />,
    title: "Targeted Advertising",
    subTitle:
      "Examining your competitors can aid you in identifying market gaps.",
    text: "To succeed in the market, it is essential to research and understand your competitors' strategies, strengths, weaknesses, and market positioning. Examining your competitors can aid you in identifying market gaps, learning from their successes or mistakes, and differentiating your brand. This analysis can inform your marketing strategies, product development, and overall business strategy.",
    imgPath:
      "https://img.freepik.com/free-photo/realistic-camera-lens-target-perfect-shoot-3d-rendering_460848-10717.jpg?t=st=1711132156~exp=1711135756~hmac=a2eb2792453a9d692dfe9b766991387c34e257fc79f8d6b61dbf22bed2cf5e7c&w=740",
  },
  {
    icon: <Visibility />,
    title: "Higher Visibility",
    subTitle:
      "The objective of this approach is to spend your marketing budget more efficiently.",
    text: "This is a strategy where you direct your advertising efforts to a specific audience based on demographics, interests, behaviour, or other criteria. The objective of this approach is to spend your marketing budget more efficiently by reaching people who are more likely to be interested in your products or services. By doing this, you can achieve better results and maximise your return on investment.",
    imgPath:
      "https://img.freepik.com/free-photo/medium-shot-woman-influencer-marketing_23-2150521879.jpg?t=st=1711131935~exp=1711135535~hmac=d630aa70503c1250839551a5fec5cee560ef36b708503a4e158817efb059b6fc&w=740",
  },
  {
    icon: <Speed />,
    title: "Optimisation",
    subTitle:
      "Examining your competitors can aid you in identifying market gaps.",
    text: "To succeed in the market, it is essential to research and understand your competitors' strategies, strengths, weaknesses, and market positioning. Examining your competitors can aid you in identifying market gaps, learning from their successes or mistakes, and differentiating your brand. This analysis can inform your marketing strategies, product development, and overall business strategy.",
    imgPath:
      "https://img.freepik.com/free-photo/seo-analysis-business-concept-with-wooden-blocks-with-words-it-magnifying-glass-side-view_176474-10449.jpg?t=st=1711132366~exp=1711135966~hmac=42ea62114ac54299762812dbe70aeb7be4527b6cd37f961a6a45b1a5ff0dcaf7&w=740",
  },
  {
    icon: <Poll />,
    title: "Reporting",
    subTitle:
      "Reporting provides valuable insights into what is working and what is not.",
    text: "This involves collecting and analysing data to evaluate the performance of your digital marketing activities. Reporting provides valuable insights into what is working and what is not, enabling you to make informed decisions to improve your marketing strategies. Reports can cover various metrics, including website traffic, conversion rates, social media engagement, and ROI (Return on Investment).",
    imgPath:
      "https://img.freepik.com/free-photo/business-concept-with-graphic-holography_23-2149160928.jpg",
  },
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
      height: "25vh",
      marginTop: "2vh",
      margin: "0vh 2.5vw",
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
        padding: "20vh 0 0 0",
        "@media (max-width: 600px)": {
          padding: "13vh 0 0 0",
          margin: "0 auto",
        },
      }}
      justifyContent="center"
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "top",
          justifyContent: "center",
          height: "85vh",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            margin: "0 auto",
          },
        }}
      >
        {/* LEFT */}
        <Grid
          sx={{
            width: "40vw",
            "@media (max-width: 600px)": {
              width: "95vw",
              margin: "0 auto",
            },
          }}
        >
          <Typography
            sx={{
              width: "35vw",
              fontSize: "1.2vw",
              fontWeight: "bold",
              color: "#884ed9",
              marginBottom: "2vh",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
                width: "95vw",
              },
            }}
          >
            {images[activeStep].title}
          </Typography>
          <Typography
            sx={{
              width: "35vw",
              fontSize: "2.3vw",
              fontWeight: "bold",
              marginBottom: "2vh",
              "@media (max-width: 600px)": {
                fontSize: "5vw",
                width: "95vw",
              },
            }}
          >
            {images[activeStep].subTitle}
          </Typography>
          <Typography
            sx={{
              width: "35vw",
              fontSize: "1.2vw",
              marginTop: "5vh",
              lineHeight: "4vh",
              height: "50vh",
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
            <Label
              sx={{
                fontSize: "1.8vw",
                color: "#a16ad9",
                "@media (max-width: 600px)": { fontSize: "3vw" },
              }}
            />
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
          <Grid sx={{ display: "flex", alignItems: "top" }}>
            <Typography
              sx={{
                fontSize: "1.4vw",
                mb: "3vh",
                letterSpacing: "1px",
                // height: "10vh",
                alignSelf: "center",
                "@media (max-width: 600px)": {
                  display: "none",
                },
              }}
            >
              {images[activeStep].subTitle}
              <Label
                sx={{
                  fontSize: "1.8vw",
                  color: "#a16ad9",
                  paddingTop: "vh",
                  // height: "13vh",
                  "@media (max-width: 600px)": { fontSize: "2vw" },
                }}
              />
            </Typography>

            {/* <Label
              sx={{
                fontSize: "5vw",
                "@media (max-width: 600px)": { fontSize: "10vw" },
              }}
            /> */}
          </Grid>
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
            width: "83vw",
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
            "@media (max-width: 600px)": {
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          {images.map((step, index) => (
            <Grid
              sx={{
                background: "white",
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
                  marginTop: "-18vh",
                  padding: "1vh 5px",
                  // fontWeight: "900",
                  fontSize: "0.94vw",
                  color: activeStep === index ? "#884ed9" : "#333",
                  fontWeight: activeStep === index ? "bold" : "none",
                  borderRadius: "3vw",
                  // background: activeStep === index ? "#884ed9" : "none",
                  "&:hover": {
                    backgroundColor: "#dcdcdc",
                    color: "#333",
                    fontWeight: "bold",
                    borderRadius: "1vh",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
                  },
                  "@media (max-width: 600px)": { display: "none" },
                }}
              >
                {step.title}
              </Button>
              <Button
                onClick={() => handleStepChange(index)}
                sx={{
                  display: "none",

                  "@media (max-width: 600px)": {
                    cursor: "pointer",
                    display: "flex",
                    padding: "1vh 0",
                    fontSize: "3vw",
                    width: "20.5vw",

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
