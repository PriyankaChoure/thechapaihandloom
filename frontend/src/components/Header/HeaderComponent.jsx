import React from "react";
import styles from "./HeaderComponent.module.css";

export const HeaderComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src="./chapai_logo.png" alt="logo" className={styles.logo_image} />
      </div>
    </div>
  );
};
