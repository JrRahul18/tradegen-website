import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Benefits.module.css";
import benefitsData from "../../../../assets/images/BenefitsData";
import blob from "./Blob1.png"

const Benefits = () => {
  const [idx, setIdx] = useState(0);
  const indexHandler = (index) => {
    setIdx(index);
  };

  useEffect(() => {
    Aos.init({

    });
  }, []);
  return (
    <div className={styles.outerBox} style={{backgroundImage: `url(${blob})`}}>
      <div className={styles.leftContainer}>
        <div className={styles.headingContainer}>
          <h1 data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">Benefits We Offer</h1>
        </div>
        <div className={styles.textContainer}>
          {benefitsData.map((item, index) => {
            return (
              <div data-aos="slide-right" data-aos-delay="500" data-aos-duration="0"
                className={styles.textBox}
                onClick={() => {
                  indexHandler(index);
                }}
                key={index}
              >
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.imageContainer} data-aos="slide-left" data-aos-delay="800" data-aos-duration="1500">
          <img
            className={styles.image}
            
            src={benefitsData[idx].image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
