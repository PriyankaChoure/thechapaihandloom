import React from "react";
import styles from "./HeaderNavigation.module.css";
import { Link } from "react-router-dom";

export const HeaderNavigation = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.navbar}>
        <li className={styles.nav_item}>
          <Link to="/" className={styles.link}>
            New Arrival
          </Link>{" "}
        </li>
        <li className={styles.nav_item}>
          <Link to="/" className={styles.link}>
            Happy Customer
          </Link>{" "}
        </li>
        <li className={styles.nav_item}>
          <Link to="/" className={styles.link}>
            Blogs
          </Link>{" "}
        </li>
        <li className={styles.nav_item}>
          <Link to="/" className={styles.link}>
            About Us
          </Link>{" "}
        </li>
        <li className={styles.nav_item}>
          <Link to="/" className={styles.link}>
            Contact Us
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
};
