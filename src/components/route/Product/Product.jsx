import React, { useEffect, useState } from 'react'
import styles from "./Product.module.css"
import  { mobileFeatures }  from './ProductData'
import appDesign from "./images/app-design-new.png"
import { FaDownload } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { MdWorkspacePremium } from "react-icons/md";
import { useSpring, animated } from '@react-spring/web'
import StatsAnimation from './StatsAnimation';
import statsBG from "./images/statsBG.jpg"
import Aos from 'aos';

// import { FaUserCheck } from "react-icons/fa";


const Product = () => {
    Aos.init()
    const [count, setCount]=useState()
    // useEffect(() => {
    //     Aos.init({

    //     });
    //   }, []);
    const midpoint = Math.ceil(mobileFeatures.length/2);
    const mobileFeatures1 = mobileFeatures.slice(0, midpoint);
    const mobileFeatures2 = mobileFeatures.slice(midpoint);
  return (
    <div className={styles.outerContainer}>
        <div className={styles.box1}>
            <h1 data-aos="slide-up" data-aos-delay="200" data-aos-duration="500">Our App Features</h1>
            <div className={styles.dataBox}>
                <div className={styles.dataBox1}>
                    {mobileFeatures1.map((item, index)=>{
                        return(<div key={item.id} id={item.id} data-aos="fade-down" className={styles.featureBox}  >
                            <div className={styles.textBox} data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
                                <span>{item.featureTitle}</span>
                                <p>{item.feature}</p>
                            </div>
                            <div className={styles.iconBox} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                <img src={item.featureImage} alt="" />
                            </div>
                        </div>)
                    })}
                </div>
                <div className={styles.imageContainer}>
                    <img src={appDesign} alt="" />
                </div>
                <div className={styles.dataBox2}>
                    {mobileFeatures2.map((item, index)=>{
                        return(<div key={item.id} id={item.id} className={styles.featureBox} data-aos="fade-down">
                            <div className={styles.textBox} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                <span>{item.featureTitle}</span>
                                <p>{item.feature}</p>
                            </div>
                            <div className={styles.iconBox} data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
                                <img src={item.featureImage} alt="" />
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </div>
        <div className={styles.box2} style={{backgroundImage: `url(${statsBG})`}} >
            <h1 className={styles.box2Heading} data-aos="fade-up" data-aos-duration="400" data-aos-delay="300">Facts 'n Stats</h1>
            <div className={styles.factBoxContainer}>
                <div className={styles.insideBox}  data-aos="fade-right" data-aos-delay="100" >
                    <div className={styles.downloadImage}>
                        <FaDownload className={styles.statsIcon}/>
                    </div>
                    <div className={styles.numberData}><StatsAnimation target={120000}/></div>
                    <div className={styles.statsName}>Downloads</div>
                </div>
                <div className={styles.insideBox}  data-aos="flip-up" data-aos-delay="100">
                    <div className={styles.membershipImage}>
                        <MdWorkspacePremium className={styles.statsIcon}/>
                    </div>
                    <div className={styles.numberData}><StatsAnimation target={35000}/></div>
                    <div className={styles.statsName}>Members</div>

                </div>
                <div className={styles.insideBox}  data-aos="fade-left" data-aos-delay="100">
                    <div className={styles.usersImage}>
                        <FaUsersGear className={styles.statsIcon}/>
                    </div>
                    <div className={styles.numberData}><StatsAnimation target={70000}/></div>
                    <div className={styles.statsName}>Users</div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product