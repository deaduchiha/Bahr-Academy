import React from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";

const NewsResultCard = ({ name, author, img, navTo }) => {
  let compSubject = name;
  let newSubject;
  if (name.length >= 23) {
    newSubject = `${compSubject.substr(0, 23)} ...`;
  } else {
    newSubject = compSubject;
  }

  return (
    <div className={`shadow-sm ${styles.myCard}`}>
      <Link className={styles.myLink} to={navTo}>
        <img className={styles.myImg} src={img} alt="" />
        <div className={styles.nameHolder}>
          <span className={styles.myName}>
            <span className={styles.mobRemover}>عنوان</span> خبر : {newSubject}
          </span>
          <span className={styles.myName2}>نویسنده : {author} </span>
        </div>
      </Link>
    </div>
  );
};

export default NewsResultCard;
