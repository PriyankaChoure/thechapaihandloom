import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { CarouselLeftSwiper } from "./CarouselLeftSwiper";
import { CarouselRightSwiper } from "./CarouselRightSwiper";

export const CarouselComponent = ({ dataList, renderComponetent }) => {
  const swiper = useSwiper();
  const [isOnlyHeroImage, setIsOnlyHeroImage] = useState(true);
  useEffect(() => {
    // swiper.slideTo(0, 0, 0);
    if (dataList.length > 1) {
      setIsOnlyHeroImage(false);
    }
  });
  console.log("in swiper - ", isOnlyHeroImage);

  return (
    <Swiper
      // spaceBetween={40}
      slidesPerView={"auto"} //overwrite swiper-slide css in index.js if sliderperview is auto
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      initialSlide={1}
    >
      {!isOnlyHeroImage && <CarouselLeftSwiper />}
      {dataList &&
        dataList.map((data) => (
          <SwiperSlide className={styles.swiper_slide}>
            {renderComponetent(data)}
          </SwiperSlide>
        ))}
      {!isOnlyHeroImage && <CarouselRightSwiper />}
    </Swiper>
  );
};
