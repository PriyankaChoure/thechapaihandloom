import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
export const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <Link to="/" className={styles.logo_link}>
        <img
          src={require("../../../assets/images/logo.png")}
          alt="logo"
          className={styles.logo_image}
        />
      </Link>
    </div>
  );
};
