import React, { useState } from "react";
import styles from "./Product.module.css";
import Tesseract from "tesseract.js";

const Product = () => {
  const [text, setText] = useState("");
  const [wordsToCheck, setWordsToCheck] = useState("");
  const [results, setResults] = useState([]);
  const [tempWordsToCheck, setTempWordsToCheck] = useState("");

  const wordInputHandler = (event) => {
    console.log("Entered")
    setTempWordsToCheck(event.target.value);
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const {
      data: { text },
    } = await Tesseract.recognize(file, "eng");
    console.log(text);
    setText(text);
  };

  const checkWord = () => {
    console.log("Entered HEREE")
    setWordsToCheck(tempWordsToCheck);
    const storeArray = tempWordsToCheck.split(",").map((item) => item.trim());
    console.log("Trimmed Words Array: ",storeArray)
    const dataArray = storeArray.map((item) =>
      text.toLowerCase().includes(item.toLowerCase())
    );
    console.log("Result Array: ", dataArray)
    setResults(dataArray);
  };

  return (
    <div className={styles.outerBox}>
      <input type="file" onChange={handleFileChange} />
      <div>
        <input
          value={tempWordsToCheck}
          type="text"
          onChange={wordInputHandler}
        />
      </div>
      <div>
        <button onClick={checkWord}> Check the word entered! </button>
      </div>
      <div>TextData: {text}</div>
      {results.map((result, index) => (
        <div key={index}>
          {result && wordsToCheck.split(",")[index].trim()}:{' '}
          {result
            ? "word is present in the image."
            : "word is not present in the image."}
        </div>
      ))}
    </div>
  );
};

export default Product;
