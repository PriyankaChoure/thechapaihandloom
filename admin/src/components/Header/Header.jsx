import React from "react";
import styles from "./Header.module.css";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";

export const Header = () => {
  return (
    <>
      <div className={styles.wrraper}>
        <h2>Welcome Admin Panel</h2>
        <div className={styles.user_detail}>
          <h4>{localStorage.getItem("email")}</h4>
          <button className={styles.logout}>Logout</button>
        </div>
      </div>
      <HeaderMenu />
    </>
  );
};
