import React from "react";
import styles from "./Members.module.css";
import MemberCard from "./MemberCard";

import soheil from "../../../assets/images/Servises/Soheil.jpg";
import alireza from "../../../assets/images/Servises/alireza.jpg";
import shole from "../../../assets/images/Servises/shole.jpg";

const Members = (props) => {
  return (
    <>
      <h4 className={`${styles.membersTitle} mt-5 mb-4`}>تیم ما</h4>
      <div className={`${styles.members} mb-5`}>
        <MemberCard
          image={alireza}
          name="علیرضا نیکزاد"
          ability="Front-End Developer"
        />
        <MemberCard image={soheil} name="سهیل جعفری" ability="Full-Stack" />
        <MemberCard
          image={shole}
          name="شعله موفقی"
          ability="Front-End Developer"
        />
      </div>
    </>
  );
};

export default Members;
