import React from "react";
import styles from "./MasterAbout.module.css";
import MasterCard from "./MasterCard";
import master1 from "../../../assets/images/Master/master1.jpg";
import pirooz from "../../../assets/images/Master/pirooz.jpg";
import salar from "../../../assets/images/Master/salar.jpg";
import bahr from "../../../assets/images/Master/bahr.png";
import nazari from "../../../assets/images/Master/nazari.png";
import soheil from "../../../assets/images/Servises/Soheil.jpg";
import alireza from "../../../assets/images/Servises/alireza.jpg";

const MasterAbout = () => {
  return (
    <>
      <div className={`mt-4`}>
        <div
          style={{
            fontFamily: "lale",
            fontSize: "20px",
            color: "#004458",
            textAlign: "center",
            marginTop: "65px",
          }}
        >
          اساتید با تجربه
        </div>
        <div className={`row`}>
          <div className={`${styles.master}`}>
            <MasterCard
              image={bahr}
              masterName="محمد بحر العلوم"
              masterCarrier="ASP.NET"
            />
            <MasterCard
              image={nazari}
              masterName="حامد نظری"
              masterCarrier="Design"
            />
            <MasterCard
              image={master1}
              masterName="مهدی اصغری"
              masterCarrier="React Mastering"
            />
            <MasterCard
              image={pirooz}
              masterName="پیروز روشن ضمیر"
              masterCarrier="React"
            />
            <MasterCard
              image={soheil}
              masterName="سهیل جعفری"
              masterCarrier="Full-Stack"
            />
            <MasterCard
              image={alireza}
              masterName="علیرضا نیکزاد "
              masterCarrier="Front-end developer"
            />
            <MasterCard
              image={salar}
              masterName="سالار رضاییان"
              masterCarrier="Angular Js"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterAbout;
