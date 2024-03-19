import "./assets/landing.css";
import oneImg from "../../assets/1.png";
import twoImg from "../../assets/2.png";
import threeImg from "../../assets/31.png";
import land2 from "./assets/land2.png";
import { makeStyles } from "@mui/styles";
import theme from "../../theme";

const useStyles = makeStyles({
  sectTwoText: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSizeMedium,
    color: theme.palette.other.light,
    padding: "15vh 0",
    // width: "90vw",
    textAlign: "center",
    width: "60vw",
    lineHeight: "6vh",
    margin: "5vh auto",
  },
});

const SectionTwo = () => {
  const classes = useStyles();

  return (
    <div className="sTwoContainer">
      <div className="sTwoHero">
        <p className={classes.sectTwoText}>
          Prevail is a cutting-edge marketing agency specialising in redefining
          the way businesses navigate the digital landscape. At PMM, we
          recognise that the modern economy presents unique challenges for local
          businesses and small-to-medium-sized enterprises (SMEs). That is why
          “Our Mission” is to empower you with innovative solutions that drive
          long-term success. PMM is not just a marketing agency; it is a
          strategic partner for businesses in the digital age.
        </p>

        {/* <spline-viewer
          className="spinnerSplin"
          loading-anim-type="spinner-small-light"
          url="https://prod.spline.design/YwnKOA8cJ8yoNsFC/scene.splinecode"
        ></spline-viewer> */}
      </div>
    </div>
  );
};

export default SectionTwo;
