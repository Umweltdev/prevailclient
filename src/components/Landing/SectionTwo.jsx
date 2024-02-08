import "./assets/landing.css";
import oneImg from "../../assets/1.png";
import twoImg from "../../assets/2.png";
import threeImg from "../../assets/31.png";
import land2 from "./assets/land2.png";

const SectionTwo = () => {
  return (
    <div className="sTwoContainer">
      <div className="sTwoHero">
        <h1 className="sTwoHeroText1">Online Growth</h1>
        <h1 className="sTwoHeroText2">Is Complicated.</h1>
        <h1 className="sTwoHeroText2">That's Why We're Here</h1>
        <div className="sTwoBottomText">
          <p className="sTwoHero1">
            A Dedicated Marketing Team built for{" "}
            <span className="sTwoHero1span">Bussiness-Growth</span>
          </p>
          <p className="sTwoHero2">
            Prevail is a cutting-edge marketing agency specialising in
            redefining the way businesses navigate the digital landscape. At
            PMM, we recognise that the modern economy presents unique challenges
            for local businesses and small-to-medium-sized enterprises (SMEs).
            That is why “Our Mission” is to empower you with innovative
            solutions that drive long-term success. PMM is not just a marketing
            agency; it is a strategic partner for businesses in the digital age.
          </p>
          <div className="sTwoRightBtn">
            <button className="sTwoLeftBtn1">Schedule A Call</button>
            <button className="sTwoLeftBtn2">Contact Us</button>
          </div>
        </div>
      </div>

      <img className="sTwoImageClass" src={land2} alt="" />

      {/* <div className="sTwoInfographs">
        <div className="sTwoInfographs1">
          <button className="sTwoRightBtn1">Marketing1</button>
          <img className="sTwoInfographsImg1" src={oneImg} alt="" />
          <button className="sTwoRightBtn2">Marketing2</button>
        </div>
        <div className="sTwoInfographs2">
          <div>
            <button className="sTwoRightBtn3">Marketing3</button>
            <img className="sTwoInfographsImg2" src={twoImg} alt="" />
            <button className="sTwoRightBtn4">Marketing4</button>
          </div>
          <div>
            <button className="sTwoRightBtn5">Marketing5</button>
            <img className="sTwoInfographsImg3" src={threeImg} alt="" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SectionTwo;
