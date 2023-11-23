const SectionFour = () => {
  return (
    <div className="sFourContainer">
      <div className="sFourLeft">
        <h1 className="sFourHero">Is Your Mind Open For Change?</h1>
        <p className="sFourText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ullam a inventore maiores, in error nihil reprehenderit magnam.
          Facere, illo.
        </p>
        <div className="sFourInputContainer">
          <input className="sFourInput" placeholder="Full Name" type="text" />
          <input className="sFourInput" placeholder="Email" type="text" />
          <input className="sFourInput" placeholder="Phone" type="text" />
        </div>
      </div>
      <div className="sFourRight">
        <img
          className="sFourRightImg"
          src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default SectionFour;
