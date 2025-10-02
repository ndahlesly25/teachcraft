import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const slides = [
  {
    image: "/images/slideshow1.jpg",
    caption: "Master Everyday English with tailored support",
  },
  {
    image: "/images/slideshow2.jpg",
    caption: "Exceptional teacher recruitment for quality education",
  },
  {
    image: "/images/slideshow3.jpg",
    caption: "Engaging English Camps",
  },
  {
    image: "/images/slideshow4.jpg",
    caption: "Master Everyday English with TeachCraft!",
  },
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrent(index);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <div className={`caption ${index === current ? "fade-in" : "fade-out"}`}>
            {slide.caption}
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active-dot" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>



    </div>
  );
};

export default Slideshow;
