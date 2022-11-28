import React from "react";
import { Link } from "react-router-dom";

import styles from "../../components/Register/Registerform.module.css";

const LoginPicContainer = () => {
  const bamboo = require("../../assets/images/loginRegister/bamboo (d2).png");
  const insta = require("../../assets/images/loginRegister/insta.png");
  const tele = require("../../assets/images/loginRegister/tele.png");
  const wha = require("../../assets/images/loginRegister/wha.png");
  const yout = require("../../assets/images/loginRegister/yout.png");
  const home = require("../../assets/images/loginRegister/home12.png");
  const registerPic = require("../../assets/images/loginRegister/registerPic.png");

  return (
    <div
      className={`col-12 col-sm-6 col-md-7 col-lg-8 ${styles["pic-contain"]}`}
    >
      <div>
        <div className={styles.icons}>
          <h2>آکادمی آموزشی بامبو</h2>
          <img className={styles.logImg} src={bamboo} />
        </div>
        <ul className={styles.list}>
          <li style={{ backgroundImage: `url(${insta})` }}></li>

          <li style={{ backgroundImage: `url(${tele})` }}></li>

          <li style={{ backgroundImage: `url(${wha})` }}></li>

          <li style={{ backgroundImage: `url(${yout})` }}></li>
        </ul>
        <Link className={styles.homeLink} to="/">
          <img className={styles.home} src={home} />
        </Link>
      </div>
    </div>
  );
};

export default LoginPicContainer;
