import React from "react";
import styles from "./Header.module.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../../assets/images/Logo.png"



const Header = () => {
  // function showSidebar (){
  //   const getSidebar = document.querySelector('.navbarHamburger');
  //   console.log("Hello")
  //   getSidebar.styles.display = 'flex'
  // }
  const scrollTopHandler = () => {
    window.scrollTo(0, 0);

  };
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () =>{
    setSidebar((prevState) => !prevState);
    console.log(sidebar)
  }

  return (
    
    //   <ReactNavbar {...styling}/>
    <div id="navbar" className={styles.outerBox}>
        <nav className={styles.sidebarHam} style={{ right: sidebar ? "0" : "-200vw" }}>
            <ul><IoCloseSharp onClick={showSidebar} className={styles.crossIcon}/></ul>
            <ul className={styles.logoNew}><img className={styles.sidebarLogo} src={LogoImage} alt=""/></ul>
            <ul className={styles.navUlNew}>
                <li><Link onClick={()=>{scrollTopHandler();showSidebar();}} to={"/"}>Home</Link></li>
                <li><Link onClick={()=>{scrollTopHandler();showSidebar();}} to={"/about-us"}>About Us</Link></li>
                <li><Link onClick={()=>{scrollTopHandler();showSidebar();}} to={"/product"}>Product</Link></li>
                <li><Link onClick={()=>{scrollTopHandler();showSidebar();}} to={"/contact-us"}>Contact Us</Link></li>
            </ul>
        </nav>
        <nav className={styles.navbar}>
            <Link to={"/"} onClick={scrollTopHandler} className={styles.logo}><img className={styles.logoImage} src={LogoImage} alt=""/></Link>
            

            <ul className={`${styles.navUl} `}>
                <li className={`${styles.navbarDisplay}`}><Link onClick={scrollTopHandler} to={"/"}>Home</Link></li>
                <li className={`${styles.navbarDisplay}`}><Link onClick={scrollTopHandler} to={"/about-us"}>About Us</Link></li>
                <li className={`${styles.navbarDisplay}`}><Link onClick={scrollTopHandler} to={"/product"}>Product</Link></li>
                <li className={`${styles.navbarDisplay}`}><Link onClick={scrollTopHandler} to={"/contact-us"}>Contact Us</Link></li>
                <li onClick={showSidebar} className={styles.logoBox}><a style={{cursor: "pointer"}}><GiHamburgerMenu className={styles.hamburgerIcon}/></a></li>
            </ul>
        </nav>
    </div>
  );

};

export default Header;
