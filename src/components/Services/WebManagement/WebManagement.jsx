import React from "react";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import PainPoint from "./PainPoint";
import Offering from "./Offering";
import FooterNew from "../../Footer/FooterNew";
import AppBarOne from "../../Navbar/AppbarOne";
import Packages from "./Packages";
import {
  Container,
  Grid,
  Typography,
  Stack,
  Box,
  Button,
  SvgIcon,
} from "@mui/material";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import nurse from "./assets/nurse.png";

import Browse from "./assets/basket.svg?react";
import Hospital from "./assets/hospital.svg?react";
import House from "./assets/house.svg?react";
import Cart from "./assets/cart.svg?react";
import Cash from "./assets/cash.svg?react";
import Monitor from "./assets/monitor.svg?react";
import Account from "./assets/account.svg?react";
import Comment from "./assets/comment.svg?react";
import Mobile from "./assets/mobile.svg?react";
import Bag from "./assets/bag.svg?react";
import Apartment from "./assets/apartment.svg?react";
import Magnifier from "./assets/magnifier.svg?react";
import Call from "./assets/call.svg?react";
import Apartment_Small from "./assets/apartment_small.svg?react";
import Storage from "./assets/storage.svg?react";
import Speaker from "./assets/speaker.svg?react";

import Search from "../DigitalAccelerator/assets/search.svg?react";
import HeroComponent from "../ReusedComponenets/HeroComponent";
import AppBarNav from "../../Navbar/Appbar";

