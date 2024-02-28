import "./assets/landing.css";
import oneImg from "../../assets/1.png";
import twoImg from "../../assets/2.png";
import threeImg from "../../assets/31.png";
import land2 from "./assets/land2.png";
import Spline from "@splinetool/react-spline";

const SectionTwo = () => {
  return (
    <div className="sTwoContainer">
      <div className="sTwoHero">
        <p className="sTwoHero2">
          Prevail is a cutting-edge marketing agency specialising in redefining
          the way businesses navigate the digital landscape. At PMM, we
          recognise that the modern economy presents unique challenges for local
          businesses and small-to-medium-sized enterprises (SMEs). That is why
          “Our Mission” is to empower you with innovative solutions that drive
          long-term success. PMM is not just a marketing agency; it is a
          strategic partner for businesses in the digital age.
        </p>

        <spline-viewer
          loading-anim-type="spinner-small-light"
          url="https://prod.spline.design/YwnKOA8cJ8yoNsFC/scene.splinecode"
        ></spline-viewer>
      </div>
    </div>
  );
};

export default SectionTwo;
