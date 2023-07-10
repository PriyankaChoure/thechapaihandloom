import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import styles from "./AsideMenu.module.css";
import { Box, List, ListItem } from "@mui/material";

// const drawerWidth = 150;
export const AsideMenu = ({ menu }) => {
  console.log(menu);

  return (
    <aside className={styles.wrapper}>
      <List className={styles.list}>
        {menu.map((menuItem) => (
          <ListItem className={styles.listItem}>
            <Link to="/create" className={styles.link}>
              <span>{menuItem}</span>
            </Link>
          </ListItem>
        ))}
      </List>
    </aside>
  );
};