const WebManagement = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* <DrawerAppBarWhite /> */}
      <AppBarNav color="#000" />
      <HeroComponent  title="Website Development" />
      <Box>
        <Container maxWidth="lg">
          <Stack>
            {/* first section */}
            <Box>
              <Stack
                spacing={2}
                textAlign={"center"}
                sx={{
                  width: "65%",
                  margin: "0 auto",
                  py: 8,
                }}
              >
                <Typography
                  sx={{ fontSize: "28px", color: "#1D0D40", fontWeight: "600" }}
                >
                  Unleash Your Brand's Potential: Tailored Web Development
                  Solutions 
                </Typography>
                <Typography sx={{ color: "#505660" }}>
                  In today's digital landscape, standing out requires more than
                  just an online presence—it demands a tailored web experience
                  that truly reflects your brand's identity and drives tangible
                  results. At Prevail Agency, we specialize in delivering
                  high-impact web development solutions designed to elevate
                  businesses across various sectors. From e-commerce powerhouses
                  to real estate authorities and hospitality havens, our bespoke
                  services are geared to transform your digital interface and
                  enhance your market presence. 
                </Typography>
              </Stack>
            </Box>

            <Grid container justifyContent={"space-between"}>
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <img
                    src={image1}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={4.2}>
                <Stack spacing={2.5}>
                  <Stack spacing={1} pr={10}>
                    <Browse />
                    <Typography sx={{ fontWeight: "600" }}>
                      E-commerce Powerhouse
                    </Typography>
                    <Typography>
                      Shopify Web Design Service Transform your online store
                      into a conversion machine with our custom Shopify
                      development.
                    </Typography>
                  </Stack>
                  <Stack spacing={1} pr={10}>
                    <Hospital />
                    <Typography sx={{ fontWeight: "600" }}>
                      Hospitality Haven
                    </Typography>
                    <Typography>
                      Hotel E-commerce Platform Development Turn your hotel's
                      online presence into a powerful booking engine.
                    </Typography>
                  </Stack>
                  <Stack spacing={1} pr={10}>
                    <House />
                    <Typography sx={{ fontWeight: "600" }}>
                      Real Estate Authority
                    </Typography>
                    <Typography>
                      Tailored Web Development for Agencies Attract and convert
                      clients with a website that exudes professionalism and
                      trust.
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* secondSectio */}
      <Box
        mt={10}
        py={5}
        sx={{
          backgroundImage:
            "linear-gradient(to bottom, #ffffff, rgba(238,249,255, 0.2))",
        }}
      >
        <Container maxWidth="lg">
          <Stack color="#1D0D40" spacing={4}>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Let's delve deeper into each of these solutions
            </Typography>

            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid item xs={12} md={6}>
                <Stack>
                  <Stack spacing={1.5} mb={3}>
                    <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
                      E-commerce Powerhouse: Shopify Web Design Service 
                    </Typography>
                    <Typography>
                      Are you an e-commerce business struggling with low
                      conversions and a generic online store? Our “Shopify Web
                      Design” Service offers a comprehensive solution. This
                      service focuses on converting visitors into loyal
                      customers through a captivating, user-friendly online
                      store optimized for maximum engagement and sales. 
                    </Typography>
                  </Stack>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <Cart />
                        <Typography sx={{ fontWeight: "600" }}>
                          Become an E-commerce Powerhouse
                        </Typography>
                        <Typography>
                          Convert visitors into loyal customers with a
                          captivating and user-friendly online store. 
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <Cash />
                        <Typography sx={{ fontWeight: "600" }}>
                          Effortlessly Guide Visitors
                        </Typography>
                        <Typography>
                          Design a seamless buying journey that maximises your
                          sales potential. 
                        </Typography>
                      </Stack>
                    </Grid>{" "}
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <Monitor />
                        <Typography sx={{ fontWeight: "600" }}>
                          Streamline Operations
                        </Typography>
                        <Typography>
                          Integrate essential tools like CRM systems, payment
                          gateways, and inventory management software for a
                          smooth operation. 
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>

              <Grid item xs={12} md={5}>
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
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Stack>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "600",
                  mb: 3,
                }}
              >
                What's Included
              </Typography>
              <Grid container spacing={5}>
                <Grid item xs={12} md={4} sx={{}}>
                  <Stack spacing={1}>
                    <Account />
                    <Typography sx={{ fontWeight: "600" }}>
                      Conversion-Focused Design
                    </Typography>
                    <Typography>
                      We prioritise user experience, creating a website that
                      guides visitors towards your products and increases
                      conversion rates. 
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4} sx={{}}>
                  <Stack spacing={1}>
                    <Mobile />
                    <Typography sx={{ fontWeight: "600" }}>
                      Mobile-First Development
                    </Typography>
                    <Typography>
                      With mobile shopping booming, your store will be
                      flawlessly optimised for any device, ensuring a seamless
                      experience for all customers. 
                    </Typography>
                  </Stack>
                </Grid>{" "}
                <Grid item xs={12} md={4}>
                  <Stack spacing={1}>
                    <Comment />
                    <Typography sx={{ fontWeight: "600" }}>
                      Ongoing Support
                    </Typography>
                    <Typography>
                      Our dedication doesn't end at launch. We provide ongoing
                      support to ensure your store continues to thrive.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4} sx={{}}>
                  <Stack spacing={1}>
                    <Monitor />
                    <Typography sx={{ fontWeight: "600" }}>
                      Seamless Integration
                    </Typography>
                    <Typography>
                      Integrate essential tools like CRM systems, payment
                      gateways, and inventory management software for a smooth
                      operation. 
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4} sx={{}}>
                  <Stack spacing={1}>
                    <Search />
                    <Typography sx={{ fontWeight: "600" }}>
                      SEO Optimization
                    </Typography>
                    <Typography>
                      We optimise your store for search engines, helping
                      potential customers find you organically and drive more
                      traffic.
                    </Typography>
                  </Stack>
                </Grid>{" "}
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* thirdSection */}
      <Box
        mt={10}
        py={5}
        pb={10}
        sx={{
          backgroundImage:
            "linear-gradient(to bottom, #ffffff, rgba(110, 62, 244, 0.1))",
        }}
      >
        <Container maxWidth="lg">
          <Stack color="#1D0D40" spacing={4}>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid item xs={12} md={5.5}>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <img
                    src={nurse}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <Stack>
                  <Stack spacing={1.5} mb={3}>
                    <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
                      Real Estate Authority: Tailored Web Development for
                      Agencies 
                    </Typography>
                    <Typography>
                      Real estate agencies looking to effectively showcase their
                      listings and attract potential clients will find our
                      dedicated web development package indispensable. Designed
                      to establish your agency as a beacon of professionalism
                      and trust, this package includes everything needed to
                      engage potential clients and capture valuable leads. 
                    </Typography>
                  </Stack>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <House />
                        <Typography sx={{ fontWeight: "600" }}>
                          Become a Real Estate Authority
                        </Typography>
                        <Typography>
                          Create a website that exudes professionalism and
                          trust, attracting more clients. 
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <Apartment />
                        <Typography sx={{ fontWeight: "600" }}>
                          Engage Potential Clients
                        </Typography>
                        <Typography>
                          Showcase your properties beautifully and make it easy
                          for buyers and renters to find their dream home.
                        </Typography>
                      </Stack>
                    </Grid>{" "}
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <Bag />
                        <Typography sx={{ fontWeight: "600" }}>
                          Capture Valuable Leads
                        </Typography>
                        <Typography>
                          Integrate strategic lead generation tools to nurture
                          client relationships and close more deals.
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>
            </Grid>

            <Stack>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "600",
                  mb: 3,
                }}
              >
                What's Included
              </Typography>
              <Grid container spacing={5}>
                <Grid item xs={12} md={4} sx={{}}>
                  <Stack spacing={1}>
                    <Apartment_Small />
                    <Typography sx={{ fontWeight: "600" }}>
                      Sophisticated Listings Platform
                    </Typography>
                    <Typography>
                      Showcase your properties in a stunning and user-friendly
                      format, complete with high-resolution photos and detailed
                      descriptions. 
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4} sx={{}}>
                  <Stack spacing={1}>
                    <Magnifier />
                    <Typography sx={{ fontWeight: "600" }}>
                      Advanced Search Functionality
                    </Typography>
                    <Typography>
                      Allow potential buyers and renters to easily find their
                      dream property with powerful and intuitive search
                      features. 
                    </Typography>
                  </Stack>
                </Grid>{" "}
                <Grid item xs={12} md={4}>
                  <Stack spacing={1}>
                    <Call />
                    <Typography sx={{ fontWeight: "600" }}>
                      Lead Generation Tools
                    </Typography>
                    <Typography>
                      Capture valuable leads with strategically-placed contact
                      forms and call-to-action buttons. 
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4} sx={{}}>
                  <Stack spacing={1}>
                    <Storage />
                    <Typography sx={{ fontWeight: "600" }}>
                      Seamless Integration
                    </Typography>
                    <Typography>
                      Integrate with popular MLS and CRM platforms for
                      effortless data management and automation. 
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4} sx={{}}>
                  <Stack spacing={1}>
                    <Speaker />
                    <Typography sx={{ fontWeight: "600" }}>
                      Content Marketing Strategy
                    </Typography>
                    <Typography>
                      Attract organic traffic and establish your agency as a
                      thought leader with SEO-focused content
                    </Typography>
                  </Stack>
                </Grid>{" "}
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <FooterNew />
    </div>
  );
};

export default WebManagement;
