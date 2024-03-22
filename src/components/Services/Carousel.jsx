import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";

const images = [
  {
    title: "Digital Landscape",
    subTitle: `The term "digital landscape" refers to the entire digital
environment where your brand operates`,
    text: `The term "digital landscape" refers to the entire digital
environment where your brand operates. This includes various online platforms, digital
trends, consumer behaviour online, and the evolution of digital marketing strategies. It
is essential to understand the digital landscape to develop effective marketing strategies
that are relevant and impactful."`,
    imgPath:
      "https://img.freepik.com/free-photo/social-media-concept-with-smartphone_52683-100042.jpg?t=st=1711131269~exp=1711134869~hmac=d6c3061eb82155664d26609d17f6fadf0333df875a6c0312b36f565f91cf5d7b&w=740",
  },
  {
    title: "Brand Awarenes",
    subTitle: `Brand awareness strategies are to introduce your brand and its products or services`,
    text: `Brand awareness strategies are to introduce your brand and its products or services to your target audience. The goal is to create a long-lasting impression in the minds of potential customers so that when they are ready to make a purchase, they think of your brand. This can be achieved by implementing various digital marketing tactics such as content marketing, improving website aesthetics, optimising search engines, running social media campaigns, and more`,
    imgPath:
      "https://img.freepik.com/premium-photo/megaphone-against-gray-white-surface_443869-2.jpg?w=740",
  },
  {
    title: "Competitor Analysis",
    subTitle:
      "To succeed in the market, it is essential to research and understand your competitors strategies",
    text: "To succeed in the market, it is essential to research and understand your competitors strategies, strengths, weaknesses, and market positioning. Examining your competitors can aid you in identifying market gaps, learning from their successes or mistakes, and differentiating your brand. This analysis can inform your marketing strategies, product development, and overall business strategy.",
    imgPath:
      "https://img.freepik.com/premium-photo/close-up-king-chess-standing-winner-with-falling-chess_101448-2828.jpg?w=740",
  },
  {
    title: "Keyword Ranking",
    subTitle:
      "Having a high keyword ranking can lead to organic traffic being directed to your site",
    text: "When we talk about digital marketing, the term keyword ranking refers to the position of your website on search engine results pages (SERPs) for specific keywords. Having a high keyword ranking can lead to organic traffic being directed to your site, improve visibility, and enhance brand credibility. SEO (Search Engine Optimisation) strategies such as optimising website content, building backlinks, and improving site speed are used to improve keyword rankings",
    imgPath:
      "https://img.freepik.com/premium-photo/block-keyword-yellow-background-conceptual-image-importance-keywords_121826-2305.jpg?w=740",
  },

  {
    title: "Targeted Advertising",
    subTitle:
      "Examining your competitors can aid you in identifying market gaps",
    text: "To succeed in the market, it is essential to research and understand your competitors' strategies, strengths, weaknesses, and market positioning. Examining your competitors can aid you in identifying market gaps, learning from their successes or mistakes, and differentiating your brand. This analysis can inform your marketing strategies, product development, and overall business strategy.",
    imgPath:
      "https://img.freepik.com/free-photo/realistic-camera-lens-target-perfect-shoot-3d-rendering_460848-10717.jpg?t=st=1711132156~exp=1711135756~hmac=a2eb2792453a9d692dfe9b766991387c34e257fc79f8d6b61dbf22bed2cf5e7c&w=740",
  },
  {
    title: "Higher Visibility",
    subTitle:
      "The objective of this approach is to spend your marketing budget more efficiently",
    text: "This is a strategy where you direct your advertising efforts to a specific audience based on demographics, interests, behaviour, or other criteria. The objective of this approach is to spend your marketing budget more efficiently by reaching people who are more likely to be interested in your products or services. By doing this, you can achieve better results and maximise your return on investment.",
    imgPath:
      "https://img.freepik.com/free-photo/medium-shot-woman-influencer-marketing_23-2150521879.jpg?t=st=1711131935~exp=1711135535~hmac=d630aa70503c1250839551a5fec5cee560ef36b708503a4e158817efb059b6fc&w=740",
  },
  {
    title: "Optimisation",
    subTitle:
      "Examining your competitors can aid you in identifying market gaps",
    text: "To succeed in the market, it is essential to research and understand your competitors' strategies, strengths, weaknesses, and market positioning. Examining your competitors can aid you in identifying market gaps, learning from their successes or mistakes, and differentiating your brand. This analysis can inform your marketing strategies, product development, and overall business strategy.",
    imgPath:
      "https://img.freepik.com/free-photo/seo-analysis-business-concept-with-wooden-blocks-with-words-it-magnifying-glass-side-view_176474-10449.jpg?t=st=1711132366~exp=1711135966~hmac=42ea62114ac54299762812dbe70aeb7be4527b6cd37f961a6a45b1a5ff0dcaf7&w=740",
  },
  {
    title: "Reporting",
    subTitle:
      "Reporting provides valuable insights into what is working and what is not",
    text: "This involves collecting and analysing data to evaluate the performance of your digital marketing activities. Reporting provides valuable insights into what is working and what is not, enabling you to make informed decisions to improve your marketing strategies. Reports can cover various metrics, including website traffic, conversion rates, social media engagement, and ROI (Return on Investment).",
    imgPath:
      "https://img.freepik.com/free-photo/business-concept-with-graphic-holography_23-2149160928.jpg",
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  //   const buttonTop = {
  //     border
  //   }

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid sx={{ padding: "0 0 10vw 0" }} justifyContent="center">
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        //   gap: "1vw",
        }}
      >
        {/* LEFT */}
        <Grid sx={{ width: "40vw" }}>
          <Typography
            sx={{
              width: "35vw",
              fontSize: "1.2vw",
              fontWeight: "bold",
              color: "#884ed9",
              marginBottom: "3vh",
            }}
          >
            {images[activeStep].title}
          </Typography>
          <Typography
            sx={{
              width: "35vw",
              fontSize: "2.3vw",
              fontWeight: "bold",
              marginBottom: "3vh",
            }}
          >
            {images[activeStep].subTitle}
          </Typography>
          <Typography
            sx={{
              width: "25vw",
              fontSize: "1.2vw",
              marginTop: "3vh",
              lineHeight: "4vh",
              height: "50vh"
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
          }}
        >
          <Typography
            sx={{
              fontSize: "1.4vw",
              mb: "3vh",
              letterSpacing: "1px",
              height: "12vh",
            }}
          >
            {images[activeStep].subTitle}
          </Typography>
          <img
            src={images[activeStep].imgPath}
            alt={images[activeStep].label}
            style={{
              width: "40vw",
              height: "25vw",
              objectFit: "cover",
              boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
              borderRadius: "1vw",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {images.map((step, index) => (
          <Button
            key={index}
            onClick={() => handleStepChange(index)}
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-around",
              marginTop: "5vh",
              padding: "3vh 1vw",
              fontWeight: "900",
              fontSize: "1vw",
              color: "#333",
              borderTop: activeStep === index ? "3px solid #a16ad9" : "none",
            }}
          >
            {step.title}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
}

export default Carousel;
