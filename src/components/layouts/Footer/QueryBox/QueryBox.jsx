import React, { useRef, useState, useEffect } from "react";
import styles from "./QueryBox.module.css";
import emailjs from "@emailjs/browser";

const QueryBox = () => {
  const formRef = useRef();
  const initialValue = {
    user_name: "",
    user_email: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [buttonClass, setButtonClass] = useState(true);

  const dataChangeHandler = (event) => {
    event.preventDefault();
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let getFormErrors = formValidation(formState);

    setFormErrors(getFormErrors);
    console.log("Form Errors: ",getFormErrors)
    console.log("Form State: ", formState);
    console.log("FormRef.Current: ", formRef.current);
    // console.log("Form Errors: ", formErrors);

    // setIsSubmit(true);
    if (Object.keys(getFormErrors).length === 0) {
      setButtonClass(false);

      
      emailjs
        .sendForm("service_y0jhpeg", "template_1bf9368", formRef.current, {
          publicKey: "K37KoRwPtXtyI_3Kl",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error);
          }
        ).then(setFormState(initialValue));
        setTimeout(() => {
          setButtonClass(true)
        }, 3000);

    }
    
  };

  const formValidation = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (formState.user_name.trim() === '') {
      errors.user_name = "Username is Required";

    }
    if (formState.user_email == '') {
      errors.user_email = "Email is Required";
    }
    if (!regex.test(formState.user_email)) {
      errors.user_email = "Invalid Mail Format! ";
    }
    if (formState.message.trim() === '') {
      errors.message = "Message is required! ";
    }
    return errors;
  };

  return (
    <div className={styles.outerBox}>
      <div className={styles.headingBox}>
        <h1>Have Any Message?</h1>
      </div>
      <div className={styles.formBox}>
        <form ref={formRef} action="" onSubmit={formSubmitHandler}>
          <div className={styles.box1}>
            <div className={styles.nameBox}>
              <label className={styles.inputLabel} htmlFor="">
                Name
              </label>
              <input
                value={formState.user_name}
                name="user_name"
                onChange={dataChangeHandler}
                className={styles.inputBox}
                type="text"
                placeholder="Enter Your Name"
              />
              <div className={styles.errorTag}>{formErrors.user_name}</div>
            </div>
            <div className={styles.emailBox}>
              <label className={styles.inputLabel} htmlFor="">
                Email
              </label>
              <input
                value={formState.user_email}
                name="user_email"
                onChange={dataChangeHandler}
                className={styles.inputBox}
                type="email"
                placeholder="Enter Your Email"
              />
              <div className={styles.errorTag}>{formErrors.user_email}</div>
            </div>
          </div>
          <div className={styles.box2}>
            <div className={styles.messageBox}>
              <label className={styles.inputLabel} htmlFor="">
                Message
              </label>
              <textarea
                value={formState.message}
                onChange={dataChangeHandler}
                className={styles.inputBox}
                name="message"
                placeholder="Enter Your Message"
                id=""
                cols="30"
                rows="4"
              ></textarea>
              <div className={styles.errorTag}>{formErrors.message}</div>
            </div>
          </div>
          <div className={styles.buttonBox}>
            <button id="myBtn" type="submit" className={styles.myBtn} style={buttonClass ?{}: {backgroundColor: "#24d424", animation: "none"}}> {buttonClass ? <span>SUBMIT</span> : <span style={{fontSize: "20px"}}>&#x2713;</span> }</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QueryBox;
