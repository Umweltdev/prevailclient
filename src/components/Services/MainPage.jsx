import { Box, Grid, Typography } from "@mui/material";
import ImageTextService from "./ImageTextService";
import TextImageService from "./TextImageService";
import { useInView } from "react-intersection-observer";
import styles from "../About/assets/about.module.css";
import CostCalculation from "./CostCalculation/CostCalculation.jsx";

const MainPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Grid
      ref={ref}
      className={`${styles.aboutUsSection} ${inView ? styles.visible : ""}`}
      sx={{
        pt: "176px",
        background: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
        "@media (max-width: 767px)": {
          pt: "168px",
        },
      }}
    >
      <Box
        className={`${styles.aboutUsSection} ${inView ? styles.visible : ""}`}
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
          className={`${styles.aboutUsSection} ${inView ? styles.visible : ""}`}
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
          url="/service/brand-identity-package"
        />
        <TextImageService
          imageUrl="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088563/Search-Engine-Marketing_m1ebvn.avif"
          alt="Trinity System"
          textHeader={"Trinity System"}
          text="The Trinity System integrates strategy, creativity, and technology into one powerful solution. We help your business achieve consistent growth by aligning marketing efforts, data insights, and digital tools into a unified system."
          url="/trinity"
        />
        <ImageTextService
          imageUrl="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088569/Website-Development_gxpjci.avif"
          alt="Website-Development"
          textHeader={"Website Development"}
          text="Discover the power of bespoke web solutions with Prevail and elevate your brand to new heights in the digital landscape. Transform, engage, and succeed effortlessly."
          url="/service/website-development"
        />
        
        <ImageTextService
          imageUrl="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088563/Marketing-Price-Displacement_omscxs.avif"
          alt="Content Ad Campaign"
          textHeader={"Content Ad Campaign"}
          text="Drive customer engagement with tailored content-driven ad campaigns. We craft compelling stories and visuals that resonate with your audience, helping your brand stand out while maximizing ad performance and ROI."
          url="/service/custom-ad-campaign"
        />
        <TextImageService
          imageUrl="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088562/Digital-Accelerator_p0j4ty.avif"
          alt="Digital-Accelerator"
          textHeader={"Digital Accelerator Bundle"}
          text="Our “Digital Accelerator” bundle integrate cutting-edge website design, bespoke brand identity, and strategic SEO services to boost visibility engage customers, and enhance your digital footprint."
          url="/service/digital-accelerator-bundle"
        />
        <CostCalculation/>
      </Box>
    </Grid>
  );
};

export default MainPage;
