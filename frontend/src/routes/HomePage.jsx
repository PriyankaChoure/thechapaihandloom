import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { fetchAllProductList } from "../apis/productAPI";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  // const getData = () => {
  //   fetch("./data/data.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setProducts(res);
  //       // return res;
  //     });
  // };
  const getProductList = async () => {
    try {
      const responseData = await fetchAllProductList();
      console.log(responseData.data);
      setProducts(responseData.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProductList();
  }, []);
  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <div className={styles.card_wrapper}>
          <Link to={`/product/${product._id}`}>
            <img
              src={product.heroImage}
              alt="product"
              // crossOrigin="Anonymous"
              className={styles.product_image}
            ></img>
            <span>{product.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};
