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
        <img src="/LandingPage/downloadimg.png" alt="" />
      </div>
    </div>
  );
};

export default Downloads;
