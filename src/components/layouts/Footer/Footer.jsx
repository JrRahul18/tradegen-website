import React from "react";
import styles from "./Footer.module.css";
import QueryBox from "./QueryBox/QueryBox";
import logo from "./TradeGen.png";
import { CiCircleChevRight } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import bg1 from "./newsLetterBGnew.jpg"
import bg2 from "./newsLetterBG2.jpg"

const Footer = () => {
  return (
    <div className={styles.outerContainer}>
      <QueryBox />
      <div className={styles.outerFooterContainer}>
        <div className={styles.row1Box}>
          <div className={styles.box1}>
            <div className={styles.imageContainer}>
              <img src={logo} alt="" />
            </div>
            <div className={styles.headingBox}>
              <h3>TradeGen</h3>
              <p>Join Future of Algorithmic Crypto Trading Strategies</p>
            </div>
          </div>
          <div className={styles.box2}>
            <div className={styles.linkBox1}>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <CiCircleChevRight size={40} className={styles.pointerIcon} />
                  <a href="">About Us</a>
                </li>
                <li>
                  <CiCircleChevRight size={40}  className={styles.pointerIcon} />

                  <a href="">Services</a>
                </li>
                <li>
                  <CiCircleChevRight size={40}  className={styles.pointerIcon} />

                  <a href="">Product</a>
                </li>
                <li>
                  <CiCircleChevRight size={40}  className={styles.pointerIcon} />

                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className={styles.linkBox2}>
              <h3>Support</h3>
              <ul>
                <li>
                  <CiCircleChevRight size={40}  className={styles.pointerIcon} />

                  <a href="">FAQs</a>
                </li>
                <li>
                  <CiCircleChevRight size={40}  className={styles.pointerIcon} />

                  <a href="">Terms and Conditions</a>
                </li>
                <li>
                  <CiCircleChevRight size={40}  className={styles.pointerIcon} />

                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <CiCircleChevRight size={40}  className={styles.pointerIcon} />

                  <a href="">Update</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.box3} style={{backgroundImage: `url(${bg1})`}}>
            <div className={styles.newsLetterContainer}>
              <h1>Subscribe!</h1>
              <p>Subscribe to our newsletter to stay updated for latest news and best stock deals and prices.</p>
              <form className={styles.formContainer} action="" onSubmit={(event) =>{event.preventDefault()}}>
                <input className={styles.nameInput} type="text" placeholder="Enter your name"/>
                <input className={styles.emailInput}  type="text" placeholder="Enter your email"/>
                <div className={styles.buttonBox}>
                  <button className={styles.myButton}>Subscribe!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className={styles.hrLine} />
        <div className={styles.row2Box}>
          <h1>Follow Us On</h1>
          <div className={styles.socialIconBox}>
            <FaLinkedin className={styles.socialIcons} />
            <FaInstagramSquare className={styles.socialIcons}/>
            <FaSquareXTwitter className={styles.socialIcons}/>
            <FaGithubSquare className={styles.socialIcons}/>
          </div>
          <p>Copyright &copy; 2024. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
