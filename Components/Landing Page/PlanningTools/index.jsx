import React from "react";
import styles from "./index.module.scss";
const PlanningTools = () => {
  return (
    <div className={styles.PlanningTools}>
      <div className={styles.left}>
        <hgroup>Planning Tools</hgroup>
        <span>
          Entrust us with the honor of orchestrating your wedding day, and let
          us guide you through this journey with grace, professionalism, and
          unparalleled expertise."
        </span>
        <article>
          {[
            { i: "/LandingPage/pt1.png", n: "My Wedding" },
            { i: "/LandingPage/pt2.png", n: "Checklist" },
            { i: "/LandingPage/pt3.png", n: "Vendor Manager" },
            { i: "/LandingPage/pt4.png", n: "Guest List" },
            { i: "/LandingPage/pt5.png", n: "Budget Planner" },
          ].map((val, key) => {
            return (
              <span key={key}>
                <img src={val.i} alt="" />
                {val.n}
              </span>
            );
          })}
        </article>
      </div>
      <img src="/LandingPage/steps.png" alt="" />
      <div className={styles.right}>
        <img src="/LandingPage/ptdemo.png" alt="" />
      </div>
    </div>
  );
};

export default PlanningTools;
