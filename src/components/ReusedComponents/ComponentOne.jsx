import "../Landing/assets/landing.css";

const ComponentOne = ({
  headerText1,
  headerText2,
  img1,
  img2,
  normaltext1,
  normaltext2,
}) => {
  return (
    <div className="sSixContainer">
      <div className="sSixFirst">
        <img className="sSixFirstImg" src={img1} alt="" />
        <div>
          <p className="sSixText">{headerText1}</p>
          <p
            style={{
              fontSize: "1vw",
              width: "40vw",
              textAlign: "justify",
              lineHeight: "4vh",
              marginTop: "2vh",
            }}
          >
            {normaltext1}
          </p>
        </div>
      </div>
      <div className="sSixFirst">
        <div>
          <p className="sSixText">{headerText2}</p>
          <p
            style={{
              fontSize: "1vw",
              width: "40vw",
              textAlign: "justify",
              lineHeight: "4vh",
              marginTop: "2vh",
            }}
          >
            {normaltext2}
          </p>
        </div>
        <img className="sSixFirstImg" src={img2} alt="" />
      </div>
    </div>
  );
};

export default ComponentOne;
