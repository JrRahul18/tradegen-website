import React, { useEffect, useState } from 'react'
import styles from "./Error.module.css"
import ErrorImage from "./ErrorImage.png"


const Error = () => {
    const [secondCount, setSecondCount]=useState(5);
    useEffect(()=>{

        const intervalFn =setInterval(()=>{
            setSecondCount((prevState)=>{
                if(prevState === 1){
                    clearInterval(intervalFn);
                    window.location.pathname = '/';
                }
                else return prevState-1;
            })
        },1000);
        return ()=>{
            clearInterval(intervalFn);
        }
    }, [])
    
  return (
    <div className={styles.outerContainer}>
        <div className={styles.box1}>
            <img src={ErrorImage} alt="" />
        </div>
        <div className={styles.box2}>
            <h1>404</h1>
            <h2>Error</h2>
            <h3>Page Not Found</h3>
            <h4>{`Redirecting to Home Page in ${secondCount===undefined ? 0 : secondCount} ${secondCount === 1 || secondCount === undefined ? "second" : "seconds"}...`}</h4>
        </div>
    </div>
  )
}

export default Error