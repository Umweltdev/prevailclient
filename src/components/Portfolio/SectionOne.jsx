import "./assets/portfolio.css";
import Navbar from "../Navbar/Navbar";
const SectionOne = () => {
  return (
    <div className="sOnePortContainer">
      <Navbar />
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
            <h1>
              <span style={{ color: "white" }}>Cu</span>stomer-Centric Approach
            </h1>
            <h1>
              <span style={{ color: "white" }}>Inn</span>ovation and Creativity
            </h1>
            <h1>
              <span style={{ color: "white" }}>Bu</span>ilding Brand Authority
            </h1>
            <h1>
              {" "}
              <span style={{ color: "white" }}>So</span>cial Impact through
              Digital <span style={{ color: "white" }}>Ou</span>treach
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
