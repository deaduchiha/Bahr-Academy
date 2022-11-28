import React from "react";
import styles from "./Help.module.css";

const Cards = (props) => {
  return (
    <>
      <div className={`card mb-3 border-0 ${styles.cardHelp}`}>
        <div className="row g-0">
          <div
            className={`col-md-3 d-flex align-items-center justify-content-center ${styles.icon}`}
          >
            {props.icon}
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className={`card-title ${styles.title}`}>{props.title}</h5>
              <p className={`card-text ${styles.des}`}>{props.des}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
