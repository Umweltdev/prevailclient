import "./assets/landing.css";
import oneImg from "../../assets/1.png";
import twoImg from "../../assets/2.png";
import threeImg from "../../assets/31.png";
import land2 from "./assets/land2.png";
import { makeStyles } from "@mui/styles";
import theme from "../../theme";
import pos from "./assets/pos.png";
import { Grid, Typography } from "@mui/material";

const useStyles = makeStyles({
  imageInit: {
    width: "37vw",
    height: "53vh",
    borderRadius: "1vw",
    objectFit: "cover",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "unset",
    },
  },
});

const SectionTwo = () => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        width: "90vw",
        display: "flex",
        marginBottom: "5vh",
        // gap: "5vw",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "4vw",
        margin: "10vh auto",
        "@media (max-width: 600px)": {
          width: "95vw",
          flexDirection: "column",
          marginBottom: "1vh",
          // gap: "5vw",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1vw",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "1.9vw",
          color: "#636363",
          marginBottom: "3vh",
          textAlign: "justify",
          width: "50vw",
          "@media (max-width: 600px)": {
            fontSize: "4vw",
            textAlign: "justify",
            width: "95vw",
          },
        }}
      >
        Prevail is a cutting-edge marketing agency specialising in redefining
        the way businesses navigate the digital landscape. At PMM, we recognise
        that the modern economy presents unique challenges for local businesses
        and small-to-medium-sized enterprises (SMEs). That is why “Our Mission”
        is to empower you with innovative solutions that drive long-term
        success. PMM is not just a marketing agency; it is a strategic partner
        for businesses in the digital age.
      </Typography>

      <img
        className={classes.imageInit}
        style={{}}
        src="https://img.freepik.com/free-photo/workaholics-businesspeople-brainstorming-financial-company-ideas-analyzing-strategy-paperwork-late-night-business-office-meeting-room_482257-2170.jpg?t=st=1711367344~exp=1711370944~hmac=0f874dbfc9940b27d646b00f88a6bc6149cb22fecdbcd4941c08f352868aa65f&w=740"
        alt=""
      />
      {/* <spline-viewer
            style={{ width: "37vw", height: "40vh" }}
            url="https://prod.spline.design/kqWnRSHfs03RcYiO/scene.splinecode"
          ></spline-viewer> */}
    </Grid>
  );
};

export default SectionTwo;
