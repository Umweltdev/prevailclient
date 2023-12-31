import "./assets/landing.css";
import oneImg from "../../assets/1.png"
import twoImg from "../../assets/2.png";
import threeImg from "../../assets/31.png";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            neque rem reiciendis minima blanditiis exercitationem architecto
            provident deleniti expedita dolor corporis nulla explicabo vero
            corrupti totam repellat id voluptatum ipsa est enim, sit facere
            pariatur libero error? Rem, ducimus ratione?
          </p>
          <div className="sTwoRightBtn">
            <button className="sTwoLeftBtn1">Schedule A Call</button>
            <button className="sTwoLeftBtn2">Contact Us</button>
          </div>
        </div>
      </div>

      <div className="sTwoInfographs">
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
      </div>
    </div>
  );
};

export default SectionTwo;
