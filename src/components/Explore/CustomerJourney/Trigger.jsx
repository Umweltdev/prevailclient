import React from "react";
//import DrawerAppBarWhite from "../../Navbar/Appbar";
//import PainPoint from "./PainPoints";
//import Advantages from "./Advantages";
//import Benefits from "./Benefits";
//import Footer from "../../Footer/Footer";
//import FooterNew from "../../Footer/FooterNew";
//import HeroComponent from "../ReusedComponenets/HeroComponent";
import AppBarNav from "../../Navbar/Appbar";
import { Container, Grid, Typography, Stack, Box, Button } from "@mui/material";
import image1 from "../CJ/Trigger-Phase.webp";
import image2 from "../CJ/Initial-Consideration.webp";
import image3 from "../CJ/Active-Evaluation.webp";
import image4 from "../CJ/Purchasing.webp";
import image5 from "../CJ/Special-Offer.webp";

const Trigger = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <AppBarNav color="#000" />

      {/* <HeroComponent title="Custom Website Development" /> */}
      <Container
        maxWidth="lg"
        sx={{
          py: 5,
        }}
      >
        <Stack spacing={{ xs: 7, md: 12 }}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={6}>
              <Stack spacing={3} color={"#505660"}>
                <Typography
                  fontSize={{ xs: "24px", md: "28px" }}
                  sx={{
                    fontSize: "28px",
                    color: "#1D0D40",
                    fontWeight: "600",
                  }}
                >
                  Trigger Phase: Understand and Engage
                </Typography>

                <Typography>
                Every customer's journey begins with a trigger – the realisation of a need or desire. At Prevail, we know how important it is for your business to truly grasp the challenges and emotional factors that drive customer interest in what you have to offer. {" "}
                </Typography>
                <Typography>
                By looking at how people interact with your online presence, such as your website performance, customer interaction, plus organic and paid traffic, we can help you gain insights into what your customers like and don't like.
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                mt={{ xs: 4, md: 0 }}
                sx={{
                  width: "100%",
                }}
              >
                <img
                  src={image1}
                  alt="Trigger-Phase"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    // height: "100%",
                    objectFit: "cover",
                  }}
                  className="imagee"
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
              <Box
                mt={{ xs: 4, md: 0 }}
                sx={{
                  width: "100%",
                  // height: "100%",
                }}
              >
                <img
                  src={image2}
                  alt="Initial-Consideration"
                  style={{
                    width: "100%",
                    // height: "100%",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                  className="imagee"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Stack spacing={3} color={"#505660"}>
                <Typography
                  fontSize={{ xs: "24px", md: "28px" }}
                  sx={{
                    color: "#1D0D40",
                    fontWeight: "600",
                  }}
                >
                  Initial Consideration: Establish Brand Presence
                </Typography>
                <Typography>
                Once potential customers recognize their needs, they enter the initial consideration phase, where they start thinking about brands that might meet these needs. Creating and maintaining a consistent brand presence across all digital touchpoints is crucial. 
                </Typography>
                {/* <Typography>
                  Additionally, generic web builder platforms often lack the
                  flexibility needed to truly distinguish a brand or meet
                  specific business requirements, and there are frequent
                  communication gaps that make it difficult to bridge the divide
                  between a business's vision and what is technologically
                  feasible, adding to the complexity and frustration of creating
                  an effective digital presence.  
                </Typography> */}
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
                  fontSize={{ xs: "24px", md: "28px" }}
                  sx={{
                    fontSize: "28px",
                    color: "#1D0D40",
                    fontWeight: "600",
                  }}
                >
                  Active Evaluation: Showcase and Compare
                </Typography>

                <Typography>
                During this, customers actively look around, just like window-shopping – comparing different brands 
                for what they offer, and what is the best value for their money. At Prevail, our “Website Production” 
                service ensures that your online presence is not only striking but also informative and user-friendly.{" "}
                </Typography>
                <Typography>
                Your website serves as your digital storefront, providing extensive product information, customer testimonials, blogs, and FAQs. 
                Alongside, our SEM strategies, particularly pay-per-click (PPC) advertising, play a vital 
                role by placing targeted ads that attract and engage potential customers who are actively seeking solutions. 
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                mt={{ xs: 4, md: 0 }}
                sx={{
                  width: "100%",
                }}
              >
                <img
                  src={image3}
                  alt="Active-Evaluation"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    // height: "100%",
                    objectFit: "cover",
                  }}
                  className="imagee"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
              <Box
                mt={{ xs: 4, md: 0 }}
                sx={{
                  width: "100%",
                  // height: "100%",
                }}
              >
                <img
                  src={image4}
                  alt="Purchasing"
                  style={{
                    width: "100%",
                    // height: "100%",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                  className="imagee"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Stack spacing={3} color={"#505660"}>
                <Typography
                  fontSize={{ xs: "24px", md: "28px" }}
                  sx={{
                    color: "#1D0D40",
                    fontWeight: "600",
                  }}
                >
                  Purchasing: Seamless Conversion 
                </Typography>
                <Typography>
                As customers make their final purchasing decisions, it’s essential that this process is seamless. Prevail’s 
                “Brand Identity Package” service distinguishes your brand, ensuring it stands out. 
                Our “Search Engine Marketing” service targets the right demographics on platforms like Google and Bing,
                 while our “Website Production” services keep your website attractive and user-friendly.  

                </Typography>
                <Typography>
                We are excited to offer our “Digital Accelerator” bundle at a significant value, 
                integrating these key services to boost your digital marketing efforts comprehensively. 
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
                  fontSize={{ xs: "24px", md: "28px" }}
                  sx={{
                    fontSize: "28px",
                    color: "#1D0D40",
                    fontWeight: "600",
                  }}
                >
                  Special Offer: The Digital Accelerator Bundle 
                </Typography>

                <Typography>
                Take advantage of our current promotion – the “Digital Accelerator” bundle, which combines our leading services to enhance your digital presence significantly. Available at a substantial discount of up to 70%, this bundle is designed to make your business shine online and attract more customers efficiently.
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                mt={{ xs: 4, md: 0 }}
                sx={{
                  width: "100%",
                }}
              >
                <img
                  src={image5}
                  alt="Special-Offer"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    // height: "100%",
                    objectFit: "cover",
                  }}
                  className="imagee"
                />
              </Box>
            </Grid>
          </Grid>
        </Stack>

      </Container>
    </div>
  );
};

export default Trigger;

{
  /* <PainPoint />
<Advantages /> 
<Benefits />
<FooterNew /> */
}
