import React from "react";
import styles from "./MasterAbout.module.css";

const MasterCard = (props) => {
  return (
    <>
      <div className={` ${styles.masterCard}`}>
        <div className={`${styles.image}`}>
          <img src={props.image} alt="masterImage" />
        </div>
        <div className={`${styles.masterName}`}>
          <p>{props.masterName}</p>
        </div>
        <div className={`${styles.masterCarrier}`}>
          <p>{props.masterCarrier}</p>
        </div>
      </div>
    </>
  );
};

export default MasterCard;
