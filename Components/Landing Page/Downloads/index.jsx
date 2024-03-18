import React from "react";
import styles from "./index.module.scss";

const Downloads = () => {
  return (
    <div className={styles.Downloads}>
      <div className={styles.left}>
        <hgroup>Download Wedcell App</hgroup>
        <span>Download app to plan your wedding online.</span>
        <article>
          <img src="/LandingPage/dwngoogle.png" alt="" />
          <img src="/LandingPage/dwnapple.png" alt="" />
        </article>
      </div>
      <div className={styles.right}>
        <img src="/LandingPage/iPhone 12 Pro.png" alt="" />
        <img src="/LandingPage/iPhone 12 Pro-1.png" alt="" />
        <img src="/LandingPage/iPhone 12 Pro-4.png" alt="" />
        <img src="/LandingPage/iPhone 12 Pro-3.png" alt="" />
        <img src="/LandingPage/iPhone 12 Pro-2.png" alt="" />
      </div>
    </div>
  );
};

export default Downloads;
