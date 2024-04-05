import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { slides as initialSlides } from "./assets/LandingData";
import { Link } from "react-router-dom";

const OurCore = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(initialSlides);
  const intervalRef = useRef(null);

  // console.log(currentSlide);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      showSlider("next");
    }, 7000);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
  };

  const showSlider = (type) => {
    stopAutoPlay();
    if (type === "next") {
      const rotatedSlides = [...slides.slice(1), slides[0]];
      setCurrentSlide(0);
      setSlides(rotatedSlides);
    } else {
      const lastSlideIndex = slides.length - 1;
      const rotatedSlides = [
        slides[lastSlideIndex],
        ...slides.slice(0, lastSlideIndex),
      ];
      setCurrentSlide(lastSlideIndex);
      setSlides(rotatedSlides);
    }
    startAutoPlay();
  };

  const nextSlide = () => {
    showSlider("next");
  };

  const prevSlide = () => {
    showSlider("prev");
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 4) {
      return words.slice(0, 4).join(" ") + "...";
    }
    return description;
  };

  const thumbnailIndex = (currentSlide + 1) % slides.length;

  return (
    <div
      className="carousel"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="list">
        {slides.map((slide, index) => (
          <div
            className={`item ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            <img src={slides[currentSlide].image} alt={slide.title} />
            <div className="content">
              <p className="author">Resources</p>
              <div className="topic">{slides[currentSlide].topic}</div>
              <div className="des">{slides[currentSlide].description}</div>
              <div className="buttons">
                <Link className="theLink" to={`/Services/${index}`}>
                  SEE MORE
                </Link>
                <Link className="theLinkTwo" to={`/Services/${index}`}>
                  SUBSCRIBE
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail">
        {slides.map((slide, index) => (
          <div
            className={`item ${index === thumbnailIndex ? "active" : ""}`}
            key={index}
          >
            <img src={slides[index].image} alt={slides[index].title} />
            <div className="content">
              <p className="spanText">{slides[index].topic}</p>
              <p className="normaltext">
                {truncateDescription(slides[index].description)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={prevSlide}>
          {"<"}
        </button>

        <button id="next" onClick={nextSlide}>
          {">"}
        </button>
      </div>

      <div className="time"></div>
    </div>
  );
};

export default OurCore;
