import "./assets/portfolio.css";
import Navbar from "../Navbar/Navbar";
const SectionOne = () => {
  return (
    <div className="sOnePortContainer">
      {/* <Navbar /> */}
      <div className="sOnePort">
        <div className="sOnePortHero">
          <h1 className="sOnePortHeroText">Company Summary</h1>
        </div>
        <div className="sOnePortSection">
          <img
            className="sOnePortImage"
            src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />

          <div className="sOnePortText">
            <h1>Customer-Centric Approach</h1>
            <h1>Innovation and Creativity</h1>
            <h1>Building Brand Authority</h1>
            <h1> Social Impact through Digital Outreach</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
