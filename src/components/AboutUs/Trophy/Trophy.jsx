import React from "react";
import styles from "./Trophy.module.css";

import Etehadie from "../../../assets/images/Footer/etehadie.png";
import Etemad from "../../../assets/images/Footer/etemad.png";
import NeshanMeli from "../../../assets/images/Footer/neshanMeli.png";
const Trophy = () => {
  return (
    <>
      <div className="mb-4">
        <h3 style={{ marginTop: "100px" }} className={`${styles.title} mb-5`}>
          نماد ها و افتخارات
        </h3>
        <div className={`${styles.namad}`}>
          <div className={styles.namadItems}>
            <img src={Etehadie} />
          </div>
          <div className={styles.namadItems}>
            <img src={Etemad} />
          </div>
          <div className={styles.namadItems}>
            <img src={NeshanMeli} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trophy;
