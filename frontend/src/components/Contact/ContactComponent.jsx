import React from "react";
import styles from "./ContactComponent.module.css";

const ContactComponent = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Contact Information</h2>
      <div>
        <strong>Shop Address:</strong>
        <br />
        <p>
          11, Vallabh Vihar Colony, Sahastradhara Road, Maheshwer, Dist.
          Khargone, MP - 451224
        </p>
      </div>
      <div>
        <strong>Contact Details:</strong>
        <br />
        <span> Phone: +91 9826315825 </span>
        <br />
        <span>
          Whatsapp:{" "}
          <a
            href="https://api.whatsapp.com/send?phone=9826315825"
            target="_blank"
            className={styles.whastapp_Button}
            alt="whatsapp"
          >
            {/* <WhatsAppIcon sx={{ fontSize: 60 }} color="primary" /> */}
            <img
              className={styles.whatsapp_image}
              src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg"
              alt="whatsapp"
            ></img>
            +91 9826315825
          </a>
        </span>
      </div>
      <div>
        <strong>Opening Hours:</strong>
        <br />
        <span>Monday to Friday : 10am - 7 pm</span>
        <br />
        <span>Saturday and Sunday : 10am - 8pm</span>
      </div>
    </div>
  );
};

export default ContactComponent;
