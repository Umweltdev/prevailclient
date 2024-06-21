import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import image1 from "./assets/image148.png";
import image2 from "./assets/image105.png";
import image3 from "./assets/image153.png";
import image4 from "./assets/image107.png";
import image5 from "./assets/image108.png";
import image6 from "./assets/image109.png";
import ImageTextService from "./ImageTextService";
import TextImageService from "./TextImageService";

const MainPage = () => {
  return (
    <Grid
      sx={{
        pt: "176px",
        // background: "linear-gradient(135deg, #DDD4EF, #F9FAFC, white)",
        background: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
        "@media (max-width: 767px)": {
          pt: "168px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          textAlign: "center",
          width: "600px",
          margin: "0 auto",
          "@media (max-width: 767px)": {
            width: "90vw",
            height: "unset",
          },
        }}
      >
        <Typography
          sx={{ color: "#6E3EF4", fontSize: "24px", fontWeight: "400;" }}
        >
          Services
        </Typography>
        <Typography
          sx={{ color: "#1D0D40", fontSize: "38px", fontWeight: 500 }}
        >
          The Ultimate products we serve
        </Typography>
        <Typography
          sx={{
            fontSize: "18px;",
            fontWeight: "400",
            color: "505660",
            gap: "44px",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        >
          Prevail is a cutting-edge marketing agency specialising in redefining
          how businesses navigate the digital landscape.
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "80px 0",
          display: "flex",
          flexDirection: "column",
          gap: "44px",
          "@media (max-width: 600px)": {
            padding: "131px 0",
            gap: "1vh",
          },
        }}
      >
        <ImageTextService
          imageUrl={image1}
          textHeader={"Branding"}
          text="Our “Brand Identity Package” service is the foundation for creating a lasting impression. We collaborate closely with you to define their unique brand identity, crafting eye-catching logos and compelling marketing collateral."
        />
        <TextImageService
          imageUrl={image2}
          textHeader={"Website Development"}
          text="Discover the power of bespoke web solutions with Prevail and elevate your brand to new heights in the digital landscape. Transform, engage, and succeed effortlessly."
        />
        <ImageTextService
          imageUrl={image3}
          textHeader={"Custom Website Development"}
          text="Desire ownership over your digital identity and wish to convey your brand's story authentically and vividly, then our “custom website development” is perfect for you."
        />
        <TextImageService
          imageUrl={image4}
          textHeader={"Search Engine Marketing (SEM)"}
          text="Our “Search Engine Marketing” service offer tailored solutions to boost online visibility and engagement to support you throughout the dynamic digital realm."
        />
        <ImageTextService
          imageUrl={image5}
          textHeader={"Marketing Price Displacement (MPD)"}
          text="Unlock your business’s potential with our “Marketing Price Displacement” API. Harness advanced pricing strategies and yield management to optimise marketing spend, automate adjustments, and boost ROI.  "
        />
        <TextImageService
          imageUrl={image6}
          textHeader={"Digital Accelerator"}
          text="Our “Digital Accelerator” bundle integrate cutting-edge website design, bespoke brand identity, and strategic SEO services to boost visibility engage customers, and enhance your digital footprint."
        />
      </Box>
    </Grid>
  );
};

export default MainPage;
