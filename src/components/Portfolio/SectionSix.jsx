import "./assets/portfolio.css"

const SectionSix = () => {
  return (
    <div className="wrap animate pop">
      <div className="overlay">
        <div className="overlay-content animate slide-left delay-2">
          <h1 className="animate slide-left pop delay-4">Trees</h1>
          <p
            className="animate slide-left pop delay-5"
            style={{ color: "white", marginBottom: "2.5rem" }}
          >
            Kingdom: <em>Plantae</em>
          </p>
        </div>
        <div className="image-content animate slide delay-5"></div>
        <div className="dots animate">
          <div className="dot animate slide-up delay-6"></div>
          <div className="dot animate slide-up delay-7"></div>
          <div className="dot animate slide-up delay-8"></div>
        </div>
      </div>
      <div className="text">
        <p>
          {/* <img
            className="inset"
            src="https://assets.codepen.io/4787486/oak_1.jpg"
            alt=""
          /> */}
          Trees are woody perennial plants that are a member of the kingdom{" "}
          <em>Plantae</em>. All species of trees are grouped by their genus,
          family, and order. This helps make identifying and studying trees
          easier.
        </p>
        <p>
          Apart from providing oxygen for the planet and beauty when they bloom
          or turn color, trees are very useful. Certain species of hardwood and
          softwood trees are excellent for timber, making furniture, and paper.
        </p>
        <p>
          When managed properly, trees are a good source of renewable energy and
          construction material.
        </p>
      </div>
    </div>
  );
};

export default SectionSix;
