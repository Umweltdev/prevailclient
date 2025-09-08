import Navbar from "./_components/Navbar.js";
import Hero from "./_components/Hero.js";
import Problems from "./_components/Problems.js";
import HowItWorks from "./_components/HowItWorks.js";
import Demo from "./_components/Demo.js";
import Benefit from "./_components/Benefit.js";
import Testimonial from "./_components/Testimonial.js";
import Pricing from "./_components/Pricing.js";
import FAQ from "./_components/FAQ.js";
import CTA from "./_components/CTA.js";
import Footer from "./_components/Footer.js";
import FloatingBlobs from "./_components/FloatingBlob.js";
import AppBarNav from "../../Navbar/Appbar.jsx";
import FooterNew from "../../Footer/FooterNew.jsx";

const ExpenseManagerPage = () => {
  return (
    <div className="min-h-screen">
      <AppBarNav color="#000" />
      <Hero />

      <Problems />

      <HowItWorks />

      <Demo />

      <Benefit />

      <Testimonial />

      <Pricing />

      <FAQ />

      <FooterNew />
   
      <FloatingBlobs />
    </div>
  );
};

export default ExpenseManagerPage;
