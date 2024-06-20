import React from "react";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import PainPoint from "./PainPoints";
import Advantages from "./Advantages";
import Benefits from "./Benefits";
import Footer from "../../Footer/Footer";
import FooterNew from "../../Footer/FooterNew";
import HeroSection from "../BrandIdentity/HeroSection";
import { Container, Grid, Typography, Stack, Box, Button } from "@mui/material";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import PalleteSvg from "./assets/pallete.svg";
import ChipSvg from "./assets/chip.svg";
import DocSvg from "./assets/doc.svg";
import WebSvg from "./assets/web.svg";
import LockSvg from "./assets/lock.svg";
import StartUpSvg from "./assets/startup.svg";
import BulbSvg from "./assets/bulb.svg";

const data = [
  {
    title: "Describing Requirements",
    svg: DocSvg,
    desc: "We start by understanding your vision. You'll define the scope, including your target audience, budget, and desired outcomes. This stage sets the foundation for a website that truly reflects your brand and meets your strategic objectives.",
  },
  {
    title: "UI/UX Design",
    svg: PalleteSvg,
    desc: " Prevail offers both pre-styled UI/UX templates and custom designs. Our design process includes multiple rounds of meetings and revisions, ensuring every aspect of your site is crafted to perfection – from typography and colour schemes to layout and imagery.",
  },
  {
    title: "API Selection",
    svg: ChipSvg,
    desc: "We guide you through selecting and integrating cutting-edge SaaS APIs that enhance your site’s functionality and ROI. These APIs are carefully chosen to support your specific business operations, whether in eCommerce or service provision. ",
  },
  {
    title: "Technical SEO",
    svg: WebSvg,
    desc: "Is designed to optimise your website to improve search engine visibility and user experience – enhancing foundational elements like website architecture, content loading, XML sitemaps, robots.txt, linking strategies, data filing, comprehensive Google tool setup, and website performance enhancement.",
  },
  {
    title: "Hosting Details and Security Protocols",
    svg: LockSvg,
    desc: "Security is paramount. We employ advanced tools and protocols to safeguard your safety, involving you in the process to ensure that sensitive information remains protected. We educate our clients on best security practices to maintain integrity and trust.",
  },
  {
    title: "Launch and Support",
    svg: StartUpSvg,
    desc: "After thorough testing and final tweaks, we launch your website. Post-launch, we continue to monitor its performance and offer support to ensure it remains efficient, secure, and engaging for your audience. ",
  },

  {
    title: "Our Specialties",
    svg: BulbSvg,
    desc: "Our expertise in the MERN stack — including React.js, Node.js, and MongoDB — enables us to build dynamic, responsive websites that are both user-friendly and robust. Our development approach guarantees a website that is not only aesthetically pleasing but also technically sound.",
  },
];

const WebsiteDevelopment = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <HeroSection header="Custom Website Development" />
      <Container
        maxWidth="lg"
        sx={{
          py: 12,
        }}
      >
        <Stack spacing={12}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={6}>
              <Stack spacing={3} color={"#505660"}>
                <Typography
                  sx={{
                    fontSize: "28px",
                    color: "#1D0D40",
                    fontWeight: "600",
                  }}
                >
                  Why Custom Web Development?  
                </Typography>
                <Typography>
                  In the digital era, establishing a distinct digital presence
                  is more crucial than ever. If you’re looking to craft a
                  digital identity that truly embodies your brand and narrates
                  your story with precision, the “custom website development”
                  service is your go-to solution.{" "}
                </Typography>
                <Typography>
                  Unlike standard web builder platforms that might suffice for
                  simpler, small-scale projects – custom development allows for
                  a limitless array of API integrations, frontend
                  customisations, and aesthetic enhancements. This approach is
                  tailored for visionary businesses aiming to carve out a
                  significant digital presence.   
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: "100%",
                  // height: "100%",
                }}
              >
                <img
                  src={image1}
                  style={{
                    width: "100%",
                    // height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: "100%",
                  // height: "100%",
                }}
              >
                <img
                  src={image2}
                  style={{
                    width: "100%",
                    // height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={3} color={"#505660"}>
                <Typography
                  sx={{
                    fontSize: "28px",
                    color: "#1D0D40",
                    fontWeight: "600",
                  }}
                >
                  The Limitations of Standard Solutions  
                </Typography>
                <Typography>
                  Many businesses encounter significant challenges on their
                  digital journey, including performance issues where heavy,
                  costly images and design elements slow down websites,
                  adversely affecting user experience. High hosting charges and
                  the risk of overspending on poorly optimised digital assets
                  pose major cost concerns.   
                </Typography>
                <Typography>
                  Additionally, generic web builder platforms often lack the
                  flexibility needed to truly distinguish a brand or meet
                  specific business requirements, and there are frequent
                  communication gaps that make it difficult to bridge the divide
                  between a business's vision and what is technologically
                  feasible, adding to the complexity and frustration of creating
                  an effective digital presence.  
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={6}>
              <Stack spacing={3} color={"#505660"}>
                <Typography
                  sx={{
                    fontSize: "28px",
                    color: "#1D0D40",
                    fontWeight: "600",
                  }}
                >
                  Why Choose Prevail for Your Digital Development Journey?  
                </Typography>
                <Typography>
                  Are you an e-commerce business struggling with low conversions
                  and a generic online store? Our “Shopify Web Design” Service
                  offers a comprehensive solution. This service focuses on
                  converting visitors into loyal customers through a
                  captivating, user-friendly online store optimized for maximum
                  engagement and sales. 
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: "100%",
                  // height: "100%",
                }}
              >
                <img
                  src={image3}
                  style={{
                    width: "100%",
                    // height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Stack>

        <Stack mt={10}>
          <Typography fontSize="27.7px" fontWeight="600" mb={4}>
            What You Get and What to Expect  
          </Typography>

          <Grid container spacing={3}>
            {data.map((item, index) => (
              <Grid key={index} item xs={12} md={4}>
                <Stack direction="row" spacing={1}>
                  <Box>
                    <img src={item.svg} />
                  </Box>
                  <Stack spacing={1} color={"#505660"}>
                    <Typography
                      fontSize="20px"
                      fontWeight="600"
                      color="#1D0D40"
                    >
                      {item.title}
                    </Typography>
                    <Typography>{item.desc}</Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>

      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to bottom, #ffffff, rgba(110, 62, 244, 0.1))",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            py: 6,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#FCFCFC",
              px: 16,
              py: 8,
              borderRadius: "8px",
            }}
          >
            <Typography
              sx={{
                fontSize: "26px",
                color: "#34205F",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Choosing Prevail’s Custom Website Development means opting for a
              tailored, effective, and secure digital presence. Ready to embark
              on this transformative journey? Contact Prevail today to build a
              website that not only meets but exceeds your digital aspirations. 
            </Typography>
          </Box>
        </Container>
      </Box>
      <FooterNew />
    </div>
  );
};

export default WebsiteDevelopment;

{
  /* <PainPoint />
<Advantages /> 
<Benefits />
<FooterNew /> */
}
