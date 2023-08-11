import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_IMAGE_URL, fetchProductByID } from "../apis/productAPI";
import { useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import styles from "./ProductPage.module.css";
import { CarouselComponent } from "../components/Carousel/CarouselComponent";
import { CardComponent } from "../components/Card/CardComponent";

export const ProductPage = () => {
  const [productDetail, setProductDetail] = useState({});
  const [productImages, setProductImages] = useState([]);
  const { id } = useParams();
  const getProductDetail = async () => {
    try {
      const responseData = await fetchProductByID(id);
      let productData = responseData.data;
      setProductDetail(productData);
      if (productData.imageList.length > 0) {
        setProductImages([productData.heroImage, ...productData.imageList]);
      } else {
        setProductImages([productData.heroImage]);
      }
      console.log("in product page", responseData.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      {productDetail ? (
        <div className={styles.wrapper}>
          <div className={styles.images_wrapper}>
            <CarouselComponent
              dataList={productImages}
              renderComponetent={(item) => (
                <CardComponent cardDetails={item} type={"product"} />
                // <img
                //   src={SERVER_IMAGE_URL + item}
                //   alt="product"
                //   crossOrigin="Anonymous"
                //   className={styles.heroImage}
                // ></img>
              )}
            />
          </div>
          <div className={styles.details_wrapper}>
            <header>
              <h1 className={styles.product_caption}>{productDetail.title}</h1>
              <h3 className={styles.product_description}>
                {productDetail.desc}
              </h3>
            </header>
            <div className={styles.product_details_container}>
              <div className={styles.group}>
                <span className={styles.details_caption}>category : </span>
                <h4 className={styles.details_data}>
                  {productDetail.category}
                </h4>
              </div>

              <div className={styles.group}>
                <span className={styles.details_caption}>
                  Available colors :{" "}
                </span>
                <h4 className={styles.details_data}>{productDetail.color}</h4>
              </div>

              <div className={styles.group}>
                <span className={styles.details_caption}>price : </span>
                <h4 className={styles.details_data}>{productDetail.price}</h4>
              </div>
              <div className={styles.group}>
                <span className={styles.details_caption}>SKU : </span>
                <h4 className={styles.details_data}>{productDetail.sku}</h4>
              </div>
            </div>
            <div className={styles.purchase_container}>
              <h3>To Purches This Item -</h3>
              <a
                href="https://api.whatsapp.com/send?phone=9826315825"
                target="_blank"
                className={styles.whastapp_Button}
                alt="whatsapp"
              >
                Connect on Whatsapp
                {/* <WhatsAppIcon sx={{ fontSize: 60 }} color="primary" /> */}
                <img
                  className={styles.whatsapp_image}
                  src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg"
                  alt="whatsapp"
                ></img>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p>{productDetail.heroImage}</p>
      )}
    </div>
  );
};
// he decided to he will eat healthy fruits and he wil eat the green leaves then he again try to beat the hunter but he can not beat again
// then decided to do exsercise and jogging and he again try to beat hunter and he saved the chita
