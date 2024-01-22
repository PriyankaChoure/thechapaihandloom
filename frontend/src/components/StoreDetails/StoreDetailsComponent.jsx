import React, { useEffect, useState } from "react";

import styles from "./StoreDetailsComponent.module.css";
import { fetchShopDetails } from "../../apis/shopAPI";
import { CardComponent } from "../Card/CardComponent";
const StoreDetailsComponent = () => {
  const [shopdetail, setShopDetail] = useState({});
  const getShopDetails = async () => {
    const responceData = await fetchShopDetails();
    setShopDetail(responceData.data);
    console.log(responceData.data);
  };
  useEffect(() => {
    getShopDetails();
  }, []);
  return (
    <div>
      {shopdetail.length > 0 && (
        <div className={styles.wrapper}>
          <h1>{shopdetail[0].title}</h1>
          <h2>{shopdetail[0].desc}</h2>
          <h2>Shop View...</h2>
          <div className={styles.imagewrapper}>
            {shopdetail[0].imageList.map((imageURL) => (
              <CardComponent cardDetails={imageURL} type={"shop"} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreDetailsComponent;
