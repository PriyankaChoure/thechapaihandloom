import React from "react";
import styles from "./StaticPage.module.css";
import { useParams } from "react-router-dom";
import ContactComponent from "../components/Contact/ContactComponent";
import AboutUsComponent from "../components/AboutUs/AboutUsComponent";

const StaticPage = () => {
  const { elementName } = useParams();
  const renderComponent = (element) => {
    switch (element) {
      case "contactus":
        return <ContactComponent />;
      case "aboutus":
        return <AboutUsComponent />;
      default:
        return <div></div>;
    }
  };
  return <div className={styles.wrapper}>{renderComponent(elementName)}</div>;
};

export default StaticPage;
