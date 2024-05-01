import React, { useState, useEffect } from "react";
import styles from "./Partner.module.css";
import partnersLogo from "../../../../assets/images/PartnersLogo";

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const Partner = () => {
  const [reachLeft, setReachLeft] = useState(true);
  const [reachRight, setReachRight] = useState(false);

  function isScrollAtLeft() {
    return document.getElementById("imageContainer").scrollLeft === 0;
  }

  function isScrollAtRight() {
    const container = document.getElementById("imageContainer");
    return (
      container.scrollLeft === container.scrollWidth - container.clientWidth
    );
  }
  useEffect(() => {
    let scrollContainer = document.querySelector("#imageContainer");
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");

    scrollContainer.addEventListener("wheel", (event) => {
      event.preventDefault();
      scrollContainer.scrollLeft += event.deltaY * 2;
    });

    backBtn.addEventListener("click", () => {
      setReachRight(false);
      if (isScrollAtLeft()) {
        setReachLeft(true);
      }
      scrollContainer.scrollLeft -= 500;
    });

    nextBtn.addEventListener("click", () => {
      setReachLeft(false);
      if (isScrollAtRight()) {
        setReachRight(true);
      }
      scrollContainer.scrollLeft += 500;
    });

    let isDragStart = false,
      prevPagePosition,
      prevScrollLeft;

    scrollContainer.addEventListener("mousedown", (event) => {
      isDragStart = true;
      prevPagePosition = event.pageX;
      prevScrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("mousemove", (event) => {
      if (!isDragStart) return;
      event.preventDefault();
      let difference = event.pageX - prevPagePosition;
      scrollContainer.scrollLeft = prevScrollLeft - difference;
    });

    scrollContainer.addEventListener("mouseup", (event) => {
      isDragStart = false;
    });

    return () => {
      scrollContainer.removeEventListener("wheel", (event) => {});
      backBtn.removeEventListener("click", () => {});
      nextBtn.removeEventListener("click", () => {});
      scrollContainer.removeEventListener("mousedown", () => {});
      scrollContainer.removeEventListener("mousemove", () => {});
      scrollContainer.removeEventListener("mouseup", () => {});
    };
  }, []);

  return (
    <div className={styles.outerBox}>
      <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Meet Our Partners</h1>
      <div className={styles.imageSlider}>
        <FaArrowCircleLeft
          id="backBtn"
          className={`${styles.arrowIcons} ${reachLeft ? styles.disable : ""}`}
        />

        <div id="imageContainer" className={styles.imageContainer}>
          {partnersLogo.map((image, index) => {
            return (
              <div key={index}>
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>

        <FaArrowCircleRight
          id="nextBtn"
          className={`${styles.arrowIcons} ${reachRight ? styles.disable : ""}`}
        />
      </div>
    </div>
  );
};

export default Partner;
