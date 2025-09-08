import React from "react";
import { Helmet } from "react-helmet";
import {
  Container,
  Grid,
  Typography,
  Stack,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
  Fab,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { FiberManualRecord as FiberManualRecordIcon } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";

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
import Color from "./assets/color-palette.svg?react";
import Money from "./assets/increase-money.svg?react";
import Tag from "./assets/tag.svg?react";
import User from "./assets/users.svg?react";
import Web from "./assets/web.svg?react";
import Search from "../DigitalAccelerator/assets/search.svg?react";


import FooterNew from "../../Footer/FooterNew";
import AppBarNav from "../../Navbar/Appbar";
import styles from "../BrandIdentity/assets/animation.module.css";
import SmoothScrollUp from "../../utils/SmoothScrollUp";
import WebDevWizard from "../../WebDevWizard/WebDevWizard.jsx";


const carouselImages = [
  {
    title: "E-commerce Powerhouse",
    text: "Transform your online store into a high-performance conversion machine with our custom MERN stack development, leveraging MongoDB, Express.js, React, and Node.js for unparalleled speed and scalability.",
    imgPath:
      "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg",
    sectionId: "#shopify",
  },
  {
    title: "Real Estate Platform",
    text: "Comprehensive service package for real estate, featuring SEO-optimised content, responsive design, and admin dashboards.",
    imgPath:
      "https://img.freepik.com/free-photo/real-estate-housing-brokerage-concept_53876-120663.jpg",
    sectionId: "#real-estate",
  },
  {
    title: "Hospitality Platform",
    text: "We create digital experiences for the hospitality sector that are visually stunning and functionally superior.",
    imgPath:
      "https://img.freepik.com/premium-photo/waiter-serving-food-group-friends-restaurant_136401-2187.jpg",
    sectionId: "#hospitality",
  },
];

function EnhancedCarousel() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const maxSteps = carouselImages.length;

  const handleScrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  React.useEffect(() => {
    carouselImages.forEach((image) => {
      const img = new Image();
      img.src = image.imgPath;
    });
  }, []);

  const handleNext = React.useCallback(() => {
    setActiveStep((prev) => (prev + 1) % maxSteps);
  }, [maxSteps]);

  const handleBack = React.useCallback(() => {
    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  }, [maxSteps]);

  const handleDotClick = (step) => {
    setActiveStep(step);
  };

  React.useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [activeStep, isHovered, handleNext]);

  return (
    <Box
      sx={{
        position: "relative",
        height: isMobile ? "70vh" : "85vh",
        width: "100%",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {carouselImages.map((step, index) => (
        <Box
          key={step.title}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundImage: `url(${step.imgPath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === activeStep ? 1 : 0,
            transform: `scale(${index === activeStep ? 1 : 1.05})`,
            transition: "opacity 1.2s ease-in-out, transform 1.2s ease-in-out",
          }}
        />
      ))}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.7) 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          px: { xs: 2, sm: 3, md: 5 },
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          fontWeight="bold"
          gutterBottom
          sx={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
        >
          {carouselImages[activeStep].title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "650px",
            mb: 3,
            fontSize: isMobile ? "1rem" : "1.25rem",
            textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
            px: { xs: 1, sm: 0 },
          }}
        >
          {carouselImages[activeStep].text}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            size={isMobile ? "medium" : "large"}
            onClick={() =>
              handleScrollToSection(carouselImages[activeStep].sectionId)
            }
            sx={{
              borderRadius: "50px",
              px: 4,
              py: 1.5,
              fontSize: isMobile ? "0.8rem" : "1rem",
              textTransform: "none",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              transition: "transform 0.2s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            Learn More
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size={isMobile ? "medium" : "large"}
            onClick={() => handleScrollToSection("#web-dev-wizard")}
            sx={{
              borderRadius: "50px",
              px: 4,
              py: 1.5,
              fontSize: isMobile ? "0.8rem" : "1rem",
              textTransform: "none",
              borderColor: "white",
              color: "white",
              transition: "transform 0.2s ease, background-color 0.2s ease",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "white",
              },
            }}
          >
            Book Now
          </Button>
        </Stack>
      </Box>
      <IconButton
        aria-label="previous slide"
        onClick={handleBack}
        sx={{
          position: "absolute",
          top: "50%",
          left: theme.spacing(isMobile ? 1 : 2),
          transform: "translateY(-50%)",
          bgcolor: "rgba(0,0,0,0.4)",
          color: "#fff",
          "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
          p: isMobile ? 1 : 1.5,
        }}
      >
        <KeyboardArrowLeft fontSize={isMobile ? "medium" : "large"} />
      </IconButton>
      <IconButton
        aria-label="next slide"
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: theme.spacing(isMobile ? 1 : 2),
          transform: "translateY(-50%)",
          bgcolor: "rgba(0,0,0,0.4)",
          color: "#fff",
          "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
          p: isMobile ? 1 : 1.5,
        }}
      >
        <KeyboardArrowRight fontSize={isMobile ? "medium" : "large"} />
      </IconButton>
      <Box
        sx={{
          position: "absolute",
          bottom: theme.spacing(isMobile ? 2 : 3),
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: { xs: 0.5, sm: 1 },
        }}
      >
        {carouselImages.map((_, index) => (
          <IconButton
            key={index}
            aria-label={`go to slide ${index + 1}`}
            onClick={() => handleDotClick(index)}
            sx={{
              p: 0.5,
              color:
                index === activeStep
                  ? theme.palette.primary.main
                  : "rgba(255,255,255,0.6)",
              transition: "color 0.3s",
            }}
          >
            <FiberManualRecordIcon
              sx={{
                fontSize: isMobile ? "12px" : "14px",
                transform: index === activeStep ? "scale(1.3)" : "scale(1)",
                transition: "transform 0.3s",
              }}
            />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}

const WebManagement = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Bespoke Website Solutions for Your Business</title>
        <meta
          name="description"
          content="Tailored Website Solutions to Elevate Your Brand"
        />
      </Helmet>

      <Box sx={{ width: "100%", overflow: "hidden", position: "relative" }}>
        <AppBarNav
          sx={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}
        />

        <EnhancedCarousel />

        <Box>
          <Container maxWidth="xl">
            <Stack>
              <Box ref={ref} py={{ xs: 3, md: 8 }}>
                <Stack
                  className={inView ? styles.textSlideIn : ""}
                  spacing={2}
                  textAlign={"center"}
                  width={{ xs: "100%", md: "75%" }}
                  sx={{ margin: "0 auto" }}
                >
                  <Typography
                    sx={{
                      fontSize: "28px",
                      color: "#1D0D40",
                      fontWeight: "600",
                    }}
                  >
                    Unleash Your Brand&apos;s Potential: Tailored Web
                    Development Solutions
                  </Typography>
                  <Typography sx={{ color: "#505660" }}>
                    In today&apos;s digital landscape, standing out requires
                    more than just an online presence—it demands a tailored web
                    experience that truly reflects your brand&apos;s identity
                    and drives tangible results. At Prevail Agency, we
                    specialize in delivering high-impact web development
                    solutions designed to elevate businesses across various
                    sectors. From e-commerce powerhouses to real estate
                    authorities and hospitality havens, our bespoke services are
                    geared to transform your digital interface and enhance your
                    market presence.
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </Box>

        <div id="hospitality">
          <Box py={10} sx={{ backgroundColor: "#F9FAFC" }}>
            <Container maxWidth="xl">
              <Typography
                fontSize={{ xs: "26px", md: "32px" }}
                sx={{
                  fontWeight: "600",
                  textAlign: "center",
                  mb: 5,
                }}
              >
                Let&apos;s delve deeper into each of these solutions
              </Typography>
              <Stack color="#1D0D40" spacing={4}>
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Grid item xs={12} md={5.7}>
                    <Box sx={{ width: "100%" }}>
                      <img
                        src="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720087059/Hotel-Platform-Development-_yodr5a.avif"
                        alt="Hotel-Platform-Development"
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5.7}>
                    <Stack>
                      <Stack spacing={1.5} mb={3}>
                        <Hospital />
                        <Typography
                          sx={{ fontSize: "24px", fontWeight: "600" }}
                        >
                          Hospitality Haven: Hotel E-commerce Platform
                          Development
                        </Typography>
                        <Typography>
                          Is your hotel website struggling to maximize bookings
                          and drive direct reservations? Our “Hotel E-commerce
                          Platform Development” package provides the tools
                          necessary to transform your website into a powerful
                          booking engine. This package is designed to enhance
                          online visibility, simplify the booking process, and
                          maximize revenue through direct reservations.
                        </Typography>
                      </Stack>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <Stack spacing={1}>
                            <Web />
                            <Typography sx={{ fontWeight: "600" }}>
                              Transform Your Online Presence
                            </Typography>
                            <Typography>
                              Turn your hotel&apos;s website into a powerful
                              booking engine that increases reservations and
                              revenue.
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Stack spacing={1}>
                            <User />
                            <Typography sx={{ fontWeight: "600" }}>
                              Immerse Guests
                            </Typography>
                            <Typography>
                              Showcase your hotel&apos;s ambiance and amenities
                              with captivating photos and virtual tours that
                              entice potential guests.
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Stack spacing={1}>
                            <Money />
                            <Typography sx={{ fontWeight: "600" }}>
                              Maximise Revenue
                            </Typography>
                            <Typography>
                              Create dynamic pricing packages and upselling
                              opportunities to maximise revenue from direct
                              bookings.
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <a
                            href="https://crownstone.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Fab
                              sx={{
                                m: "auto",
                                bgcolor: "primary.main",
                                color: "#fff",
                                height: "100px",
                                width: "100px",
                                textTransform: "capitalize",
                                "&:hover": {
                                  m: "auto",
                                  bgcolor: "primary.main",
                                  color: "#fff",
                                },
                              }}
                            >
                              View
                            </Fab>
                          </a>
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
                    What&apos;s Included
                  </Typography>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1}>
                        <Color />
                        <Typography sx={{ fontWeight: "600" }}>
                          Stunning Visual Design
                        </Typography>
                        <Typography>
                          Immerse potential guests in your hotel experience with
                          captivating photos and virtual tours that showcase
                          your amenities and ambiance.
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1}>
                        <Mobile />
                        <Typography sx={{ fontWeight: "600" }}>
                          Real-Time Booking System
                        </Typography>
                        <Typography>
                          Allow guests to book their stay with ease through a
                          secure and user-friendly online platform, eliminating
                          the need for third-party booking sites.
                        </Typography>
                      </Stack>
                    </Grid>{" "}
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1}>
                        <Tag />
                        <Typography sx={{ fontWeight: "600" }}>
                          Package Management
                        </Typography>
                        <Typography>
                          Create enticing packages with dynamic pricing options
                          to attract different types of guests.
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Stack>
              </Stack>
            </Container>
          </Box>
        </div>

        <div id="real-estate">
          <Box
            py={10}
            sx={{
              backgroundImage:
                "linear-gradient(to bottom, #ffffff, rgba(110, 62, 244, 0.1))",
            }}
          >
            <Container maxWidth="xl">
              <Stack color="#1D0D40" spacing={4}>
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  direction={{ xs: "column-reverse", md: "row" }}
                >
                  <Grid item xs={12} md={5.7}>
                    <Stack>
                      <Stack spacing={1.5} mb={3}>
                        <Typography
                          sx={{ fontSize: "24px", fontWeight: "600" }}
                        >
                          Real Estate Authority: Tailored Web Development for
                          Agencies
                        </Typography>
                        <Typography>
                          Real estate agencies looking to effectively showcase
                          their listings and attract potential clients will find
                          our dedicated web development package indispensable.
                          Designed to establish your agency as a beacon of
                          professionalism and trust, this package includes
                          everything needed to engage potential clients and
                          capture valuable leads.
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
                              Showcase your properties beautifully and make it
                              easy for buyers and renters to find their dream
                              home.
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Stack spacing={1}>
                            <Bag />
                            <Typography sx={{ fontWeight: "600" }}>
                              Capture Valuable Leads
                            </Typography>
                            <Typography>
                              Integrate strategic lead generation tools to
                              nurture client relationships and close more deals.
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={5.7} mt={{ xs: 4, md: 0 }}>
                    <Box sx={{ width: "100%" }}>
                      <img
                        src="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720087059/Real-Estate-Authority_akxsy5.avif"
                        alt="Real-Estate-Authority"
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
                    What&apos;s Included
                  </Typography>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1}>
                        <Apartment_Small />
                        <Typography sx={{ fontWeight: "600" }}>
                          Sophisticated Listings Platform
                        </Typography>
                        <Typography>
                          Showcase your properties in a stunning and
                          user-friendly format, complete with high-resolution
                          photos and detailed descriptions.
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1}>
                        <Magnifier />
                        <Typography sx={{ fontWeight: "600" }}>
                          Advanced Search Functionality
                        </Typography>
                        <Typography>
                          Allow potential buyers and renters to easily find
                          their dream property with powerful and intuitive
                          search features.
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1}>
                        <Call />
                        <Typography sx={{ fontWeight: "600" }}>
                          Lead Generation Tools
                        </Typography>
                        <Typography>
                          Capture valuable leads with strategically-placed
                          contact forms and call-to-action buttons.
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                    <Grid item xs={12} md={4}>
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
                    </Grid>
                  </Grid>
                </Stack>
              </Stack>
            </Container>
          </Box>
        </div>

        <div id="shopify">
          <Box
            py={10}
            sx={{
              backgroundImage:
                "linear-gradient(to bottom, #ffffff, rgba(238,249,255, 0.2))",
            }}
          >
            <Container maxWidth="xl">
              <Stack color="#1D0D40" spacing={4}>
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Grid item xs={12} md={6}>
                    <Stack>
                      <Stack spacing={1.5} mb={3}>
                        <Browse />
                        <Typography
                          fontSize={{ xs: "20px", md: "24px" }}
                          sx={{ fontWeight: "600" }}
                        >
                          E-commerce Powerhouse: MERN Stack Web Development
                          Service
                        </Typography>
                        <Typography>
                          Are you an e-commerce business struggling with low
                          conversions, slow load times, or limited customization
                          options? Our &quot;MERN Stack Web Development&quot;
                          Service delivers a powerful, scalable solution built
                          with cutting-edge JavaScript technologies. We create
                          lightning-fast, fully customizable online stores that
                          handle high traffic volumes while providing seamless
                          user experiences across all devices.
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
                              Harness the power of React&apos;s dynamic UI
                              components and Node.js&apos;s robust backend to
                              create an online store that not only attracts
                              visitors but converts them into repeat customers
                              through exceptional performance and user
                              experience.
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
                              Implement intelligent product recommendations,
                              real-time search functionality, and streamlined
                              checkout processes powered by MongoDB&apos;s
                              flexible database structure and Express.js&apos;s
                              efficient routing system.
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={5} marginTop={{ xs: 4, md: 0 }}>
                    <Box sx={{ width: "100%" }}>
                      <img
                        src="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720087060/Shopify-Web-Design_zfi35h.avif"
                        alt="Shopify-Web-Design"
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
                    What&apos;s Included
                  </Typography>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1}>
                        <Account />
                        <Typography sx={{ fontWeight: "600" }}>
                          Conversion-Focused Design
                        </Typography>
                        <Typography>
                          We build interactive, responsive interfaces using
                          React components that load instantly, reduce bounce
                          rates, and create intuitive shopping experiences that
                          guide customers naturally through your sales funnel.
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1}>
                        <Mobile />
                        <Typography sx={{ fontWeight: "600" }}>
                          Mobile-First Development
                        </Typography>
                        <Typography>
                          Your MERN-powered store will feature progressive web
                          app capabilities, offline functionality, and optimized
                          performance that delivers native app-like experiences
                          on any device or network condition.
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1}>
                        <Comment />
                        <Typography sx={{ fontWeight: "600" }}>
                          Ongoing Support
                        </Typography>
                        <Typography>
                          Beyond deployment, we provide continuous monitoring,
                          performance optimization, security updates, and
                          feature enhancements to keep your MERN stack
                          application running at peak efficiency.
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1}>
                        <Monitor />
                        <Typography sx={{ fontWeight: "600" }}>
                          Seamless Integration
                        </Typography>
                        <Typography>
                          Connect your store with any third-party service
                          through RESTful APIs and webhooks, from payment
                          processors and shipping providers to marketing
                          automation tools and analytics platforms.
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1}>
                        <Search />
                        <Typography sx={{ fontWeight: "600" }}>
                          SEO Optimization
                        </Typography>
                        <Typography>
                          We implement server-side rendering with Next.js,
                          structured data markup, and optimized meta tags to
                          ensure search engines can crawl, index, and rank your
                          products effectively, driving organic traffic growth.
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Stack>
              </Stack>
            </Container>
          </Box>
        </div>
        <div id="web-dev-wizard">
          <WebDevWizard />
        </div>
        <Box py={7}>
          <Box
            py={{ xs: 8, md: 11 }}
            px={{ xs: 2, md: 10 }}
            width={{ xs: "90%", md: "80%" }}
            sx={{
              margin: "0 auto",
              textAlign: "center",
              backgroundColor: "#ffffff",
              border: "2px solid #6E3EF4",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(110, 62, 244, 0.1)",
              color: "#350079",
            }}
          >
            <Typography
              fontSize={{ xs: "30px", md: "38px" }}
              sx={{ fontWeight: "700", color: "#350079" }}
            >
              Ready to unleash your brand&apos;s potential?
            </Typography>
            <Typography
              fontSize={"20px"}
              width={{ xs: "100%", md: "70%" }}
              margin={"0 auto"}
              mt={2}
              sx={{ color: "#4a4a4a" }}
            >
              Contact Prevail today for a free consultation and embark on a
              journey towards digital excellence.
            </Typography>
          </Box>
        </Box>

        <SmoothScrollUp />
        <FooterNew />
      </Box>
    </>
  );
};

export default WebManagement;
