import React from "react";
import styles from "./Lesson.module.css";

const Card = (props) => {
  return (
    <>
      <div className={`card border-0 ${styles.LessonCard}`}>
        <div className="card-body">
          <div className={styles.icon}>{props.icon}</div>
          <p className={`card-text ${styles.des}`}>{props.des}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
