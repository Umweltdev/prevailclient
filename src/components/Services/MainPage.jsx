import { Box, Grid, Typography } from "@mui/material";
import React from "react";
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
            gap: "7vh",
          },
        }}
      >
        <ImageTextService
          imageUrl="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088563/Branding_trrcgh.avif"
          alt="Branding"
          textHeader={"Brand Identity"}
          text="Our “Brand Identity Package” service is the foundation for creating a lasting impression. We collaborate closely with you to define their unique brand identity, crafting eye-catching logos and compelling marketing collateral."
          url="/brand-identity-package"
        />
        <TextImageService
          imageUrl="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088563/Search-Engine-Marketing_m1ebvn.avif"
          alt="Search-Engine-Marketing"
          textHeader={"Search Engine Marketing"}
          text="Our “Search Engine Marketing” service offer tailored solutions to boost online visibility and engagement to support you throughout the dynamic digital realm."
          url="/custom-website-development"
        />
        <ImageTextService
          imageUrl="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088569/Website-Development_gxpjci.avif"
          alt="Website-Development"
          textHeader={"Website Development"}
          text="Discover the power of bespoke web solutions with Prevail and elevate your brand to new heights in the digital landscape. Transform, engage, and succeed effortlessly."
          url="/website-development"
        />
        <TextImageService
          imageUrl="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088563/Custom-Website-Development_mvdf6w.avif"
          alt="Custom-Website-Development"
          textHeader={"Custom Website Development"}
          text="Desire ownership over your digital identity and wish to convey your brand's story authentically and vividly, then our “custom website development” is perfect for you."
          url="/search-engine-marketing"
        />
        <ImageTextService
          imageUrl="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088563/Marketing-Price-Displacement_omscxs.avif"
          alt="Marketing-Price-Displacement"
          textHeader={"Marketing Price Displacement"}
          text="Unlock your business’s potential with our “Marketing Price Displacement” API. Harness advanced pricing strategies and yield management to optimise marketing spend, automate adjustments, and boost ROI.  "
          url="/marketing-pricing-displacement"
        />
        <TextImageService
          imageUrl="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088562/Digital-Accelerator_p0j4ty.avif"
          alt="Digital-Accelerator"
          textHeader={"Digital Accelerator Bundle"}
          text="Our “Digital Accelerator” bundle integrate cutting-edge website design, bespoke brand identity, and strategic SEO services to boost visibility engage customers, and enhance your digital footprint."
          url="/digital-accelerator-bundle"
        />
      </Box>
    </Grid>
  );
};

export default MainPage;
