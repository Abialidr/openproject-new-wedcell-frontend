import React from "react";
import styles from "./layout.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.offers}>
        <img src="/Layout/cross.png" alt="" />
        <article>
          50% OFF ON BLACK FRIDAY
          <section>
            <span>2</span>:<span>15</span>:<span>33</span>:<span>32</span>
          </section>
        </article>
      </div>
      <div className={styles.topHead}>
        <div className={styles.inner}>
          <img src="/Layout/logo.svg" alt="" />
          <input type="text" placeholder="Search Venue & Vendors" />
          <article>
            <img src="/Layout/callIcon.png" alt="" />
            <span>
              Have a question?
              <p>586-374-9483</p>
            </span>
          </article>
          <span>
            <button>Register / Login</button>
          </span>
        </div>
      </div>
      <div className={styles.bottomHead}>
        <div className={styles.inner}>
          <article>
            <span>
              Venue <img src="/Layout/dwnarr.png" alt="" />
            </span>
            <span>
              Vendor <img src="/Layout/dwnarr.png" alt="" />
            </span>
            <span>
              Shop Now <img src="/Layout/dwnarr.png" alt="" />
            </span>
          </article>
          <section>
            <img src="/Layout/bth1.png" alt="" />
            <img src="/Layout/bth2.png" alt="" />
            <img src="/Layout/bth3.png" alt="" />
            <img className={styles.del} src="/Layout/bth4.png" alt="" />
          </section>
        </div>
      </div>
    </>
  );
};

export default Header;
