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
      case "song": {
        return (
          <Link to={`/album/${cardDetails.slug}`} className={styles.link}>
            <div className={styles.container}>
              <div className={styles.image_container}>
                <img
                  src={`${cardDetails.image}`}
                  alt="card"
                  className={styles.image}
                />
                <div className={styles.followers}>
                  <span className={styles.Follower_text}>
                    {cardDetails.likes} Likes
                  </span>
                </div>
              </div>
              <p className={styles.title}>{cardDetails.title}</p>
            </div>
          </Link>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  return getCard(type);
};
