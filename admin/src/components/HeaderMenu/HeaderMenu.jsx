import React from "react";
import styles from "./HeaderMenu.module.css";
import { Link } from "react-router-dom";

export const HeaderMenu = () => {
  return (
    <div className={styles.wrraper}>
      <Link to="" className={styles.link}>
        <span>User</span>
      </Link>
      <Link to="/products" className={styles.link}>
        <span>Products</span>
      </Link>
      <Link className={styles.link}>
        <span>Orders</span>
      </Link>
      <Link className={styles.link}>
        <span>History</span>
      </Link>
    </div>
  );
};
