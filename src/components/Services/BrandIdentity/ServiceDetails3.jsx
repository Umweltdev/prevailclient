import { Grid, Typography } from "@mui/material";
import BrandIdentityCard from "./CardLayout";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  imagePlaform: {
    width: "78vw",
    height: "50vh",
    objectFit: "cover",
    borderRadius: "5px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",

    "@media (max-width: 600px)": {
      width: "unset",
      height: "unset",
    },
  },
  imageInit: {
    width: "37vw",
    borderRadius: "1vw",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "unset",
    },
  },
  imageBrand: {
    width: "37vw",
    borderRadius: "1vw",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "unset",
      borderRadius: "5vw",
    },
  },
});

const ServiceDetails3 = () => {
  const classes = useStyles();
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "4vw",
        justifyContent: "center",
        alignItems: "top",
        margin: "0 auto",
        backgroundColor: "white",
        padding: "10vh 5vw",
        "@media (max-width: 600px)": {
          display: "flex",
          flexDirection: "column",
          gap: "4vw",
          justifyContent: "center",
          alignItems: "center",
          margin: "5vh auto",
          backgroundColor: "#7097da",
          padding: "2vh 0",
          color: "white",
        },
      }}
    >
      <Grid sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            display: "flex",
            fontSize: "2vw",
            fontWeight: "bold",
            color: "#494848",
            marginBottom: "3vh",
            "@media (max-width: 600px)": {
              fontSize: "6vw",
              margin: "2vh auto",
              textAlign: "center",
              justifyContent: 'center',
              alignItems: 'center',
              color: "white"
            },
          }}
        >
          Offering
        </Typography>
        <Typography
          sx={{
            fontSize: "1.4vw",
            color: "#636363",
            marginBottom: "3vh",
            textAlign: "justify",
            width: "37vw",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textAlign: "center",
              width: "90vw",
              color: "white"
            },
          }}
        >
          Here&apos;s where our &quot;Brand Identity Package&quot; service comes into play,
          addressing your pain point with precision. Our collaborative process
          is the heartbeat of our success. We work closely with you, the
          heartbeat of your business, to weave your unique vision and values
          into every aspect of your brand identity. Imagine the pride and
          confidence you&apos;ll feel when your brand identity is not just cohesive
          but also deeply resonates with your target audience.
        </Typography>
        <img
          className={classes.imageBrand}
          src="https://img.freepik.com/premium-photo/brand-name-written-black-paper-background-with-white-blue-wooden-colored-pencils-3d-illustration_556904-556.jpg?w=826"
          alt=""
        />
      </Grid>
      <Grid
        sx={{
          "@media (max-width: 600px)": {
            margin: "0 auto",
          },
        }}
      >
        <BrandIdentityCard />
      </Grid>
    </Grid>
  );
};

export default ServiceDetails3;
