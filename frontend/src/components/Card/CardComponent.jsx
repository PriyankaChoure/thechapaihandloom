import React from "react";
import styles from "./CardComponent.module.css";
import { Link } from "react-router-dom";
// import { SERVER_IMAGE_URL } from "../../apis/productAPI";

export const CardComponent = ({ cardDetails, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "product": {
        return (
          <div className={styles.container}>
            <div className={styles.image_container}>
              <img
                src={cardDetails}
                alt="card"
                // crossOrigin="Anonymous"
                className={styles.image}
              />
            </div>
          </div>
        );
      }
      case "shop": {
        return (
          <div className={styles.shopwrapper}>
            <div className={styles.image_wrapper}>
              <img src={cardDetails} alt="card" className={styles.image} />
            </div>
          </div>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  return getCard(type);
};
