import React, { useEffect, useState } from "react";
import styles from "./StockData.module.css";
import bg from "./bg1.jpg"

const StockData = () => {
  const [stockData, setStockData] = useState([]);
  const apiKey =  "pk_3f7d975674964c0da688026027da860f"  ; // Replace 'YOUR_API_KEY' with your IEX Cloud API key
 const companySymbols = [
  "AAPL", // Apple
  "MSFT", // Microsoft
  "GOOGL", // Google
  "AMZN", // Amazon
  "FB", // Facebook
  "TSLA", // Tesla
  "NFLX", // Netflix
  "DIS", // Disney

]; // Example top company symbols

  useEffect(() => {
    const fetchData = async () => {
      const requestData = companySymbols.map((symbol) =>
        fetch(
          `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiKey}`
        ).then((response) => response.json())
      );
      console.log(requestData)
      Promise.all(requestData)
        .then((data) => {
          setStockData(data);
        })
        .catch((error) => {
          console.error("Error while fetching: ", error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className={styles.outerBox} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.headingBox}>
        <h1>Stock Data</h1>
        <h3>Stock data of Top Companies like Apple, Tesla, Microsoft and others...</h3>
      </div>

      <div className={styles.dataContainer} >
        {stockData.map((data, index) => (
          <div key={index} className={styles.outerDataBox}>
            <div  className={styles.dataBox}>
            <div className={styles.companyName}><p>Company:</p> <span>{data.companyName}</span></div>
            <div><p>Symbol:</p> <span>{data.symbol}</span></div>
            <div><p>Latest Price:</p> <span>{data.latestPrice ? data.latestPrice : NaN}</span></div>
            <div><p>Open:</p> <span>{data.open ? data.open : NaN}</span></div>
            <div><p>High:</p> <span>{data.high  ? data.high : NaN}</span></div>
            <div><p>Low:</p> <span>{data.low  ? data.low : NaN}</span></div>
            <div><p>Close:</p> <span>{data.close  ? data.close : NaN}</span></div>
            <div><p>Volume:</p> <span>{data.volume  ? data.volume : NaN}</span></div>
          </div>
          {/* <hr /> */}
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default StockData;
