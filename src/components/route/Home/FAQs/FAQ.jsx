import React, { useState } from "react";
import styles from "./FAQ.module.css";
import faqData from "./FAQdata";

const FAQ = () => {
  const [ans, setAns] = useState(null);
  const showHandler = (index) => {
    if (index === ans) {
      setAns(null);
      return;
    }
    setAns(index);
  };
  return (
    <div className={styles.outerBox}>
      <div className={styles.headingContainer}>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className={styles.faqContainer}>
        {faqData.map((item, index) => {
          return (
            <div key={index} className={styles.itemContainer}>
              <div
                className={styles.questionBox}
                onClick={() => {
                  showHandler(index);
                }}
              >
                <p style={ans === index ? {color: "#07f5e9"}: {}}>{`Q${index + 1}. ${item.question}`}</p>
                <p>{ans === index ? "-" : "+"}</p>
              </div>
              { (
                <div
                  className={`${styles.answerBox} ${
                    ans === index ? styles.active : ""
                  }`}
                //   style={{ minHeight: ans === index ? "100px" : "0" }}
                >
                  <p>{ans === index && item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
