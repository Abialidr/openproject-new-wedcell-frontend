"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";

const TopDiv = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: "/LandingPage/Banner.png",
      h: "Photography Store Upgrade your Style",
      p: "Fashion is a language that creates itself in clothes to interpret reality.",
    },
    {
      img: "/LandingPage/Banner.png",
      h: "Photography Store Upgrade your Style",
      p: "Fashion is a language that creates itself in clothes to interpret reality.",
    },
    {
      img: "/LandingPage/Banner.png",
      h: "Photography Store Upgrade your Style",
      p: "Fashion is a language that creates itself in clothes to interpret reality.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className={styles.carousel}>
      <img
        className={styles.bannerBtm}
        src="/LandingPage/bannerBottom.png"
        alt="Banner Bottom"
      />
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.carousel_item} ${
            index === currentSlide ? styles.active : ""
          }`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          <div className={styles.absolute}>
            <hgroup>{slide.h}</hgroup>
            <p>{slide.p}</p>
            <button>Book Now</button>
          </div>
          <img
            style={{ height: "422px" }}
            src={slide.img}
            alt={`Slide ${index + 1}`}
            width={"100%"}
            height={"350px"}
          />
        </div>
      ))}
      <button onClick={prevSlide} className={`${styles.arrow} ${styles.prev}`}>
        {"<"}
      </button>
      <button onClick={nextSlide} className={`${styles.arrow} ${styles.next}`}>
        {">"}
      </button>
    </div>
  );
};

export default TopDiv;
