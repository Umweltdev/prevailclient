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
    title: "Shopify Platform",
    // subTitle: `We understand that visibility is not enough; businesses need to be seen by the right audience.`,
    text: "We specialise in crafting customised websites on Shopify, offering a range of services for enhancing online presence including website development, online sales, and business management tools. Our expertise with Shopify allows us to leverage its versatile features like customisable templates, point of sale options, and robust marketing and SEO tools. We also focus on inventory management and analytics, ensuring that each website is not only visually appealing but also strategically equipped for business success.",
    imgPath:
      "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?t=st=1711562131~exp=1711565731~hmac=5ca949bfafebb1fdb4503516a810de5cff4c897577a6203a54a25a1391154f3e&w=740",
  },
  {
    icon: <Campaign />,
    title: "Real Estate Platform",
    // subTitle: `Brand awareness strategies are to introduce your brand and its products or services.`,
    text: "Prevail recognises the challenges SMEs and local businesses in the real estate industry face, especially when competing with larger entities in the digital space. We offer a comprehensive service package tailored for real estate, featuring advanced options like admin login for website edits, seamless website transfers, dynamic and SEO-optimised content, and responsive design. Additionally, our all-inclusive services include brainstorming sessions, website development presentations, and content optimisation, all designed to elevate your online presence",

    imgPath:
      "https://img.freepik.com/free-photo/real-estate-housing-brokerage-concept_53876-120663.jpg?t=st=1711562822~exp=1711566422~hmac=7fcb498380c46806f9309c9eb115642f0bce494850328c341ce328d2e59fe693&w=740",
  },
  {
    icon: <SsidChart />,
    title: "Holistic Website Development",
    // subTitle:
    //   "To succeed in the market, it is essential to research and understand your competitors strategies.",
    text: "We do not just build websites; we create digital experiences. Our partnership approach ensures that every website is not only visually stunning but also functionally superior, reflecting the unique ethos of your business.",
    imgPath:
      "https://img.freepik.com/premium-photo/office-responsive-devices-design-website-3d-rendering_72104-3783.jpg?w=740",
  },
  {
    icon: <Plagiarism />,
    title: "Technical Expertise",
    // subTitle:
    //   "Having a high keyword ranking can lead to organic traffic being directed to your site.",
    text: "With advanced technologies like MERN Stack and Microservice Architecture, we guarantee that your website stays ahead in innovation, offering a seamless experience to your users.",
    imgPath:
      "https://img.freepik.com/premium-photo/system-admin-using-laptop-data-center_236854-41075.jpg?w=740",
  },

  {
    icon: <AdsClick />,
    title: "Comprehensive Features",
    // subTitle:
    //   "Examining your competitors can aid you in identifying market gaps.",
    text: "Our service includes all essentials from SSL certificates to dynamic UI & React, ensuring a fully functional, secure, and engaging website that caters to all your business needs.",
    imgPath:
      "https://img.freepik.com/free-photo/hand-holding-pen-collection-icons_1134-285.jpg?t=st=1711562506~exp=1711566106~hmac=4ebea79f87bc526d826dedd89d8aca7da7663d8a707a49fc27b0db1269327775&w=740",
  },
  {
    icon: <Visibility />,
    title: "Website Excellence",
    // subTitle:
    //   "The objective of this approach is to spend your marketing budget more efficiently.",
    text: "We go beyond basics by incorporating features like property listing pages, a calendar booking system, and an intuitive properties filter component, enhancing the user experience manifold (customer login, review, and rating).",
    imgPath:
      "https://img.freepik.com/free-photo/yolo-free-happy-fresh-motivation-concept_53876-124281.jpg?t=st=1711562574~exp=1711566174~hmac=dd9577566a263ce25c590f783b7f7e2346545cff0d4cd956ca22b7e193705f58&w=740",
  },
  {
    icon: <Speed />,
    title: "Maintenance and Security",
    // subTitle:
    //   "Examining your competitors can aid you in identifying market gaps.",
    text: "Our commitment does not end with development. We take care of everything from content updates to security monitoring and technical support, which allow our clients to focus on their core business operations.",
    imgPath:
      "https://img.freepik.com/premium-photo/creative-idea-concept-with-lock-symbol-microcircuit-illustration-modern-laptop-screen-protection-firewall-concept-3d-rendering_258654-25317.jpg?w=740",
  },
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
      height: "25vh",
      marginTop: "2vh",
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
        padding: "1vh 0 0 0",
        display: "flex",
        flexDirection: "column",
        width: "80vw",
        margin: "0 auto",
        "@media (max-width: 600px)": {
          padding: "13vh 0 0 0",
        },
      }}
      justifyContent="center"
    >

      <Grid
        sx={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        gap: "4vw",
          "@media (max-width: 600px)": {
            flexDirection: "column",
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
                fontSize: "3vw",
                width: "95vw",
              },
            }}
          >
            {images[activeStep].title}
          </Typography>

          <Typography
            sx={{
              width: "43vw",
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
            width: "80vw",
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
                  marginTop: "-10vh",
                  padding: "1vh 1vw",
                  // fontWeight: "900",
                  fontSize: "0.9vw",
                  color: activeStep === index ? "#884ed9" : "#333",
                  fontWeight: activeStep === index ? "bold" : "none",
                  borderRadius: "1px",
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
