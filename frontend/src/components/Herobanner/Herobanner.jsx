import React from "react";
import styles from "./Herobanner.module.css";

const Herobanner = () => {
  return (
    <div className={styles.banner}>
      <img
        src={require("../../assets/images/banner1.jpeg")}
        alt="HeroImage"
        className={styles.heroimage}
      />
    </div>
  );
};

export default Herobanner;
