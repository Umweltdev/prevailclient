import { useEffect, useState } from "react";
import "./assets/about.css";

const SectionTwo = () => {
  const [selectedSection, setSelectedSection] = useState("Our Why");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    "Our Why": false,
    "Our Solution": false,
    // "Consultation Journey": false,
  });

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleExpandClick = (section) => {
    setExpandedSections((prevExpandedSections) => ({
      ...prevExpandedSections,
      [section]: !prevExpandedSections[section],
    }));
  };

    // useEffect(() => {
    //   const handleScroll = () => {
    //     const currentPosition = window.scrollY;

    //     if (currentPosition === 0 || currentPosition < scrollPosition) {
    //       // Scrolling up to the very top or scrolling up, show the sidebar
    //       setSidebarVisible(true);
    //     } else {
    //       // Scrolling down, hide the sidebar
    //       setSidebarVisible(false);
    //     }

    //     setScrollPosition(currentPosition);
    //   };

    //   window.addEventListener("scroll", handleScroll);

    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, [scrollPosition]);

  return (
    <div className="sTwoAboutContainer">
      <div
        className="sTwoAboutSideBar"
        // style={{ top: sidebarVisible >= 600 ? "-100vh" : "0" }}
        // style={{ top: sidebarVisible ? "" : "-100vh" }}
      >
        <ul className="sTwoAboutSideList">
          <li
            className={`sTwoAboutList ${
              selectedSection === "Our Why" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("Our Why")}
          >
            Our Why
          </li>
          <li
            className={`sTwoAboutList ${
              selectedSection === "Our Solution" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("Our Solution")}
          >
            Our Solution
          </li>
          {/* <li
            className={`sTwoAboutList ${
              selectedSection === "Consultation Journey" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("Consultation Journey")}
          >
            Consultation Journey
          </li> */}
        </ul>
      </div>
      <div className="sTwoAboutDetail">
        {selectedSection === "Our Why" && (
          <>
            <h1 className="sTwoAboutHeader">Our Why</h1>
            <p className="sTwoAboutText">
              {expandedSections["Our Why"]
                ? "Understanding the nuances of marketing budgets and effective strategies is essential to businesses. The costs associated with marketing can vary significantly, contingent on factors like a company's marketing budget, specific goals, and the number of marketing channels they choose to employ. It is a well-established industry guideline that businesses should allocate between 15% and 20% of their sales towards marketing expenses. However, the ultimate allocation hinges on a company's unique budget size, marketing strategy, ambition, and the manner in which it intends to utilise its marketing resources. That is why understanding the nuances of our market share, budgets, and effects is essential in a company’s strategy to promote themselves to their right & unique target audiences. Our paramount concern is the current trend where large enterprises tend to dominate the digital landscape. They often do so by employing full-time programmers and have the financial capacity to invest in a plethora of SaaS solutions. Regrettably, this trend leads to a rapid erosion of market share for local businesses and SMEs, often catching them in financial distress before they even realise it. The stark reality is that local businesses and SMEs find it challenging to outcompete these industry giants and are losing their market share within their respective sectors."
                : "Understanding the nuances of marketing budgets and effective strategies is essential to businesses. The costs associated with marketing can vary significantly, contingent on factors like a company's marketing budget, specific goals, and the number of marketing channels they choose to employ. It is a well-established industry guideline that businesses should allocate between 15% and 20% of their sales towards marketing expenses. However, the ultimate allocation hinges on a company's unique budget size, marketing strategy, ambition, and the manner in which it intends to utilise its marketing resources. That is why understanding the nuances of our market share, budgets, and effects is essential in a company’s strategy to promote themselves to their right & unique target audiences."}
            </p>
            <button
              className="sTwoAboutBtn"
              onClick={() => handleExpandClick("Our Why")}
            >
              {expandedSections["Our Why"] ? "Collapse" : "Expand"}
            </button>
          </>
        )}
        {selectedSection === "Our Solution" && (
          <>
            <h1 className="sTwoAboutHeader">Our Solution</h1>
            <p className="sTwoAboutText">
              {expandedSections["Our Solution"]
                ? "This is where Prevail takes centre stage. We specialise in working closely with SMEs and local businesses, empowering them to differentiate themselves and position their brand effectively in front of their target audience. We believe in forging strong partnerships with our clients to develop tailored solutions that maximise both short-term and long-term growth. Our distinctive competencies lie in our seamless integration of automation, data analysis, and marketing strategies. Our ultimate goal is to enable businesses to thrive, irrespective of economic challenges, by providing innovative and holistic solutions. The Prevail approach is founded on a commitment to levelling the playing field for local businesses facing economic uncertainty. By emphasising collaboration and tailor-made strategies, we ensure that our clients have the tools to compete effectively in a dynamic digital landscape. Our focus is not just on marketing; it is on delivering results, sustaining growth, and prevailing against the odds."
                : "This is where Prevail takes centre stage. We specialise in working closely with SMEs and local businesses, empowering them to differentiate themselves and position their brand effectively in front of their target audience. We believe in forging strong partnerships with our clients to develop tailored solutions that maximise both short-term and long-term growth. Our distinctive competencies lie in our seamless integration of automation, data analysis, and marketing strategies. Our ultimate goal is to enable businesses to thrive, irrespective of economic challenges, by providing innovative and holistic solutions."}
            </p>
            <button
              className="sTwoAboutBtn"
              onClick={() => handleExpandClick("Our Solution")}
            >
              {expandedSections["Our Solution"] ? "Collapse" : "Expand"}
            </button>
          </>
        )}
        
      </div>
    </div>
  );
};

export default SectionTwo;
