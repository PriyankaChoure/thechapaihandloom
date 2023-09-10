import React from "react";
import { Link } from "react-router-dom";
import styles from "./FooterComponent.module.css";

const FooterComponent = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.text_uppercase}>welcome to The Chapai Handloom</h3>
      <div className={styles.footer_list_container}>
        <div className={styles.standard_list_container}>
          <h3 className={styles.standard_title}>Populer search</h3>
          <ul className={styles.standard_list}>
            <li className={styles.standard_list_item}>
              <Link to="#" className={styles.link}>
                Wedding Collection
              </Link>
            </li>
            <li className={styles.standard_list_item}>
              <Link to="#" className={styles.link}>
                Silk Saree
              </Link>
            </li>
            <li className={styles.standard_list_item}>
              <Link to="#" className={styles.link}>
                Silk Suit
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.standard_list_container}>
          <h3 className={styles.standard_title}>Quick Links</h3>
          <ul className={styles.standard_list}>
            <li className={styles.standard_list_item}>
              <Link to="/staticpage/aboutus" className={styles.link}>
                About us
              </Link>
            </li>
            <li className={styles.standard_list_item}>
              <Link to="/staticpage/contactus" className={styles.link}>
                Contact us
              </Link>
            </li>
            <li className={styles.standard_list_item}>
              <Link to="#" className={styles.link}>
                Track your order
              </Link>
            </li>
            <li className={styles.standard_list_item}>
              <Link to="#" className={styles.link}>
                Media
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.standard_list_container}>
          <h3 className={styles.standard_title}>Customer Services</h3>
          <ul className={styles.standard_list}>
            <li className={styles.standard_list_item}>
              <Link to="#" className={styles.link}>
                Shipping Policy
              </Link>
            </li>
            <li className={styles.standard_list_item}>
              <Link to="#" className={styles.link}>
                Return Policy
              </Link>
            </li>
            <li className={styles.standard_list_item}>
              <Link to="#" className={styles.link}>
                Return order
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
