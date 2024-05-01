import React, { useState, useEffect } from "react";
import Aos from "aos";
import styles from "./Home.module.css";
import coin from "../../../assets/images/bitcoin.png";
import bag from "../../../assets/images/bag.png";
import bank from "../../../assets/images/bank.png";
import locker from "../../../assets/images/locker.png";
import Partner from "./Partner/Partner";
import Benefits from "./Benefits/Benefits";
import FAQ from "./FAQs/FAQ";
import logo from "../../../assets/images/Logo.png";
import { HashLink } from "react-router-hash-link";
import StockData from "./StockData/StockData";
import CustomerReview from "./CustomerReview/CustomerReview";
// import box2BG from "./box2CardBG.jpg"
import bkg2 from "./bkg2.jpg"

const Home = () => {
  const [idx, setIdx] = useState(0);
  const bgArray = [
    "https://i.pinimg.com/originals/de/2e/30/de2e30ae755cfee42e24935cddad5c8f.jpg",
    "https://wallpapers.com/images/hd/stock-market-dollar-prices-and-percentage-tm030jf9o3kl6k5p.jpg",
    "https://t4.ftcdn.net/jpg/04/26/60/79/360_F_426607986_cSvQ1iGMFTSWu3Jmc38c2riYSZxq91Gb.jpg",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    "https://pikwizard.com/pw/small/2486e5bd4ba833c3fad05fef4ee40e1e.jpg",
    "https://thumbs.dreamstime.com/b/coins-stock-charts-stock-market-trading-graph-candlestick-chart-financial-investment-concept-website-header-banner-coins-stock-143603999.jpg",
  ];
  var i = 0;
  var text = " Join Future of Algorithmic Crypto Trading Strategies.";
  var speed = 80;
  function typeEffect() {
    if (i < text.length) {
      if (document.getElementById("subHeading") != null) {
        document.getElementById("subHeading").innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(typeEffect, speed);
    }
  }
  useEffect(() => {
    document.getElementById("subHeading").innerHTML = "";
    typeEffect();
    return () => {
      if (document.getElementById("subHeading") != null) {
        document.getElementById("subHeading").innerHTML = "";
      }
    };
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1500, // animation duration
      easing: "ease", // easing for animation
    });
    const interval = setInterval(() => {
      setIdx((prevIndex) => (prevIndex + 1) % bgArray.length);
    }, 5000);
    // console.log(idx);

    return () => clearInterval(interval);
  }, [idx]);
  const indexHandler = (index) => {
    setIdx(index);
  };

  return (
    <div className={styles.box}>
      <div className={styles.box1} style={{ backgroundImage: `url(${bgArray[idx]})` }}>
        <div className={styles.titleContainer}>
          <div className={styles.imageBox}>
            <img className={styles.logo} src={logo} alt="" />
          </div>
          <div className={styles.headingBox}>
            <h1 className={styles.heading}>TRADE Genius</h1>
            <h2 id="subHeading" className={styles.subHeading}>Join Future of Algorithmic Crypto Trading Strategies</h2>
          </div>
         
        </div>
        <div className={styles.buttonBox}>
          <HashLink className={styles.btn} to={"#OurServices"}><p></p><span>Explore More</span></HashLink>
        </div>
        <div className={styles.backgroundBoult}>
          {bgArray.map((item, index) => {
            return (
              <span
                key={index}
                className={styles.pointerSpan}
                onClick={() => indexHandler(index)}
              > </span>
            );
          })}
        </div>
      </div>

      <div className={styles.box2} id="OurServices">
        <div className={styles.box2Container}>
          <h1  data-aos="flip-left" data-aos-delay="300" data-aos-duration="500">Our Services</h1>
          <div className={styles.cardContainer}>
            <div className={styles.cardBox} style={{backgroundImage: `url(${bkg2})`}}  data-aos="slide-left" data-aos-delay="500" data-aos-duration="1000">
              <img src={coin} alt="" />
              <h3>Mobile Payment Make Easy</h3>
              <p>Add new, trending and rare artwork to your collection</p>
            </div>
            <div className={styles.cardBox} style={{backgroundImage: `url(${bkg2})`}}  data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000">
              <img src={locker} alt="" />
              <h3>Maintain the Identity</h3>
              <p>
                Makes your identity protected. Now transfer without hesitation
              </p>
            </div>
            <div className={styles.cardBox} style={{backgroundImage: `url(${bkg2})`}}  data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000">
              <img src={bank} alt="" />

              <h3>Secure Money</h3>
              <p>Transactions with others are always promised to be secured</p>
            </div>
            <div className={styles.cardBox} style={{backgroundImage: `url(${bkg2})`}}  data-aos="slide-right" data-aos-delay="500" data-aos-duration="1000">
              <img src={bag} alt="" />

              <h3>Lifetime Free Transactions</h3>
              <p>Unlimited transactions from account lifetime</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.box3}>
        <Partner />
      </div>
      <div className={styles.box4}>
        <Benefits />
      </div>
      <div className={styles.box5}>
        <FAQ />
      </div>
      <div className={styles.box6}>
        {/* <StockData/> */}
      </div>
      <div className={styles.box6}>
        <CustomerReview/>
      </div>
    </div>
  );
};

export default Home;
