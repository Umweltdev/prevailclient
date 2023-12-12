import Navbar from "../Navbar/Navbar";
import "./assets/landing.css";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];
const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const fadeInUp = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 0.3,
    },
  },
};




const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.8,
      duration: 1.6,
      ease: easing,
    },
  },
};


const letter = {
  initial: {
    opacity: 0,
    x: -400,
    transition: { duration: 0.55, ease: easing },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 2.6,
      ease: easing,
    },
  },
};


const letter2 = {
  initial: {
    opacity: 0,
    x: -400,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2.5,
      duration: 2,
      ease: easing,
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100vh" }}
      transition={{ duration: 1, ease: easing }}
      className="container"
    >
      <Navbar />

      <motion.div
        className="hero"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h1 variants={header} className="hero-one">
          THE FULL-SERVICE
        </motion.h1>
        <motion.h1 variants={letter} className="hero-two">
          PREVAIL DIGITAL
        </motion.h1>
        <motion.h1 variants={letter2} className="hero-two">
          MARKETING AGENCY
        </motion.h1>
        <motion.p variants={fadeInUp} className="hero-three">
          FOR ULTRA-LUXURY BRANDS
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
