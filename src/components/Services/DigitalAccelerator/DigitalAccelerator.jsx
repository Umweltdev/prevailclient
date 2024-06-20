import React from "react";
import FooterNew from "../../Footer/FooterNew";
import HeroSection from "../BrandIdentity/HeroSection";
import { Container, Grid, Typography, Stack, Box, Button } from "@mui/material";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import rocket from "./assets/rocket.png";

import AccordionUsage from "./Accordion";

const DigitalAccelerator = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <HeroSection header="Digital Accelerator Bundle Page " />
      <Stack>
        <Stack
          direction="row"
          spacing={10}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack
            pl={16}
            pr={6}
            spacing={2}
            sx={{
              width: "50%",
            }}
          >
            <Typography
              sx={{
                fontSize: "28px",
                color: "#1D0D40",
                fontWeight: "600",
                lineHeight: "30px",
              }}
            >
              Propel Your Business with Prevail’s Digital Accelerator Bundle 
            </Typography>
            <Typography
              sx={{
                color: "#505660",
              }}
            >
              Attention SMEs and local businesses: in the rapidly evolving
              digital landscape, establishing a competitive edge is not just
              beneficial – it's essential. Imagine propelling your business to
              the forefront with a cutting-edge website, a brand identity that
              captivates your audience, and a search engine strategy that puts
              you in front of your audience.  
            </Typography>
            <Typography>
              With Prevail’s “Digital Accelerator” bundle, this scenario
              transforms from aspiration to actuality. This package isn’t just a
              collection of services – it's your strategic gateway to a
              cohesive, impactful and cost-effective digital presence.  
            </Typography>
          </Stack>

          <Box width={"50%"}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={image1}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Stack>

        <Stack
          direction="row"
          spacing={10}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box width={"50%"}>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <img
                src={image2}
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
          <Stack
            pr={16}
            pl={6}
            spacing={2}
            sx={{
              width: "50%",
            }}
          >
            <Typography
              sx={{
                fontSize: "28px",
                color: "#1D0D40",
                fontWeight: "600",
                lineHeight: "30px",
              }}
            >
              Understanding Your Challenges
            </Typography>
            <Typography
              sx={{
                color: "#505660",
              }}
            >
              We recognise the obstacles you face in a highly competitive
              digital marketplace. Despite your hard work and dedication, your
              digital presence might not mirror the passion you pour into your
              business, much like a stunning storefront tucked away in a
              secluded alley, unseen by potential customers.  
            </Typography>
            <Typography>
              Perhaps you’re grappling with an outdated website, or your brand
              doesn’t resonate with your intended audience, causing you to miss
              crucial opportunities to connect and engage.
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Container
        maxWidth="lg"
        sx={{
          py: 12,
        }}
      >
        <Grid container spacing={10}>
          <Grid item xs={12} md={5.5}>
            <Box
              sx={{
                backgroundColor: "#0D0E30",
                borderRadius: "7px",
                py: 8,
                px: 6,
              }}
            >
              <Typography
                sx={{
                  fontSize: "32px",
                  lineHeight: "48px",
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

      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to bottom, #ffffff, rgba(110, 62, 244, 0.4))",
            
          py: 12,
        }}
      >
        <Container maxWidth="lg" sx={{}}>
          <Box
            sx={{
              backgroundColor: "#FCFCFC",
              borderRadius: "8px",
            }}
          >
            <Stack
              spacing={2.5}
              sx={{
                p: 6,
                width: "63%",
                textAlign: "center",
                margin: "0 auto",
                color: "#2A5369",
                fontSize: "16px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "38px",
                  color: "#1D0D40",
                  lineHeight: "39px",
                  fontWeight: "600"
                }}
              >
                Why Choose Prevail’s Digital Accelerator Bundle? 
              </Typography>
              <Typography>
                By integrating these essential digital services into one
                comprehensive package, Prevail not only simplifies the digital
                transformation process but ensures that every aspect of your
                online presence is synchronised and powerful.{" "}
              </Typography>
              <Typography>
                This approach not only saves you time and resources but also
                provides you with a competitive edge that is critical in today’s
                digital age. Connect with us today to take the first step
                towards digital excellence and business success. 
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#14154C",
        }}
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
                  sx={{ backgroundColor: "#6E3EF4", borderRadius: "5px" }}
                  px={2}
                  py={1}
                  alignSelf={"start"}
                >
                  <Typography color={"#FFFFFF"}>
                    Don't miss out on the opportunity to transform your
                    business!
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
                    px: 4
                  }}
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
  );
};

export default DigitalAccelerator;
