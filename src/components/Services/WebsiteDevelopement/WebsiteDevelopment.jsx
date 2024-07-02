import React from "react";
import { Helmet } from "react-helmet";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import PainPoint from "./PainPoints";
import Advantages from "./Advantages";
import Benefits from "./Benefits";
import Footer from "../../Footer/Footer";
import FooterNew from "../../Footer/FooterNew";
import HeroComponent from "../ReusedComponenets/HeroComponent";
import AppBarNav from "../../Navbar/Appbar";
import { Container, Grid, Typography, Stack, Box, Button } from "@mui/material";
import image1 from "./assets/Why-Custom-Web-Development.webp";
import image2 from "./assets/Limitations-of-Standard-Solutions.webp";
import image3 from "./assets/Your-Digital-Development-Journey.webp";
import PalleteSvg from "./assets/pallete.svg";
import ChipSvg from "./assets/chip.svg";
import DocSvg from "./assets/doc.svg";
import WebSvg from "./assets/web.svg";
import LockSvg from "./assets/lock.svg";
import StartUpSvg from "./assets/startup.svg";
import BulbSvg from "./assets/bulb.svg";
import TextImageComponent from "../ReusedComponenets/TextImageComponent";
import ImageTextComponent from "../ReusedComponenets/ImageTextComponent";

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
    <>
    <Helmet>
        <title>Craft a Distinct Online Presence with Your Dream Website</title>
        <meta
          name="description"
          content="Craft a Distinct Online Presence with Your Dream Website"
        />
      </Helmet>
    <div style={{ width: "100%", overflow: "hidden" }}>
      <AppBarNav color="#000" />

      <HeroComponent title="Custom Website Development" />
      <Stack>
        <TextImageComponent
          img={image1}
          alt="Why-Custom-Web-Development"
          header={"Why Custom Web Development?"}
          text={`Establishing a distinct digital presence is more crucial than ever in the digital era. 
                  If you’re looking to craft a digital identity that embodies your brand and precisely 
                  tells your story, the “custom website development” service is your go-to solution. 
                  Unlike standard web builder platforms that might suffice for simpler, small-scale 
                  projects – custom development allows for a limitless array of API integrations, 
                  frontend customisations, and aesthetic enhancements. This approach is tailored for visionary 
                  businesses aiming to carve out a significant digital presence. `}
        />
        <ImageTextComponent
          img={image2}
          alt="Limitations-of-Standard-Solutions"
          header={"The Limitations of Standard Solutions "}
          text={`Many businesses encounter significant challenges on their
                  digital journey, including performance issues where heavy,
                  costly images and design elements slow down websites,
                  adversely affecting user experience. High hosting charges and
                  the risk of overspending on poorly optimised digital assets
                  pose major cost concerns.<br/><br/> Additionally, generic web builder platforms often lack the
                  flexibility needed to truly distinguish a brand or meet
                  specific business requirements, and there are frequent
                  communication gaps that make it difficult to bridge the divide
                  between a business's vision and what is technologically
                  feasible, adding to the complexity and frustration of creating
                  an effective digital presence.`}
        />
        <TextImageComponent
          img={image3}
          alt="Your-Digital-Development-Journey"
          header={"Why Choose Prevail for Your Digital Development Journey?"}
          text={`Prevail stands out due to our comprehensive, bespoke service offerings. 
                  Our team, consisting of brand identity experts, UI/UX designers, full-stack MERN 
                  developers, and marketing consultants, excels in crafting digital platforms that 
                  are not only visually striking but also highly functional.<br/><br/> 
                  We invest time to understand your unique business needs and vision, 
                  ensuring the final product perfectly aligns with your goals. 
                  Our process is thorough, involving detailed consultations to capture 
                  all necessary content and design preferences to launch your digital 
                  presence effectively.`}
        />

        <Stack mt={{ xs: 6, md: 10 }} px={{ xs: 2, md: 6 }}>
          <Typography
            fontSize={{ xs: "25px", md: "27.7px" }}
            fontWeight="600"
            mb={4}
          >
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
                    <Typography fontWeight="600" color="#1D0D40">
                      {item.title}
                    </Typography>
                    <Typography>{item.desc}</Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>

      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to bottom, #ffffff, rgba(110, 62, 244, 0.1))",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            py: 5,
          }}
        >
          <Box
            px={{ xs: 3, md: 16 }}
            py={{ xs: 3, md: 8 }}
            sx={{
              backgroundColor: "#FCFCFC",
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
    </>
  );
};

export default WebsiteDevelopment;

{
  /* <PainPoint />
<Advantages /> 
<Benefits />
<FooterNew /> */
}
