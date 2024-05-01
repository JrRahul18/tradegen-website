import React from "react";
import styles from "./ContactUs.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import contactData from "./ContactData";

const ContactUs = () => {
  return (
    <div>
      <h1 className={styles.contactHeading}>Contact Us</h1>

    <div className={styles.outerContainer}>
      <div className={styles.mapContainer}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.248071560606!2d77.36351417649898!3d28.62232628454246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefd1a68d27af%3A0xca8dea55ab2b9d31!2sMob%20Fountain%20Media%20Private%20Limited!5e0!3m2!1sen!2sin!4v1711711542991!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          // loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.contactBox}>
        <div className={styles.addressBox}  data-aos="zoom-in" data-aos-delay="400" data-aos-duration="500">
          <FaLocationDot className={styles.contactIcons} />
          <span>Address</span>
          <a href={contactData.myAddress} target="_blank">
            {" "}
            <p>
              C-405,406, One Business Tower, Sector 62, Noida, Uttar Pradesh
              201309
            </p>
          </a>
        </div>

        <div className={styles.numberBox}  data-aos="zoom-in" data-aos-delay="400" data-aos-duration="500">
          <MdOutlinePhoneInTalk className={styles.contactIcons} />
          <span>Number</span>
          <a href= {`https://wa.me/${contactData.myContactNumber}`} target="_blank" rel="noopener noreferrer">
            <p>{contactData.myContactNumber}</p>
          </a>
        </div>
        <div className={styles.emailBox}  data-aos="zoom-in" data-aos-delay="400" data-aos-duration="500">
          <IoIosMail className={styles.contactIcons} />
          <span>Email</span>
          <a href={`mailto:${contactData.myEmail}`} target="_blank">
            <p>{contactData.myEmail}</p>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
