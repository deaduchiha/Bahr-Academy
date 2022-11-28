import React from "react";
import styles from "./Master.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = (props) => {
  AOS.init();
  return (
    <>
      <div
        //data-aos="zoom-in-up"
        //data-aos-delay="100"
        className={`col p-4 mt-4 ${props.className}`}
      >
        <div className={`card ${styles.masterItems} ${styles.shadowdropbr}`}>
          <img
            src={props.masterImage}
            className={`card-img-top ${styles.imgg}`}
            alt="..."
          />
          <div className="card-body">
            <h5
              className={`card-title ${styles.title}`}
              style={{ width: "100%" }}
            >
              {props.masterName}
            </h5>
            <p
              className={`card-text p-2 ${styles.des}`}
              style={{ width: "100%" }}
            >
              {props.masterDes}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
