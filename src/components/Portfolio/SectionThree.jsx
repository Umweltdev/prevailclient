import { companyChallenges } from "./assets/PortfolioData";

const SectionThree = () => {
  return (
    <div className="sThreePortContainer">
      <h1 className="sThreePortHero">Challenges</h1>

      {companyChallenges.map((data, index) => (
        <div key={index} className="sThreePortText">
          <p>{data.name}</p>
        </div>
      ))}
      <div className="sThreePortText2">
        <h1 className="sThreePortHero2">How We Help Towards This Challenge</h1>
        <div className="sThreePortTextSmall">
          {companyChallenges.map((data, index) => (
            <div key={index} className="sThreePortText">
              <p>{data.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
