"use client";
import React, { useState } from "react";
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

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
      <div className={styles.carousel}>
        <img
          className={styles.bannerBtm}
          src="/LandingPage/bannerBottom.png"></img>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={styles.carousel_item}
            style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
            <div className={styles.absolute}>
              <hgroup>{slide.h}</hgroup>
              <p>{slide.p}</p>
              <button>Book Now</button>
            </div>
            <img
              style={{ height: "422px" }}
              src={slide.img}
              width={"100%"}
              height={"350px"}
            />
          </div>
        ))}
        {currentSlide === 0 ? (
          <></>
        ) : (
          <button
            onClick={prevSlide}
            className={`${styles.arrow} ${styles.prev}`}>
            {"<"}
          </button>
        )}
        {currentSlide === slides.length - 1 ? (
          <></>
        ) : (
          <button
            onClick={nextSlide}
            className={`${styles.arrow} ${styles.next}`}>
            {">"}
          </button>
        )}
      </div>
    </>
  );
};

export default TopDiv;
