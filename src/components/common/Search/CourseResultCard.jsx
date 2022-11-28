import React from "react";
import styles from "./Search.module.css";
import { Link } from "react-router-dom";

const CourseResultCard = ({ name, teacher, img, navTo }) => {
  let compSubject = name;
  let newSubject;
  if (name.length >= 17) {
    newSubject = `${compSubject.substr(0, 17)} ...`;
  } else {
    newSubject = compSubject;
  }

  return (
    <div className={`shadow-sm ${styles.myCard}`}>
      <Link className={styles.myLink} to={navTo}>
        <img className={styles.myImg} src={img} alt="" />
        <div className={styles.nameHolder}>
          <span className={styles.myName}>
            <span className={styles.mobRemover}>عنوان</span> دوره : {newSubject}
          </span>
          <span className={styles.myName2}>مدرس : {teacher}</span>
        </div>
      </Link>
    </div>
  );
};

export default CourseResultCard;
