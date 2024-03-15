import React from "react";
import styles from "./index.module.scss";

const Inhouse = () => {
  return (
    <div className={styles.Inhouse}>
      <div className={styles.left}>
        <div className={styles.absolute}>
          <span>Venue</span>
          <hgroup>
            Book Your <br /> Venue <p>by Venue Expert</p>
          </hgroup>
          <button>Book Now</button>
        </div>
        <img src="/LandingPage/venuebook.png" alt="" />
      </div>
      <div className={styles.right}>
        {[1, 2, 3, 4, 5, 6].map((val) => {
          return (
            <article>
              <div className={styles.absolute}>
                <span>In House Services Venue</span>

                <button>
                  Book Now <span>{">"}</span>
                </button>
              </div>
              <img src="/LandingPage/venuebook.png" alt="" />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Inhouse;
