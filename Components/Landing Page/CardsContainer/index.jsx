import React from "react";
import styles from "./index.module.scss";
import AllVendorCards from "../../Cards/AllVendorCards";
import VenueCard from "../../Cards/VenueCard";

const CardsContainer = ({ type }) => {
  return (
    <div className={styles.CardsContainer}>
      <hgroup>Popular in {type == "Venue" ? "Hotel" : "Decor"}</hgroup>
      {type == "Venue" ? (
        <article>
          <VenueCard />
          <VenueCard />
          <VenueCard />
        </article>
      ) : (
        <article>
          <AllVendorCards />
          <AllVendorCards />
          <AllVendorCards />
        </article>
      )}
    </div>
  );
};

export default CardsContainer;
