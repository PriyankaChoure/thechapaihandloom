import React from "react";
import styles from "./HeaderComponent.module.css";
import Herobanner from "../Herobanner/Herobanner";
import { Link } from "react-router-dom";
export const HeaderComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Link to="/">
          <img
            src={require("../../assets/thechapailogo.jpeg")}
            alt="logo"
            className={styles.logo_image}
          />
        </Link>
      </div>
      <Herobanner />
    </div>
  );
};
