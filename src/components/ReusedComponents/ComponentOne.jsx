import "../Landing/assets/landing.css";

const ComponentOne = ({headerText1, headerText2, img1, img2}) => {
  return (
    <div className="sSixContainer">
      <div className="sSixFirst">
        <img className="sSixFirstImg" src={img1} alt="" />
        <p className="sSixText">{headerText1}</p>
      </div>
      <div className="sSixFirst">
        <p className="sSixText">{headerText2}</p>
        <img className="sSixFirstImg" src={img2} alt="" />
      </div>
    </div>
  );
};

export default ComponentOne;
