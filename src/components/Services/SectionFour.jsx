import "./assets/services.css";

const SectionFour = () => {
  return (
    <div className="sFourServiceContainer">
      <h1 className="sFourServiceHeader">Our Packages</h1>
      <div className="sFourServiceCards">
        {/* ONE */}
        <div className="sFourServiceCardSmall">
          <div className="sFourServiceCardTwo">
            <h1 className="sFourServiceCardTwo1"> SEO Package 1</h1>
            <p className="sFourServiceCardSpanText">
              min 6-12 months recommended
            </p>
            <h1 className="sFourServiceCardTwo2">
              For Middle-Sized Companies & E-Commerce
            </h1>
            <ul className="sFourServiceCardList">
              <li>Initial Review, Audit & Analysis</li>
              <li>Competitor Analysis</li>
              <li>On-Page SEO based on reports </li>
              <li>Local Search Optimisation</li>
              <li>GMB Optimisation</li>
              <li>Google Analytics Tracking</li>
              <li>Google 1st page (5 key phrases)</li>
              <li>Backlinks Consultation/ Generation</li>
              <li>New Blogpost optimised x 2</li>
              <li>Weekly Reporting</li>
              <li>Customer Support</li>
              <p className="sFourServiceCardBottom">
                Starting at €95 per month
              </p>
              <button className="sFourServiceCardBtn">Get A Qoute</button>
            </ul>
          </div>
        </div>

        {/* MAIN */}
        <div className="sFourServiceCard">
          <div className="sFourServiceCardOne">
            <p>WE RECOMMEND</p>
          </div>
          <div className="sFourServiceCardTwo">
            <h1 className="sFourServiceCardTwo1"> SEO Package 2</h1>
            <p className="sFourServiceCardSpanText">
              min 6-12 months recommended
            </p>
            <h1 className="sFourServiceCardTwo2">
              For Middle-Sized Companies & E-Commerce
            </h1>
            <ul className="sFourServiceCardList">
              <li>Initial Review, Audit & Analysis</li>
              <li>Competitor Analysis</li>
              <li>On-Page SEO based on reports </li>
              <li>Local Search Optimisation</li>
              <li>GMB Optimisation</li>
              <li>Google Analytics Tracking</li>
              <li>Google 1st page (5 key phrases)</li>
              <li>Backlinks Consultation/ Generation</li>
              <li>New Blogpost optimised x 2</li>
              <li>Weekly Reporting</li>
              <li>Customer Support</li>
              <p className="sFourServiceCardBottomMain">
                Starting at €795 per month
              </p>
              <button className="sFourServiceCardBtn">Get A Qoute</button>
            </ul>
          </div>
        </div>

        {/* TWO */}
        <div className="sFourServiceCardSmall">
          <div className="sFourServiceCardTwo">
            <h1 className="sFourServiceCardTwo1"> SEO Package 2</h1>
            <p className="sFourServiceCardSpanText">
              min 6-12 months recommended
            </p>
            <h1 className="sFourServiceCardTwo2">
              For Middle-Sized Companies & E-Commerce
            </h1>
            <ul className="sFourServiceCardList">
              <li>Initial Review, Audit & Analysis</li>
              <li>Competitor Analysis</li>
              <li>On-Page SEO based on reports </li>
              <li>Local Search Optimisation</li>
              <li>GMB Optimisation</li>
              <li>Google Analytics Tracking</li>
              <li>Google 1st page (5 key phrases)</li>
              <li>Backlinks Consultation/ Generation</li>

              <p className="sFourServiceCardBottom">
                Starting at €195 per month
              </p>
              <button className="sFourServiceCardBtn">Get A Qoute</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
