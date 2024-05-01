import React from "react";
import styles from "./AboutUs.module.css";
import invertStart from "./invertStart.png";
import invertEnd from "./invertEnd.png";
import aboutUsImage from "./aboutUsImg.png";
import teamData from "./TeamData";

const AboutUs = () => {
  return (
    <div className={styles.outerContainer}>
      <h1 data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">About Us</h1>

      <div className={styles.row1Container} >
        <div className={styles.imageBox} data-aos="fade-up-right" data-aos-delay="1000" data-aos-duration="1000">
          <img src={aboutUsImage} alt=""  />
        </div>
        <div className={styles.dataBox}  data-aos="fade-down-left" data-aos-delay="800" data-aos-duration="1000">
          <div className={styles.invertedContainer1}>
            <img src={invertStart} className={styles.invertImage} alt="" />
          </div>
          <div className={styles.textBox}>
            <p>
              TradeGen is your all-in-one trading and stock exchange companion,
              designed to revolutionize the way you trade and invest in
              financial markets. With TradeGen, you can access real-time market
              data, powerful trading tools, and personalized insights to make
              informed decisions and stay ahead of the curve.
            </p>
            <p>
              TradeGen offers a user-friendly interface, customizable
              dashboards, and a wide range of trading options to suit your
              individual needs. Our goal is to empower you to take control of
              your financial future and achieve your investment goals with
              confidence.
            </p>
            <p className={styles.tagLine}>
              Join the <b>TradeGen</b> community today and experience the future of
              trading and stock exchange!
            </p>
          </div>
          <div className={styles.invertedContainer2}>
            <img src={invertEnd} className={styles.invertImage} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.row2Container}>
        <h1 data-aos="flip-up" data-aos-delay="200" data-aos-duration="1000">Meet Our Team</h1>
        <div className={styles.memberContainer} data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000">
          {teamData.map((member, index)=>{
            return(<div key={member.id} className={styles.memberCard}>
              <div className={styles.profileBox}>
                <img className={styles.profileImg} src={member.profileImage} alt="" />
              </div>
              <div className={styles.memberInfo}>
                <p className={styles.memberName}>{member.name}</p>
                <p className={styles.memberPosition}>{member.position}</p>
              </div>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
