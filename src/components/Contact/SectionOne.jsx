import Navbar from "../Navbar/Navbar";
import "./assets/contact.css";
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
      delay: 0.8,
      duration: 0.6,
      ease: easing,
    },
  },
};

const letter = {
  initial: {
    opacity: 0,
    x: -400,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 0.6,
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
      delay: 1.5,
      duration: 1,
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
      className="hero-container"
    >
      {/* <Navbar /> */}

      <motion.div
        className="contact-hero"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h1 variants={header} className="contact-hero-one">
          Prevail Digital Marketing
        </motion.h1>
        <motion.h1 variants={letter} className="contact-hero-two">
          How Can We Be
        </motion.h1>
        <motion.h1 variants={letter2} className="contact-hero-two">
          Your Partner in Success
        </motion.h1>
        <motion.p variants={fadeInUp} className="contact-hero-three">
          FOR ULTRA-LUXURY BRANDS
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
