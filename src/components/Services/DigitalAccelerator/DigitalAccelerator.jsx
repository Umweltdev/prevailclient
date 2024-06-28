import { Helmet } from "react-helmet";
import React from "react";
import FooterNew from "../../Footer/FooterNew";
import HeroComponent from "../ReusedComponenets/HeroComponent";
import AppBarNav from "../../Navbar/Appbar";
import { Container, Grid, Typography, Stack, Box, Button } from "@mui/material";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import rocket from "./assets/rocket.png";
import "./styles.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextImageComponent from "../ReusedComponenets/TextImageComponent";
import { useNavigate } from "react-router-dom";
import AccordionUsage from "./Accordion";
import ImageTextComponent from "../ReusedComponenets/ImageTextComponent";
import EmpowerBussiness from "./EmpowerBussiness";

const DigitalAccelerator = () => {
  const navigate = useNavigate();
  const Mobile = useMediaQuery("(min-width:1249px)");

  const signup = () => {
    navigate("/signup")
  }

  return (
    <>
    <Helmet>
        <title>Unlock Your Digital Potential with Prevail's Digital Accelerator Bundle</title>
        <meta
          name="description"
          content="Prevail's Digital Accelerator Bundle Boosts Digital Visibility and Presige"
        />
      </Helmet>
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* <HeroSection header="Digital Accelerator Bundle Page " /> */}
      <AppBarNav color="#000" />
      <HeroComponent title={"Digital Accelerator Bundle Page"} />
      <TextImageComponent
        img={image1}
        header={
          "Propel Your Business with Prevail’s Digital Accelerator Bundle "
        }
        text={`Attention SMEs and local businesses: in the rapidly evolving
              digital landscape, establishing a competitive edge is not just
              beneficial – it's essential. Imagine propelling your business to
              the forefront with a cutting-edge website, a brand identity that
              captivates your audience, and a search engine strategy that puts
              you in front of your audience. <br /><br /> This scenario transforms 
              from aspiration to reality with Prevail’s “Digital Accelerator” bundle. 
              This package isn’t just a collection of services – it's your strategic 
              gateway to a cohesive, impactful and cost-effective digital presence.`}
      />
      <ImageTextComponent
        img={image2}
        header={"Understanding Your Challenges"}
        text={`We recognise the obstacles you face in a highly competitive
              digital marketplace. Despite your hard work and dedication, your
              digital presence might not mirror the passion you pour into your
              business, much like a stunning storefront tucked away in a
              secluded alley, unseen by potential customers. <br/><br/>Perhaps you’re grappling with an outdated website, or your brand
              doesn’t resonate with your intended audience, causing you to miss
              crucial opportunities to connect and engage.`}
      />

      <Container
        maxWidth="lg"
        sx={{
          py: 5,
        }}
      >
        <Grid container spacing={{ xs: 4, md: 10 }}>
          <Grid item xs={12} md={5.5}>
            <Box
              px={{ xs: 2, md: 6 }}
              py={{ xs: 5, md: 8 }}
              sx={{
                backgroundColor: "#0D0E30",
                borderRadius: "7px",
              }}
            >
              <Typography
                fontSize={{ xs: "28px", md: "32px" }}
                sx={{
                  color: "white",
                }}
              >
                The launch of our “Digital Accelerator” bundle is tailored
                specifically for SMEs and local businesses seeking to make a
                significant impact online. 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6.5}>
            <AccordionUsage />
          </Grid>
        </Grid>
      </Container>
      <EmpowerBussiness/>

      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to bottom, #ffffff, rgba(110, 62, 244, 0.3))",
        }}
        py={{ xs: 5, md: 9 }}
      >
        <Container maxWidth="lg" sx={{}}>
          <Box
            sx={{
              backgroundColor: "#FCFCFC",
              borderRadius: "8px",
            }}
          >
            <Stack
              spacing={{ xs: 1.8, md: 2.5 }}
              width={{ xs: "100%", md: "65%" }}
              sx={{
                textAlign: "center",
                margin: "0 auto",
                color: "#2A5369",
                fontSize: "16px",
              }}
              p={{ xs: 2, md: 6 }}
              py={{ xs: 1, md: 6 }}
            >
              <Typography
                sx={{
                  color: "#1D0D40",
                  lineHeight: "39px",
                  fontWeight: "600",
                }}
                fontSize={{ xs: "28px", md: "38px" }}
              >
                Why Choose Prevail’s Digital Accelerator Bundle? 
              </Typography>
              <Typography>
              By integrating these essential digital services into one comprehensive package, 
              Prevail not only simplifies the digital transformation process but ensures that 
              every aspect of your online presence is synchronised and powerful. This approach 
              saves you time and resources and provides you with a competitive edge that is 
              critical in today’s digital age.
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#14154C",
        }}
        id='DAB_call_to_action'
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={10}
            sx={{
              marginTop: 0,
            }}
          >
            <Grid item xs={12} md={7} sx={{ paddingTop: "0 !important" }}>
              <Stack spacing={4} py={8}>
                <Box
                  sx={{ borderRadius: "5px" }}
                  // px={2}
                  py={1}
                  alignSelf={"start"}
                >
                  <Typography
                    color={"#6E3EF4"}
                    textAlign={{ xs: "center", md: "left" }}
                    fontSize={"18px"}
                  >
                    Take advantage of the opportunity to transform your business!
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: "32px",
                    lineHeight: "44px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Save up to 70% on Prevail's Digital Accelerator Bundle now and
                  focus on what matters most
                </Typography>

                <Typography color={"#DCCCFC"}>
                  Increasing your visibility, enhancing your brand identity, and
                  building a robust online presence that drives success. Act
                  now—your digital transformation awaits! 
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    backgroundColor: "#6E3EF4",
                    borderRadius: "100px",
                    alignSelf: "start",
                    py: 1,
                    px: 4,
                  }}
                  onClick={signup}
                >
                  Sign up
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5} sx={{ paddingTop: "0 !important" }}>
              <Box
                sx={{
                  width: "100%",
                  // height: "100%",
                }}
              >
                <img
                  src={rocket}
                  style={{
                    width: "100%",
                    // height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <FooterNew />
    </div>
    </>
  );
};

export default DigitalAccelerator;
