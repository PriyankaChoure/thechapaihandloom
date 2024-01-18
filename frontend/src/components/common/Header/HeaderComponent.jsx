import React from "react";
import styles from "./HeaderComponent.module.css";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Logo } from "./Logo";
import { HeaderNavigation } from "../Navigation/HeaderNavigation";
import Herobanner from "../../Herobanner/Herobanner";
export const HeaderComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo_wrapper}>
        <Logo />
        <div className={styles.action_area}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>G</Avatar>
          <LocalMallOutlinedIcon fontSize="large" />
        </div>
      </div>
      <HeaderNavigation />
      <Herobanner />
    </div>
  );
};
