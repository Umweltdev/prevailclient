import '../Landing/assets/landing.css'

const ComponentContact = ({header, text, img}) => {
  return (
    <div className="sFourContainer">
      <div className="sFourLeft">
        <h1 className="sFourHero">{header}</h1>
        <p className="sFourText">{text}</p>
        <div className="sFourInputContainer">
          <input className="sFourInput" placeholder="Full Name" type="text" />
          <input className="sFourInput" placeholder="Email" type="text" />
          <input className="sFourInput" placeholder="Phone" type="text" />
          <textArea
            className="sFourInputText"
            placeholder="How can we be of help?"
          />
          <button className="sFourInputBtn">Submit</button>
        </div>
      </div>
      <div className="sFourRight">
        <img className="sFourRightImg" src={img} alt="contact Image" />
      </div>
    </div>
  );
};

export default ComponentContact;
