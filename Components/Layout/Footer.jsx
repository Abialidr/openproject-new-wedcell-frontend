"use client";
import React from "react";
import styles from "./layout.module.scss";
import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <article>
            <hgroup>Destination Wedding</hgroup>
            {[
              "Agra",
              "Delhi",
              "Jaipur",
              "Udaipur",
              "Jodhpur",
              "Jim Corbett",
              "Masoori",
            ].map((val, key) => {
              return <span key={key}>{val}</span>;
            })}
          </article>
          <article>
            <hgroup>Venue</hgroup>
            {[
              "Agra",
              "Delhi",
              "Jaipur",
              "Udaipur",
              "Jodhpur",
              "Jim Corbett",
              "Masoori",
            ].map((val, key) => {
              return <span key={key}>{val}</span>;
            })}
          </article>
          <article>
            <hgroup>Vendor</hgroup>
            {[
              "Agra",
              "Delhi",
              "Jaipur",
              "Udaipur",
              "Jodhpur",
              "Jim Corbett",
              "Masoori",
            ].map((val, key) => {
              return <span key={key}>{val}</span>;
            })}
          </article>
          <article>
            <hgroup>Important Links</hgroup>
            {[
              "Home",
              "Blog",
              "WedCell Institute",
              "Get Jobs",
              "Hire freelancer",
            ].map((val, key) => {
              return <span key={key}>{val}</span>;
            })}
          </article>
          <article>
            <hgroup>Contact Us</hgroup>
            {[
              { n: "FaceBook", i: "ant-design:facebook-filled" },
              { n: "Instagram", i: "ri:instagram-line" },
              { n: "LinkedIn", i: "mdi:linkedin" },
              { n: "Pinterest", i: "ri:pinterest-fill" },
              { n: "Youtube", i: "bi:youtube" },
            ].map((val, key) => {
              return (
                <span key={key}>
                  <Icon width={"23px"} icon={val.i}></Icon> {val.n}
                </span>
              );
            })}
          </article>
        </div>
        <div className={styles.right}>
          <hgroup>List You Buisness</hgroup>
          <p>
            Are you vendor ? List your Venue and Service get more from listing
            business.
          </p>
          <button>Login for Business</button>
          <button>Student Login</button>
        </div>
      </div>
      <span>
        Terms and Conditions|Privacy Policy &nbsp;&nbsp;&nbsp; © 2018 Wedcell. All
        Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
