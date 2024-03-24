import "./assets/landing.css";
import oneImg from "../../assets/1.png";
import twoImg from "../../assets/2.png";
import threeImg from "../../assets/31.png";
import land2 from "./assets/land2.png";
import { makeStyles } from "@mui/styles";
import theme from "../../theme";
import pos from "./assets/pos.png";

const useStyles = makeStyles({
  sectTwoText: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSizeMedium,
    color: "black",
    padding: "18vh 0",

    textAlign: "justify",
    textJustify: "distribute",
    width: "55vw",
    lineHeight: "6vh",
    // margin: "5vh auto",
    "@media (max-width: 600px)": {
      fontSize: "4vw",
      width: "90vw",
      lineHeight: "4vh",
      padding: "2vh 0",
      margin: "0 auto",
      textAlign: "center",
    },
  },

  image: {
    width: "30vw",
    "@media (max-width: 600px)": {
      width: "90vw",
      padding: "unset",
    },
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
        <img className={classes.image} src={pos} alt="" />
      </div>
    </div>
  );
};

export default SectionTwo;
