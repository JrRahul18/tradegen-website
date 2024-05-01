import React from "react";
import customerData from "./CustomerData";
import styles from "./CustomerReview.module.css";
import bg1 from "./bgAbstract.png"

import { Swiper, SwiperSlide } from "swiper/react";
import "./CustomerReview.css"

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";


const CustomerReview = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1200:{
      slidesPerView:3
    }

  };
  return (
    <div className={styles.outerContainer} style={{ backgroundImage: `url(${bg1})` }}>
      <div className={styles.headingContainer}>
        <h1>Customer Reviews</h1>
      </div>
      <div className={styles.reviewSlider}>
        <Swiper
        breakpoints={breakpoints}
          centeredSlides={true}
          spaceBetween={40}
         pagination={{ clickable: true }}
          style={{  paddingBottom: "3rem" }}
          modules={[Pagination]}
          className={styles.mySwiper}
        >
          {customerData.map((customer, index)=>{
            return(
            // <div className={styles.reviewCard}>
              <SwiperSlide key={customer.id} className={styles.reviewCard}>
                <div className={styles.imageBox}>
                  <img className={styles.profileImg} src={customer.profileImage} alt="" />
                </div>
                <div className={styles.infoBox}>
                  <p className={styles.username}>{customer.username}</p>
                  <p className={styles.date}>Member since {customer.installDate}</p>
                  <p className={styles.review}>{customer.review}</p>
                </div>
              </SwiperSlide>

            )
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReview;
