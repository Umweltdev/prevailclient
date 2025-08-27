import { Grid, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import ReusedButton from "../ReusedComponents/ReusedButton";
import imago from "./assets/aboutT.svg";
import imago2 from "./assets/aboutTT.svg";
import { useInView } from "react-intersection-observer";
import styles from "./assets/about.module.css"; // Import the animation CSS

const JoinOurCustomer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Visibility threshold
  });

  return (
    <Grid
      container
      ref={ref} // Reference for the whole section
      className={`${styles.joinCustomerSection} ${
        inView ? styles.visible : ""
      }`}
      sx={{
        background: "#0D0E30",
        color: "white",
        py: "147px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "80vh",
        "@media (max-width: 900px)": {
          flexDirection: "column",
          alignItems: "center",
          py: "100px",
          width: "100vw",
          position: "unset",
          height: "70vh",
        },
      }}
    >
      <CardMedia
        component={"img"}
        image="https://res.cloudinary.com/dw7khzaml/image/upload/v1720053638/aboutT_wjld08.svg"
        sx={{
          width: "374px",
          position: "absolute",
          bottom: "0",
          left: "0",
          "@media (max-width: 900px)": {
            display: "none",
          },
        }}
        className={`${styles.customerImageLeft} ${
          inView ? styles.visible : ""
        }`}
      />
      <Grid
        item
        sx={{
          textAlign: "center",
          width: "674px",
          "@media (max-width: 900px)": {
            width: "90vw",
            margin: "auto",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "48px",
            fontWeight: "500",
            lineHeight: "110%",
            letterSpacing: "-0.48px",
            mb: "24px",
            "@media (max-width: 900px)": {
              fontSize: "32px",
            },
          }}
          className={`${styles.customerText} ${inView ? styles.visible : ""}`}
        >
          Ready to Transform Your Business?
        </Typography>
        <Typography
          sx={{
            color: "#8591AE",
            fontSize: "18px",
            fontWeight: "400",
            mb: "34px",
            width: "398px",
            margin: "auto",
            "@media (max-width: 900px)": {
              fontSize: "4.5vw",
              margin: "auto",
              width: "90vw",
            },
          }}
          className={`${styles.customerText} ${inView ? styles.visible : ""}`}
        >
         Join hundreds of Irish businesses already thriving with Prevail
Start Your Journey Book a Consultation

        </Typography>
        <Grid sx={{ mt: "34px" }}>
          <Link rel="canonical" to={"/signup"}>
            <ReusedButton text={"Learn More"} />
          </Link>
        </Grid>
      </Grid>
      <CardMedia
        component={"img"}
        image="https://res.cloudinary.com/dw7khzaml/image/upload/v1720053641/aboutTT_bzymff.svg"
        sx={{
          width: "324px",
          position: "absolute",
          top: "0",
          right: "0",
          "@media (max-width: 900px)": {
            display: "none",
          },
        }}
        className={`${styles.customerImageRight} ${
          inView ? styles.visible : ""
        }`}
      />
    </Grid>
  );
};

export default JoinOurCustomer;
