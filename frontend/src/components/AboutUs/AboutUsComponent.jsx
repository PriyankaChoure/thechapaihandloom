import React, { useEffect, useState } from "react";
import { fetchShopDetails } from "../../apis/shopAPI";
import { CardComponent } from "../Card/CardComponent";
import styles from "./AboutUsComponent.module.css";
import { Link } from "react-router-dom";

const AboutUsComponent = () => {
  return (
    <div className={styles.wrapper}>
      <h1>The Chapai Handloom</h1>
      <h2 className={styles.tagLine}>
        where every thread is a story, and every creation is a masterpiece
      </h2>
      <p>
        At The Chapai Handloom, we take pride in weaving stories of tradition,
        craftsmanship, and timeless elegance through our exquisite handloom
        creations. Nestled in the heart of Maheshwar, Madhya Pradesh, our
        offline store is a haven for those who appreciate the artistry and
        authenticity of handwoven textiles.<br></br>
        <Link to="/staticpage/storedetails">ShopGallery</Link>
      </p>
      <h2>Our Legacy</h2>
      <p>
        The Chapai Handloom is more than just a business; it's a celebration of
        India's diverse textile traditions. Our offline shop in Maheshwar serves
        as a hub where culture and creativity seamlessly intertwine.
      </p>
      <h2>Artistry in Every Thread</h2>
      <p>
        The Chapai Handloom proudly engages in block printing with natural
        colors on sarees, adding a touch of nature's palette to every piece. Our
        meticulous attention to detail ensures that each creation is not just a
        piece of clothing but a work of art that reflects the beauty of Indian
        textiles.
      </p>
      <h2>Our Commitment</h2>
      <p>
        We are not just in the business of selling clothes; we are here to
        foster a love for handloom, celebrate craftsmanship, and empower
        artisans.
      </p>
      <h2>Visit Us</h2>
      <p>
        Step into our store in Maheshwar, MP, and immerse yourself in the world
        of handloom marvels. Let the touch of tradition and the essence of
        artistry accompany you on your journey of style and elegance.<br></br>
        <Link to="/staticpage/storedetails">ExploreStore</Link>
      </p>
    </div>
  );
};

export default AboutUsComponent;
