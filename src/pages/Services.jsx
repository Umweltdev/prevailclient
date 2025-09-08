import FooterNew from "../components/Footer/FooterNew";
import MainPage from "../components/Services/MainPage";
import AppBarNav from "../components/Navbar/Appbar";
import { Helmet } from "react-helmet";
import SmoothScrollUp from "../components/utils/SmoothScrollUp";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Unlock Your Digital Potential with Prevail</title>
        <meta
          name="description"
          content="Tailored Strategies for Sustainable Growth in the Digital Landscape"
        />
      </Helmet>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <AppBarNav color="#000" />
        <MainPage />
        <FooterNew />
        <SmoothScrollUp />
      </div>
    </>
  );
};

export default Services;
