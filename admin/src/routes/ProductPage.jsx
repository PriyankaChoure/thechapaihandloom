import React from "react";
import { Header } from "../components/Header/Header";
import { AsideMenu } from "../components/AsideMenu/AsideMenu";
import { ASIDEMENU } from "../config/config";
import styles from "./ProductPage.module.css";
import { Outlet } from "react-router-dom";
export const ProductPage = () => {
  // console.log(ASIDEMENU);
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        {/* <h2>Product page</h2> */}
        <AsideMenu menu={ASIDEMENU.products} />
        <Outlet />
      </div>
    </div>
  );
};
