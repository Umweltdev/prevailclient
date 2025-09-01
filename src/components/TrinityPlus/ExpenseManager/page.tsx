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

const ExpenseManagerPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <AppBarNav color="#000" />
      {/* Hero Section */}
      <Hero />

      {/* Problem Statement */}
      <Problems />

      {/* How It Works - The 7 Rules */}
      <HowItWorks />

      {/* Interactive Demo */}
      <Demo />

      {/* Benefits */}
      <Benefit />

      {/* Testimonials */}
      <Testimonial />

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <FAQ />

      {/* CTA and Footer */}
      {/* <div className='bg-slate-900'> */}
      {/* CTA */}
      {/* <CTA /> */}

      {/* Footer */}
      <Footer />
      {/* </div> */}
      {/* Floationg Blogs */}
      <FloatingBlobs />
    </div>
  );
};

export default ExpenseManagerPage;
