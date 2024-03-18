"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { Icon } from "@iconify/react";

const Rating = ({ rating }) => {
  const integerRating = Math.floor(rating);
  const notfinal = rating - integerRating;
  const final = notfinal >= 0.5 ? Math.ceil(rating) : integerRating;
  return (
    <div>
      <span>{rating}</span>
      {Array(final).fill(
        <img src="/Card/star.png" alt="" key={integerRating} />
      )}
    </div>
  );
};
const HeartIcon = ({ wishlist = false }) => {
  let wishlists = wishlist;
  const [filled, setFilled] = useState(wishlist);

  const toggleFilled = () => {
    setFilled(!filled);
    wishlists = true;
  };
  return (
    <span
      onClick={toggleFilled}
      onMouseEnter={() => setFilled(true)}
      onMouseLeave={() => {
        if (!wishlists) setFilled(false);
      }}>
      <Icon
        width={"30px"}
        icon={`ant-design:heart-${filled ? "filled" : "outline"}`}></Icon>
    </span>
  );
};

const AllVendorCards = () => {
  return (
    <div className={styles.AllVendorCards}>
      <div className={styles.cardCap}>
        <img src="/Card/cap.png" alt="" />
        <span>10% Off</span>
      </div>
      <div className={styles.imgContainer}>
        <HeartIcon />

        <img src="/Card/democard.png" alt="" />
      </div>
      <article>
        <span>Purple Unicorn Wedding planner</span>
        <Rating rating={5}></Rating>
      </article>
      <section>
        <span>
          <img src="/Card/loc.png" alt="" />
          Ranchi
        </span>
        <hgroup>
          Planning & Decor
          <span>Wedding Decor</span>
        </hgroup>
      </section>
      <div className={styles.foot}>
        <hgroup>
          ₹ 200000 <span>/ Event</span>
        </hgroup>
        <span>
          <img src="/Card/call.png" alt="" />
        </span>
      </div>
    </div>
  );
};

export default AllVendorCards;
