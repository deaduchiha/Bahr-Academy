import React from "react";
import styles from "./MapComp.module.css";

const MapItesm = (props) => {
  return (
    <>
        <div className={`${styles.icon}`}>{props.icon}</div>
        <div className={`${styles.title} mb-3`}>{props.title}</div>
        <div className={`${styles.des}`}>{props.des}</div>
    </>
  );
};

export default MapItesm;
